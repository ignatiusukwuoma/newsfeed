import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Error from '../../src/app/components/Error';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Error component', () => {
  it('should be defined', () => {
    expect(<Error />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Error />);

describe('After rendering, the login component', () => {
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have an element with class name `headline`', () => {
    expect(wrapper.find('.error-message')).be.present();
  });

  it('should contain the text `There was an error` in the p tag', () => {
    expect(wrapper.find('p')).to.contain.text('There was an error');
  });

  it('should contain the class that centers an element', () => {
    expect(wrapper.find('.text-center')).be.present();
  });

  it('should contain the container-fluid class', () => {
    expect(wrapper).to.have.className('container-fluid');
  });
});

