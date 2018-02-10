const assert = require('assert');
const app = require('../../src/app');

describe('\'regionals\' service', () => {
  it('registered the service', () => {
    const service = app.service('regionals');

    assert.ok(service, 'Registered the service');
  });
});
