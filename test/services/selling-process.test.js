const assert = require('assert');
const app = require('../../src/app');

describe('\'selling-process\' service', () => {
  it('registered the service', () => {
    const service = app.service('selling-process');

    assert.ok(service, 'Registered the service');
  });
});
