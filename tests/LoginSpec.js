import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Login from '../src/app/components/Login';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Login component', () => {
  it('should be defined', () => {
    expect(<Login />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Login />);

describe('After rendering, the login component', () => {
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have an element with class name `headline`', () => {
    expect(wrapper.find('.headline')).be.present();
  });

  it('should contain the text `Hottest News` in the h1 tag', () => {
    expect(wrapper.find('h1')).to.contain.text('HOTTEST NEWS');
  });

  it('should contain the firebase UI container', () => {
    expect(wrapper.find('#firebaseui-container')).be.present();
  });
});

describe('The child element', () => {
  const children = wrapper.children();
  it('should have two direct children', () => {
    expect(children).to.have.length(2);
  });

  it('should have a first child with an class name of `brand`', () => {
    expect(children.at(0)).to.have.className('brand');
  });

  it('should have a second child with an class name of `content`', () => {
    expect(children.at(1)).to.have.className('content');
  });
});
