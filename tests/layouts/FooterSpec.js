import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Footer from '../../src/app/components/layouts/Footer';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Footer component', () => {
  it('should be defined', () => {
    expect(<Footer />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Footer />);

describe('After rendering, the footer component', () => {
  it('should have a footer tag', () => {
    expect(wrapper).to.have.tagName('footer');
  });

  it('should have a p tag which contains the text `TIA`', () => {
    expect(wrapper.find('p')).to.contain.text('TIA');
  });
});
