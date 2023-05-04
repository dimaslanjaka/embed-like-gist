import fetchSource from './fetch';
import { GitEmbedParseOptions, parseSource } from './parse';

/**
 * git embed
 * @param url
 * @param options
 * @returns
 */
async function gitEmbed(url: string, options?: Partial<GitEmbedParseOptions>) {
  const parse = parseSource(url, options as Required<GitEmbedParseOptions>);
  const fetch = await fetchSource(parse);
  return {
    parseResult: parse,
    ...fetch
  };
}

export default gitEmbed;
