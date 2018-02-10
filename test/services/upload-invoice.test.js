const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-invoice\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-invoice');

    assert.ok(service, 'Registered the service');
  });
});
