const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const relationshipTeamUpdates = require('../../src/hooks/relationship-team-updates');

describe('\'relationship-team-updates\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: relationshipTeamUpdates()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
