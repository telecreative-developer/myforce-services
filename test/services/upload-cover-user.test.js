const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-cover-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-cover-user');

    assert.ok(service, 'Registered the service');
  });
});
