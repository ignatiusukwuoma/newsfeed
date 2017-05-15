import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
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
  it('should have Sidebar as a child component', () => {
    expect(wrapper).to.have.descendants(Sidebar);
  });

  it('should have MainScreen as a child component', () => {
    expect(wrapper).to.have.descendants(Sidebar);
  });

  it('should have a class `row`', () => {
    expect(wrapper.find('.row')).be.present();
  });

  const children = wrapper.children();
  it('should have two children of the top most div', () => {
    expect(children).to.have.length(2);
  });
});


describe('The child of Home,', () => {
  it('Sidebar, should receive a prop named `source`', () => {
    expect(wrapper.find(Sidebar)).to.have.prop('sources');
  });

  it('MainScreen, should receive the prop `sortParameters`', () => {
    expect(wrapper.find(MainScreen)).to.have.prop('sortParameters');
  });
});
