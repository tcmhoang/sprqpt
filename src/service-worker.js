/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

const sw = /** @type ServiceWorkerGlobalScope */ (/** @type unknown */ (self));

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

const supportSchema = ['https:', 'http:'];

self.addEventListener('install', (e) => {
	const event = /** @type FetchEvent */ (e);
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
		await sw.skipWaiting();
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (e) => {
	const event = /** @type FetchEvent */ (e);
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
		await sw.clients.claim();
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (e) => {
	// ignore POST requests etc
	const event = /** @type FetchEvent */ (e);
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}
			const scheme = new URL(event.request.url).protocol;

			if (response.status == 200 && supportSchema.some((v) => v == scheme)) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});
