"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSource = void 0;
var languages_json_1 = __importDefault(require("./languages.json"));
//<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script>
//<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"></script>
/**
 * parse url
 * @param url source url
 * @param opts
 * @returns
 */
function parseSource(url, opts) {
    var defaults = {
        fetchFromJsDelivr: false,
        style: 'github',
        tabSize: 8,
        showCopy: true,
        showBorder: true,
        showLineNumbers: true,
        type: 'code',
        showFileMeta: false,
        showFullPath: false
    };
    var config = Object.assign(defaults, opts || {});
    var style = config.style, type = config.type, fetchFromJsDelivr = config.fetchFromJsDelivr;
    var containerId = Math.random().toString(36).substring(2);
    var target;
    try {
        target = new URL(url);
    }
    catch (_error) {
        target = new URL(decodeURIComponent(url));
    }
    //const params = target.searchParams;
    var styleClassName = "hljs-style-".concat(style.replace(/[^a-zA-Z0-9]/g, '-'));
    var lightStyles = [
        'default',
        'a11y-light',
        'arduino-light',
        'ascetic',
        'atom-one-light',
        'brown-paper',
        'color-brewer',
        'docco',
        'foundation',
        'github',
        'googlecode',
        'gradient-light',
        'grayscale',
        'idea',
        'intellij-light',
        'isbl-editor-light',
        'kimbie-light',
        'lightfair',
        'magula',
        'mono-blue',
        'nnfx-light',
        'panda-syntax-light',
        'paraiso-light',
        'purebasic',
        'qtcreator-light',
        'routeros',
        'school-book',
        'stackoverflow-light',
        'tokyo-night-light',
        'vs',
        'xcode',
        'base16/atelier-cave-light',
        'base16/atelier-dune-light',
        'base16/atelier-estuary-light',
        'base16/atelier-forest-light',
        'base16/atelier-heath-light',
        'base16/atelier-lakeside-light',
        'base16/atelier-plateau-light',
        'base16/atelier-savanna-light',
        'base16/atelier-seaside-light',
        'base16/atelier-sulphurpool-light',
        'base16/brush-trees',
        'base16/classic-light',
        'base16/cupcake',
        'base16/cupertino',
        'base16/default-light',
        'base16/dirtysea',
        'base16/edge-light',
        'base16/equilibrium-gray-light',
        'base16/equilibrium-light',
        'base16/fruit-soda',
        'base16/github',
        'base16/google-light',
        'base16/grayscale-light',
        'base16/gruvbox-light-hard',
        'base16/gruvbox-light-medium',
        'base16/gruvbox-light-soft',
        'base16/harmonic16-light',
        'base16/heetch-light',
        'base16/horizon-light',
        'base16/humanoid-light',
        'base16/ia-light',
        'base16/material-lighter',
        'base16/mexico-light',
        'base16/one-light',
        'base16/papercolor-light',
        'base16/ros-pine-dawn',
        'base16/sagelight',
        'base16/shapeshifter',
        'base16/silk-light',
        'base16/solar-flare-light',
        'base16/solarized-light',
        'base16/summerfruit-light',
        'base16/synth-midnight-terminal-light',
        'base16/tomorrow',
        'base16/unikitty-light',
        'base16/windows-10-light',
        'base16/windows-95-light',
        'base16/windows-high-contrast-light',
        'base16/windows-nt-light'
    ];
    var isDarkStyle = !lightStyles.includes(style) && type === 'code';
    var lineSplit = target.hash.split('-');
    var startLine = (target.hash !== '' && lineSplit[0].replace('#L', '')) || -1;
    var endLine = (target.hash !== '' && lineSplit.length > 1 && lineSplit[1].replace('L', '')) || startLine;
    var pathSplit = target.pathname.split('/');
    var user = pathSplit[1];
    var repository = pathSplit[2];
    var branch = pathSplit[4];
    var filePath = pathSplit.slice(5, pathSplit.length).join('/');
    var directoryPath = pathSplit.slice(5, pathSplit.length - 1).join('/');
    var fileExtension = filePath.split('.').length > 1 ? filePath.split('.').pop().trim() : 'txt';
    // ^ 6 5 %
    var language = (languages_json_1.default === null || languages_json_1.default === void 0 ? void 0 : languages_json_1.default.filter(function (o) {
        var _a;
        if (o.name == fileExtension)
            return true;
        if ((_a = o.extensions) === null || _a === void 0 ? void 0 : _a.some(function (ext) { return ext == '.' + fileExtension.replace(/^\./, ''); }))
            return true;
        return false;
    })[0].name.toLowerCase()) || fileExtension;
    var fileURL = target.href;
    // @FIXME: change url
    var sourceURL = new URL('https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on');
    var serviceProvider = new URL('./', sourceURL.href).href;
    var rawFileURL = fetchFromJsDelivr
        ? "https://cdn.jsdelivr.net/gh/".concat(user, "/").concat(repository, "@").concat(branch, "/").concat(filePath)
        : "https://raw.githubusercontent.com/".concat(user, "/").concat(repository, "/").concat(branch, "/").concat(filePath);
    var rawDirectoryURL = fetchFromJsDelivr
        ? "https://cdn.jsdelivr.net/gh/".concat(user, "/").concat(repository, "@").concat(branch, "/").concat(directoryPath, "/")
        : "https://raw.githubusercontent.com/".concat(user, "/").concat(repository, "/").concat(branch, "/").concat(directoryPath, "/");
    return __assign({ rawDirectoryURL: rawDirectoryURL, rawFileURL: rawFileURL, serviceProvider: serviceProvider, fileURL: fileURL, fileExtension: fileExtension, styleClassName: styleClassName, isDarkStyle: isDarkStyle, endLine: endLine, containerId: containerId, url: url, startLine: startLine, 
        /**
         * programming language
         */
        language: language }, config);
}
exports.parseSource = parseSource;
