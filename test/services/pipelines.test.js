const assert = require('assert');
const app = require('../../src/app');

describe('\'pipelines\' service', () => {
  it('registered the service', () => {
    const service = app.service('pipelines');

    assert.ok(service, 'Registered the service');
  });
});
