const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPics = require('../../hooks/relationship-pics');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipPics()],
    find: [],
    get: [],
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
