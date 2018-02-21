const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipTeamUpdates = require('../../hooks/relationship-team-updates');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipTeamUpdates()],
    get: [relationshipTeamUpdates()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
