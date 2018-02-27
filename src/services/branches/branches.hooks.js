const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipBranches = require('../../hooks/relationship-branches');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipBranches()],
    get: [relationshipBranches()],
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
