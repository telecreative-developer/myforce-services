const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipSubproducts = require('../../hooks/relationship-subproducts');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipSubproducts()],
    get: [relationshipSubproducts()],
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
