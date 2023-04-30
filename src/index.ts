import fetchSource from './fetch';
import { GitEmbedParseOptions, parseSource } from './parse';

/**
 * git embed
 * @param url
 * @param options
 * @returns
 */
function gitEmbed(url: string, options?: GitEmbedParseOptions) {
  const parse = parseSource(url, options);
  const fetch = fetchSource(parse);
  return {
    parseResult: parse,
    ...fetch
  };
}

export default gitEmbed;
