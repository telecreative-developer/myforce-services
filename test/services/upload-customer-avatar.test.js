const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-customer-avatar\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-customer-avatar');

    assert.ok(service, 'Registered the service');
  });
});
