const assert = require('assert');
const app = require('../../src/app');

describe('\'managers\' service', () => {
  it('registered the service', () => {
    const service = app.service('managers');

    assert.ok(service, 'Registered the service');
  });
});
