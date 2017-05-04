import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Source from '../src/app/components/Source';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Sort component', () => {
  it('should be defined', () => {
    expect(<Source />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Source source={data} />);

describe('After rendering, the source component', () => {
  it('should have an li tag as the onlychild', () => {
    expect(wrapper).to.have.tagName('li');
  });

  it('should have an element with class name `sources`', () => {
    expect(wrapper.find('.sources')).be.present();
  });
});
