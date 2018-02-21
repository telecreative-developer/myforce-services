const assert = require('assert');
const app = require('../../src/app');

describe('\'team-updates\' service', () => {
  it('registered the service', () => {
    const service = app.service('team-updates');

    assert.ok(service, 'Registered the service');
  });
});
