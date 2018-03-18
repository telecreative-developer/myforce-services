const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipChecks = require('../../hooks/relationship-checks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipChecks()],
    get: [relationshipChecks()],
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
