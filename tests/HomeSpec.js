import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import Home from '../src/app/components/Home';
import Sidebar from '../src/app/components/layouts/Sidebar';
import MainScreen from '../src/app/components/layouts/MainScreen';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Home component', () => {
  it('should be defined', () => {
    expect(<Home />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Home {...data}/>);

describe('After rendering, the Home component', () => {
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have Sidebar as its child component', () => {
    expect(wrapper).to.have.descendants(Sidebar);
  });

  it('should be a sidebar with row', () => {
    expect(wrapper.find('.row')).be.present();
  });
});


describe('The Sidebar component, child of Home,', () => {
  it('should receives props named `source` from Sidebar', () => {
    expect(wrapper.find(Sidebar).first()).to.have.prop('sources');
  });
});

describe('The component', () => {
  const children = wrapper.children();
  it('should have two direct children of the top most div', () => {
    expect(children).to.have.length(2);
  });
});
