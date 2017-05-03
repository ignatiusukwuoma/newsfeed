import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Layout from '../src/app/components/Layout';
import Nav from '../src/app/components/layouts/Nav';
import Home from '../src/app/components/Home';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Layout component', () => {
  it('should be defined', () => {
    expect(<Layout />).to.not.equal(undefined);
  });
});

