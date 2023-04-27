import langJSON from './languages.json';

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

//<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script>
//<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"></script>

/**
 * parse url
 * @param url source url
 * @param opts
 * @returns
 */
export function parseSource(url: string, opts?: parseOpts) {
  const defaults: parseOpts = {
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
  const config = Object.assign(defaults, opts || {});
  const { style, type, fetchFromJsDelivr } = config;
  const containerId = Math.random().toString(36).substring(2);

  let target: URL;
  try {
    target = new URL(url);
  } catch (_error) {
    target = new URL(decodeURIComponent(url));
  }

  //const params = target.searchParams;
  const styleClassName = `hljs-style-${style.replace(/[^a-zA-Z0-9]/g, '-')}`;
  const lightStyles = [
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
  const isDarkStyle = !lightStyles.includes(style) && type === 'code';
  const lineSplit = target.hash.split('-');
  const startLine = (target.hash !== '' && lineSplit[0].replace('#L', '')) || -1;
  const endLine = (target.hash !== '' && lineSplit.length > 1 && lineSplit[1].replace('L', '')) || startLine;
  const pathSplit = target.pathname.split('/');
  const user = pathSplit[1];
  const repository = pathSplit[2];
  const branch = pathSplit[4];
  const filePath = pathSplit.slice(5, pathSplit.length).join('/');
  const directoryPath = pathSplit.slice(5, pathSplit.length - 1).join('/');
  const fileExtension = filePath.split('.').length > 1 ? filePath.split('.').pop() : 'txt';

  const language = langJSON.filter((o) => {
    if (o.name == fileExtension) return true;
    if (o.extensions.some((ext) => ext == fileExtension)) return true;
    return false;
  });

  const fileURL = target.href;
  // @FIXME: change url
  const sourceURL = new URL(
    'https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158&style=github&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on'
  );
  const serviceProvider = new URL('./', sourceURL.href).href;
  const rawFileURL = fetchFromJsDelivr
    ? `https://cdn.jsdelivr.net/gh/${user}/${repository}@${branch}/${filePath}`
    : `https://raw.githubusercontent.com/${user}/${repository}/${branch}/${filePath}`;
  const rawDirectoryURL = fetchFromJsDelivr
    ? `https://cdn.jsdelivr.net/gh/${user}/${repository}@${branch}/${directoryPath}/`
    : `https://raw.githubusercontent.com/${user}/${repository}/${branch}/${directoryPath}/`;

  return {
    rawDirectoryURL,
    rawFileURL,
    serviceProvider,
    fileURL,
    fileExtension,
    styleClassName,
    isDarkStyle,
    endLine,
    containerId,
    url,
    startLine,
    /**
     * programming language
     */
    language,
    ...config
  };
}
