const assert = require('assert');
const app = require('../../src/app');

describe('\'pics\' service', () => {
  it('registered the service', () => {
    const service = app.service('pics');

    assert.ok(service, 'Registered the service');
  });
});
