const helper = require('./helper.js');
const assert = require('assert');

it('default number of sams is 15', () => {
  assert.equal(helper.getSamCount(), 15);
}); 

it('subtract 1 from sam to be 14', () => {
  assert.equal(helper.subtractSamCount(), 14);
}); 

it('add 1 to sam to be 15', () => {
  assert.equal(helper.addSamCount(), 15);
}); 
