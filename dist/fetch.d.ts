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
     * raw fetch response
     *
     * splitted result when `#L` exist in url otherwise full codes
     */
    result: string;
    /**
     * hihglighed codes using highlight.js
     */
    highlighted: string;
}>;
