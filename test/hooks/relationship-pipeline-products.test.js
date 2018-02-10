const assert = require('assert');
const relationshipPipelineProducts = require('../../src/hooks/relationship-pipeline-products');

describe('\'relationship-pipeline-products\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = relationshipPipelineProducts();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
