import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Article from '../src/app/components/Article';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Article component', () => {
  it('should be defined', () => {
    expect(<Article />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Article article={data.news}/>);

describe('The Article component', () => {
  it('should have the class name `article` in the article tag', () => {
    expect(wrapper.find('article')).to.have.className('article');
  });

  it('should have a descendant with the class `preview`', () => {
    expect(wrapper).to.have.descendants('.preview');
  });

  it('should have the h4 tag', () => {
    expect(wrapper.find('h4')).be.present();
  });

  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });
});

describe('In the Article component,', () => {
  const links = wrapper.find('a');
  it('all links should open in a new tab', () => {
    expect(links.every('[target="_blank"]')).to.equal(true);
  });
});
