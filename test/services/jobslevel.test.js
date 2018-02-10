const assert = require('assert');
const app = require('../../src/app');

describe('\'jobslevel\' service', () => {
  it('registered the service', () => {
    const service = app.service('jobslevel');

    assert.ok(service, 'Registered the service');
  });
});
