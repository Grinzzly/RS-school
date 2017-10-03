const assert = require('assert');
const zeros = require('./src/index.js');

it('should calculate the number of zeros 1', () => {
  assert.equal(zeros('5!'), 1);
});

it('should calculate the number of zeros 3', () => {
  assert.equal(zeros('9!!*10!!*7!!'), 3);
});

it('should calculate the number of zeros 11', () => {
  assert.equal(zeros('90!!*10!!'), 11);
});

it('should calculate the number of zeros 7', () => {
  assert.equal(zeros('1!*2!*3!*4!*5!*6!*7!*8!*9!*10!'), 7);
});

it('should calculate the number of zeros 4', () => {
  assert.equal(zeros('1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!'), 4);
});

it('should calculate the number of zeros 1', () => {
  assert.equal(zeros('1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!*1!!*2!!*3!!*4!!*5!!*6!!*7!!*8!!*9!!*10!!'), 8);
});

it('should calculate the number of zeros 6', () => {
  assert.equal(zeros('10!!*20!!*30!!'), 6);
});

it('should calculate the number of zeros 7', () => {
  assert.equal(zeros('11!!*22!!*33!!'), 7);
});

it('should calculate the number of zeros 0', () => {
  assert.equal(zeros('55!!*77!!*99!!'), 0);
});

it('should calculate the number of zeros 0', () => {
  assert.equal(zeros('55!!*77!!*99!!*55!!*77!!*99!!*55!!*77!!*99!!*55!!*77!!*99!!'), 0);
});

it('should calculate the number of zeros 36', () => {
  assert.equal(zeros('100!*100!!'), 36);
});

it('should calculate the number of zeros 70', () => {
  assert.equal(zeros('99!*99!!*100!*100!!'), 70);
});

it('should calculate the number of zeros 18', () => {
  assert.equal(zeros('23!*24!!*25!*26!!*27!!'), 18);
});

it('should calculate the number of zeros 24', () => {
  assert.equal(zeros('45!*63!'), 24);
});

it('should calculate the number of zeros 30', () => {
  assert.equal(zeros('45!*63!*28!'), 30);
});

it('should calculate the number of zeros 1', () => {
  assert.equal(zeros('45!*63!*28!*55!!'), 37);
});

it('should calculate the number of zeros 48', () => {
  assert.equal(zeros('45!*63!*28!*55!!*35!!*45!!'), 48);
});

it('should calculate the number of zeros 66', () => {
  assert.equal(zeros('45!*63!*28!*55!!*35!!*45!!*25!!*65!!*50!!'), 66);
});

it('should calculate the number of zeros 82', () => {
  assert.equal(zeros('45!*63!*28!*55!!*35!!*45!!*25!!*65!!*50!!*40!!*95!!'), 82);
});

it('should calculate the number of zeros 88', () => {
  assert.equal(zeros('45!*63!*28!*55!!*35!!*45!!*25!!*65!!*50!!*40!!*95!!*25!'), 88);
});

it('should calculate the number of zeros 125', () => {
  assert.equal(zeros('45!*63!*28!*55!!*35!!*45!!*25!!*65!!*50!!*40!!*95!!*25!*45!*63!*28!*55!!'), 125);
});

it('should calculate the number of zeros 93', () => {
  assert.equal(zeros('45!*5!*63!*5!*28!*5!*55!!*5!*35!!*5!*45!!*5!*25!!*5!*65!!*5!*50!!*5!*40!!*5!*95!!*5!'), 93);
});
