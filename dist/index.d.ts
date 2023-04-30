import { GitEmbedParseOptions } from './parse';
/**
 * git embed
 * @param url
 * @param options
 * @returns
 */
declare function gitEmbed(url: string, options?: GitEmbedParseOptions): {
    then<TResult1 = {
        fullResponse: string;
        result: string;
        highlighted: string;
    }, TResult2 = never>(onfulfilled?: (value: {
        fullResponse: string;
        result: string;
        highlighted: string;
    }) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<{
        fullResponse: string;
        result: string;
        highlighted: string;
    } | TResult>;
    finally(onfinally?: () => void): Promise<{
        fullResponse: string;
        result: string;
        highlighted: string;
    }>;
    [Symbol.toStringTag]: string;
    parseResult: {
        fetchFromJsDelivr: boolean | "on" | "off";
        style: "github" | "gist";
        showBorder: boolean | "on" | "off";
        type: "code" | "ipynb" | "markdown";
        showLineNumbers: boolean | "on" | "off";
        tabSize: number;
        showCopy: boolean | "on" | "off";
        showFileMeta: boolean | "on" | "off";
        showFullPath: boolean | "on" | "off";
        rawDirectoryURL: string;
        rawFileURL: string;
        serviceProvider: string;
        fileURL: string;
        fileExtension: string;
        styleClassName: string;
        isDarkStyle: boolean;
        endLine: string | number;
        containerId: string;
        url: string;
        startLine: string | number;
        language: string;
    };
};
export default gitEmbed;
