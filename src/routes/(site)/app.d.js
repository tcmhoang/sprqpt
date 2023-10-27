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

/** Contains a personal information to render Header
 * @typedef Deet
 * @property {string} icon
 * @property {string} text
 * @property {string} title
 */
