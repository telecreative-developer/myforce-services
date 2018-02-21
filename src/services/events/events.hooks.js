const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipEvents = require('../../hooks/relationship-events');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipEvents()],
    get: [relationshipEvents()],
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
