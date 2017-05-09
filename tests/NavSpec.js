import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Nav from '../src/app/components/layouts/Nav';
import SearchSources from '../src/app/components/SearchSources';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Nav component', () => {
  it('should be defined', () => {
    expect(Nav).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Nav {...data} location={global.window.location} />);

describe('When rendered, Nav component', () => {
  it('should have a child component named `SearchSources`', () => {
    expect(wrapper).to.have.descendants(SearchSources);
  });

  it('should have the menu icons for navbar toggle', () => {
    expect(wrapper).to.have.exactly(3).descendants('.icon-bar');
  });

  it('should have a dropdown by the User\'s name', () => {
    expect(wrapper.find('.dropdown')).be.present();
  });

  it('should have the name and logo of the application in the right place', () => {
    expect(wrapper.find('.navbar-brand')).to.have.html('<a class="navbar-brand" href="/">Hottest News</a>');
  });

  it('should have a state with key `collapsed` and value `true`', () => {
    expect(wrapper).to.have.state('collapsed', true);
  });

  const child = wrapper.children();

  it('should have one direct child', () => {
    expect(child).to.have.length(1);
  });

  it('should have a child with an class name of `container-fluid`', () => {
    expect(child).to.have.className('container-fluid');
  });
});

describe('The child component of Nav', () => {
  it('should have two props', () => {
    expect(wrapper.find(SearchSources)).to.have.props(['sources', 'headlines']);
  });

  it('should have a prop `sources` that gets the sources props of the Nav component', () => {
    expect(wrapper.find(SearchSources)).to.have.prop('sources').deep.equal(data.sources);
  });
});
