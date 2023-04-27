export interface parseOpts {
    fetchFromJsDelivr: boolean | 'on' | 'off';
    style: 'github' | 'gist';
    showBorder: boolean | 'on' | 'off';
    type: 'code' | 'ipynb' | 'markdown';
    showLineNumbers: boolean | 'on' | 'off';
    tabSize: number;
    showCopy: boolean | 'on' | 'off';
    showFileMeta: boolean | 'on' | 'off';
    showFullPath: boolean | 'on' | 'off';
}
/**
 * parse url
 * @param url source url
 * @param opts
 * @returns
 */
export declare function parseSource(url: string, opts?: parseOpts): {
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
};
