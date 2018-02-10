const assert = require('assert');
const app = require('../../src/app');

describe('\'pipeline-products\' service', () => {
  it('registered the service', () => {
    const service = app.service('pipeline-products');

    assert.ok(service, 'Registered the service');
  });
});
