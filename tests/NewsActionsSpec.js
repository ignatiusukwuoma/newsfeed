import chai from 'chai';
import sinon from 'sinon';
import * as NewsActions from '../src/app/actions/NewsActions';
import dispatcher from '../src/app/dispatcher';

const expect = chai.expect;
const sourceId = 'techcrunch';
const sortBy = 'top';

describe('NewsActions', () => {
  it('should be defined', () => {
    expect(NewsActions).to.not.equal(undefined);
  });
});

describe('NewsActions', () => {
  it('should have a displayNews Action', () => {
    expect(NewsActions.displayNews).to.not.equal(undefined);
  });

  it('should have an getWithSort Action', () => {
    expect(NewsActions.getWithSort).to.not.equal(undefined);
  });
});
