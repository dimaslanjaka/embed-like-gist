import axios from 'axios';
import { parseSource } from './parse';

/**
 * fetch source from parsed
 * @param parse parsed object
 * @returns
 */
export default function fetchSource(parse: ReturnType<typeof parseSource>) {
  return axios.get(parse.rawFileURL).then((res) => {
    let codeText: string = res.data;
    const fullResponse = codeText;

    if (codeText[codeText.length - 1] === '\n') {
      // First remove the ending newline
      codeText = codeText.slice(0, -1);
    }

    let codeTextSplit = codeText.split('\n');
    const startLine = parseInt(String(parse.startLine));
    const endLine = parseInt(String(parse.endLine));
    if (startLine > 0) {
      codeTextSplit = codeTextSplit.slice(startLine - 1, endLine);
    }

    let indicator = false;
    // Strip leading whitespace as otherwise we get pointless whitespace/indentation
    // for code snippets from the middle of functions (#22)
    while (indicator === false) {
      const firstChars = codeTextSplit.filter((s) => s.length > 0).map((s) => s[0]);
      if (new Set(firstChars).size == 1 && [' ', '\t'].includes(firstChars[0])) {
        // If all the lines begin with ' ' or '\t', strip the first char
        codeTextSplit = codeTextSplit.map((s) => s.slice(1));
      } else {
        indicator = true;
      }
    }

    codeText = codeTextSplit.join('\n');
    // Then add the newline back
    codeText = codeText + '\n';

    return {
      /**
       * full raw response
       */
      fullResponse,
      /**
       * splitted result when `#L` exist in url
       */
      result: codeText
    };
  });
}
