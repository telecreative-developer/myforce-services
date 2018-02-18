const { authenticate } = require('@feathersjs/authentication').hooks;

const realtionshipAnswers = require('../../hooks/realtionship-answers');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [realtionshipAnswers()],
    get: [realtionshipAnswers()],
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
