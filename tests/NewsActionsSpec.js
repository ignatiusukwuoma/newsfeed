import chai from 'chai';
import * as NewsActions from '../src/app/actions/NewsActions';

const expect = chai.expect;

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

  it('should have an displaySources Action', () => {
    expect(NewsActions.displaySources).to.not.equal(undefined);
  });
});
