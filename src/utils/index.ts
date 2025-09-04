// for some reason, React assumes that any link without an http/https protocol is internal,
// so we need to fix any submitted company links that do not start with http or https
export function toExternalUrl(url: string): string {
  return url.match(/(https|http):\/\//) ? url : `https://${url}`;
};

/**
 * 
 * @param companyName 
 * @returns 
 * @example
 * ```ts
 * const newName = nameToLogoName('Bluepoint Games'); // 'bluepoint-games-min'
 * ```
 */
export function nameToLogoName(companyName: string): string {
  // example: Bluepoint Games becomes bluepoint-games-min
  return companyName.trim().toLowerCase().replaceAll(/\s+/g, '-').replaceAll(/\(|\)|\.|,|!|:|\?|\/|\\|;|'|"|`/g, '') + '-min';
};

export * from './events';
export * from './time';
