import coffee from 'coffee';
import path from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

describe('test/index.test.ts', () => {
  it('should work', async () => {
    const tsc = require.resolve('typescript/bin/tsc');
    const fixturePath = path.join(__dirname, 'fixtures/apps/ts-proj');
    const tsconfigPath = path.join(fixturePath, 'tsconfig.json');
    await coffee.fork(tsc, [ '-p', tsconfigPath ], {
      cwd: fixturePath,
    })
      .debug()
      .expect('code', 0)
      .end();

    assert(await fs.stat(path.join(fixturePath, 'dist')));
  });
});
