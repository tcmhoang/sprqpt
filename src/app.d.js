/**
 * @typedef {import('svelte').ComponentType} Component
 */

/**
 * @typedef {Document & ViewTransitionAPI} WTDocument
 */

/**
 * @typedef ViewTransitionAPI
 * @property {Function} startViewTransition
 * @param {() => Promise<void> | void} callback
 */

/** Contains Css variables to modify the current theme in the iframe
 * @typedef {Object} CssModifier
 * @property {string} sys - apply system css
 * @property {string} dark - apply system css
 * @property {string} light - apply system css
 */

/** Contains information for constructing the banner instance
 * @typedef BannerData
 * @property {string} hero_url - url for the hero banner
 * @property {string} hero_alt - alt text
 * @property {CssModifier | null} hero_css - runtime injected css
 */

/** Contains a personal information to render the Header Component
 * @typedef Detail
 * @property {Component} icon
 * @property {string} text
 */

/** Contains a link information
 * @typedef Link
 * @property {string} label
 * @property {string} link
 */
/** Contains a link information to render w/ an icon
 * @typedef IconedLink
 * @property {string} label
 * @property {string} link
 * @property {Component} icon
 */

/**
 * @typedef DeviceOrientationIOS
 * @property {() => Promise<'granted' | 'denied'>} requestPermission
 */
