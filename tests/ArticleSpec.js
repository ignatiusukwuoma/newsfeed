import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import Article from '../src/app/components/Article';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Article component', () => {
  it('should be defined', () => {
    expect(<Article />).to.not.equal(undefined);
  });
});

const article = {
  title: 'Reasons to be cheerful',
  description: 'There are many reasons to be cheerful. Number one, you are alive...',
  url: 'https://foo.hotnews.com',
  urlImage: 'https://bar.hotnews.com/image.png',
  author: 'The Reporter',
  date: '2017-05-21T14:40:57Z',
};
const wrapper = shallow(<Article article={article}/>);

describe('The Article component', () => {
  it('should have the class name `article` in the article tag', () => {
    expect(wrapper.find('article')).to.have.className('article');
  });

  it('should have a descendant with the class `preview`', () => {
    expect(wrapper).to.have.descendants('.preview');
  });

  it('should have only one image', () => {
    expect(wrapper).to.have.exactly(1).descendants('.img-responsive');
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
