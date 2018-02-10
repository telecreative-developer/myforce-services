const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-avatar-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-avatar-user');

    assert.ok(service, 'Registered the service');
  });
});
