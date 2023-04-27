import { parseSource } from './parse';
/**
 * fetch source from parsed
 * @param parse parsed object
 * @returns
 */
export default function fetchSource(parse: ReturnType<typeof parseSource>): Promise<{
    /**
     * full raw response
     */
    fullResponse: string;
    /**
     * splitted result when `#L` exist in url
     */
    result: string;
    /**
     * hihglighed codes using highlight.js
     */
    highlighted: string;
}>;
