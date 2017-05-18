import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Article from '../../src/app/components/Article';
import defaultUrlImage from '../../src/public/images/newsimage.jpg';
import * as data from '../testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Article component', () => {
  it('should be defined', () => {
    expect(Article).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Article article={data.news[0]}/>);

describe('The Article component', () => {
  it('should have the class name `article` in the article tag', () => {
    expect(wrapper.find('article')).to.have.className('article');
  });

  it('should have a class `preview`', () => {
    expect(wrapper).to.have.descendants('.preview');
  });

  it('should have the h4 tag', () => {
    expect(wrapper.find('h4')).be.present();
  });

  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have an empty p tag since article description is null', () => {
    expect(wrapper.find('p')).to.be.blank();
  });

  it('should have an image with src `urlImage` from the article API', () => {
    expect(wrapper.find('img')).to.have.attr('src')
      .equal(data.news[0].urlImage);
  });
});

describe('In the Article component,', () => {
  const links = wrapper.find('a');
  it('all links should open in a new tab', () => {
    expect(links.every('[target="_blank"]')).to.equal(true);
  });
});
