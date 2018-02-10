const assert = require('assert');
const app = require('../../src/app');

describe('\'subproducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('subproducts');

    assert.ok(service, 'Registered the service');
  });
});
