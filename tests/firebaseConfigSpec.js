import chai from 'chai';
import firebaseConfig from '../src/app/firebaseConfig';

const expect = chai.expect;

describe('firebaseConfig()', () => {
  it('should be defined', () => {
    expect(firebaseConfig).to.not.equal(undefined);
  });
});
