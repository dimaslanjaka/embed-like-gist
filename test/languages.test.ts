import { describe, expect, it } from '@jest/globals';
import { parseSource } from '../src/parse';

describe('test languages', () => {
  it('should be php', () => {
    const url = 'https://github.com/php-curl-class/php-curl-class/blob/master/examples/delete.php';
    const parse = parseSource(url);
    expect(parse.language).toBe('php');
  });
});
