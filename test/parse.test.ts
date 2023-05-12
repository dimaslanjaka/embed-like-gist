import { describe, expect, test } from '@jest/globals';
import { parseSource } from '../src/parse';

describe('test parse', function () {
  const urls = {
    encoded:
      'https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fstatic-blog-generator%2Fblob%2Fe8ef351552d57c5e28e016e39e78fef139a8e7b2%2F.github%2Fworkflows%2Fbuild-beta.yml%23L152-L158',
    raw: 'https://github.com/dimaslanjaka/static-blog-generator/blob/e8ef351552d57c5e28e016e39e78fef139a8e7b2/.github/workflows/build-beta.yml#L152-L158'
  };
  for (const key in urls) {
    const url = urls[key];
    test(key + ' url', function () {
      const parse = parseSource(url);
      expect('url' in parse).toBeTruthy();
      expect(
        parse.fileURL ===
          'https://github.com/dimaslanjaka/static-blog-generator/blob/e8ef351552d57c5e28e016e39e78fef139a8e7b2/.github/workflows/build-beta.yml#L152-L158'
      ).toBeTruthy();
    });
  }
});
