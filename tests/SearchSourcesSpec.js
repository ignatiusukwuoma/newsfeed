import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import SearchSources from '../src/app/components/SearchSources';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The SearchSources component', () => {
  it('should be defined', () => {
    expect(<SearchSources />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<SearchSources sources={data.sources}/>);

describe('After rendering, the mainscreen component', () => {
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have an element with class name `searched-sources`', () => {
    expect(wrapper.find('.searched-sources')).be.present();
  });

  it('should have a form tag with class name `navbar-form`', () => {
    expect(wrapper.find('form')).to.match('.navbar-form');
  });

  it('should have a state with key `search` be an empty string', () => {
    expect(wrapper).to.have.state('search', '');
  });
});

describe('The component', () => {
  const children = wrapper.children();
  it('should have two direct children of the top most div', () => {
    expect(children).to.have.length(2);
  });

  it('should have a first child with an class of `navbar-right`', () => {
    expect(children.at(0)).to.have.className('navbar-right');
  });

  it('should have a first child that contains a div element with a class name of `form-group`', () => {
    expect(children.at(0).find('div')).to.have.className('form-group');
  });

  it('should have a second child with an class name of `searched-sources`', () => {
    expect(children.at(1)).to.have.className('searched-sources');
  });
});
