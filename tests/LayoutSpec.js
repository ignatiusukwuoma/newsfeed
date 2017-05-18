import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Layout from '../src/app/components/Layout';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Layout component', () => {
  it('should be defined', () => {
    expect(<Layout />).to.not.equal(undefined);
  });
});
