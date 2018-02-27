const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const invoices = require('./invoices/invoices.service.js');
const subproducts = require('./subproducts/subproducts.service.js');
const customers = require('./customers/customers.service.js');
const uploadAvatarUser = require('./upload-avatar-user/upload-avatar-user.service.js');
const pipelines = require('./pipelines/pipelines.service.js');
const pipelineProducts = require('./pipeline-products/pipeline-products.service.js');
const questions = require('./questions/questions.service.js');
const answers = require('./answers/answers.service.js');
const pics = require('./pics/pics.service.js');

const branches = require('./branches/branches.service.js');

const sellingProcess = require('./selling-process/selling-process.service.js');

const teamUpdates = require('./team-updates/team-updates.service.js');

const targets = require('./targets/targets.service.js');

const events = require('./events/events.service.js');

const managers = require('./managers/managers.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(products);
  app.configure(invoices);
  app.configure(subproducts);
  app.configure(customers);
  app.configure(uploadAvatarUser);
  app.configure(pipelines);
  app.configure(pipelineProducts);
  app.configure(questions);
  app.configure(answers);
  app.configure(pics);
  app.configure(branches);
  app.configure(sellingProcess);
  app.configure(teamUpdates);
  app.configure(targets);
  app.configure(events);
  app.configure(managers);
};
