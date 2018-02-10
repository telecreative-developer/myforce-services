const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-product-picture\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-product-picture');

    assert.ok(service, 'Registered the service');
  });
});
