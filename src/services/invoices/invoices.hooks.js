const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipInvoices = require('../../hooks/relationship-invoices');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipInvoices()],
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
