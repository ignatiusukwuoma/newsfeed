import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import MainScreen from '../../src/app/components/layouts/MainScreen';
import Article from '../../src/app/components/Article';
import Sort from '../../src/app/components/Sort';
import * as data from '../testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The MainScreen component', () => {
  it('should be defined', () => {
    expect(<MainScreen />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<MainScreen {...data}/>);

describe('After rendering, the mainscreen component', () => {
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have Article as its child component', () => {
    expect(wrapper).to.have.descendants(Article);
  });

  it('should have an element with class name `main-headers`', () => {
    expect(wrapper.find('.main-headers')).be.present();
  });

  it('should have a select tag with class name `styled-select`', () => {
    expect(wrapper.find('select')).to.match('.styled-select');
  });

  it('should contain the text `News` in the h2 tag', () => {
    expect(wrapper.find('h2')).to.contain.text('News');
  });

  it('should have the default value `sortby` for the select tag', () => {
    expect(wrapper.find('select')).to.have.value('sortby');
  });

  it('should have option tags with attributes of `value`', () => {
    expect(wrapper.find('option')).to.have.attr('value');
  });

  it('should have a state with key `defaultSort` and value `sortby`', () => {
    expect(wrapper).to.have.state('defaultSort', 'sortby');
  });
});


describe('The Article component, child of MainScreen,', () => {
  it('should receives props named `article` from MainScreen', () => {
    expect(wrapper.find(Article).first()).to.have.prop('article');
  });
});

describe('The component', () => {
  const children = wrapper.children();
  it('should have two direct children of the top most div', () => {
    expect(children).to.have.length(2);
  });

  it('should have a first child with an class of `main-headers`', () => {
    expect(children.at(0)).to.have.className('main-headers');
  });

  it('should have a select tag with class of `styled-select`', () => {
    expect(children.at(0).find('select')).to.have.className('styled-select');
  });

  it('should have a second child with an class name of `row`', () => {
    expect(children.at(1)).to.have.className('row');
  });
});
