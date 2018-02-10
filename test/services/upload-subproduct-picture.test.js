const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-subproduct-picture\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-subproduct-picture');

    assert.ok(service, 'Registered the service');
  });
});
