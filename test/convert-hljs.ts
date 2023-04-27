import hljs from 'highlight.js';
import path from 'path';
import { writefile } from 'sbg-utility';
import fetchSource from '../src/fetch';
import { parseSource } from '../src/parse';

const parse = parseSource(
  'https://github.com/dimaslanjaka/static-blog-generator/blob/e8ef351552d57c5e28e016e39e78fef139a8e7b2/.github/workflows/build-beta.yml#L152-L158'
);
fetchSource(parse).then((obj) => {
  writefile(path.join(__dirname, '../tmp/fetch-response.html'), obj.fullResponse);
  writefile(path.join(__dirname, '../tmp/fetch-separated.html'), obj.result);
  const convert = hljs.highlight(obj.fullResponse, { language: parse.fileExtension });
  writefile(path.join(__dirname, '../tmp/fetch-hljs.html'), convert.value);
});
