import { GitEmbedParseOptions } from './parse';
/**
 * git embed
 * @param url
 * @param options
 * @returns
 */
declare function gitEmbed(url: string, options?: Partial<GitEmbedParseOptions>): Promise<{
    fullResponse: string;
    result: string;
    highlighted: string;
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
}>;
export default gitEmbed;
