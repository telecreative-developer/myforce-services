const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipAnswers = require('../../hooks/relationship-answers');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [relationshipAnswers()],
    get: [relationshipAnswers()],
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
