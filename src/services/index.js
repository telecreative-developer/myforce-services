const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const invoices = require('./invoices/invoices.service.js');
const subproducts = require('./subproducts/subproducts.service.js');
const customers = require('./customers/customers.service.js');
const uploadCustomerAvatar = require('./upload-customer-avatar/upload-customer-avatar.service.js');
const uploadProductPicture = require('./upload-product-picture/upload-product-picture.service.js');
const uploadSubproductPicture = require('./upload-subproduct-picture/upload-subproduct-picture.service.js');
const uploadAvatarUser = require('./upload-avatar-user/upload-avatar-user.service.js');
const uploadInvoice = require('./upload-invoice/upload-invoice.service.js');
const regionals = require('./regionals/regionals.service.js');
const pipelines = require('./pipelines/pipelines.service.js');
const pipelineProducts = require('./pipeline-products/pipeline-products.service.js');
const questions = require('./questions/questions.service.js');
const answers = require('./answers/answers.service.js');
const pics = require('./pics/pics.service.js');

const branches = require('./branches/branches.service.js');

const sellingProcess = require('./selling-process/selling-process.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(products);
  app.configure(invoices);
  app.configure(subproducts);
  app.configure(customers);
  app.configure(uploadCustomerAvatar);
  app.configure(uploadProductPicture);
  app.configure(uploadSubproductPicture);
  app.configure(uploadAvatarUser);
  app.configure(uploadInvoice);
  app.configure(regionals);
  app.configure(pipelines);
  app.configure(pipelineProducts);
  app.configure(questions);
  app.configure(answers);
  app.configure(pics);
  app.configure(branches);
  app.configure(sellingProcess);
};
