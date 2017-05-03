import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Sort from '../src/app/components/Sort';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Sort component', () => {
  it('should be defined', () => {
    expect(<Sort />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Sort sort={data.sortArr} />);

describe('After rendering, the sort component', () => {
  it('should have an option tag as the onlychild', () => {
    expect(wrapper).to.have.tagName('option');
  });

  it('should have an option tag with attribute of `value`', () => {
    expect(wrapper.find('option')).to.have.attr('value');
  });
});
