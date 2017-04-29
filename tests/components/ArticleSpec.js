import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import Article from '../../src/app/components/Article';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Article component', () => {
  it('should be defined', () => {
    expect(Article).to.not.equal(undefined);
  });
});

const testProps = {
  id: '2341',
  title: 'It is alive!',
  description: 'The dog is alive! Yes! And that halves the price of garri in the market.',
  url: 'https://foo.example.com',
  imageUrl: 'https://bar.example.com/logo.png',
  author: 'Lagbaja Tamedu',
  publishedAt: '2016-04-21T13:45:57Z'
};

const emptyProps = {};
const firstWrapper = mount(<Article {...emptyProps} />);
describe('When NOT initialized with any props, the Article component', () => {
  it('should NOT have an id prop', () => {
    expect(firstWrapper).to.not.have.prop('id');
  });
  
  it('should NOT have a title prop', () => {
    expect(firstWrapper).to.not.have.prop('title');
  });
  
  it('should NOT have a description prop', () => {
    expect(firstWrapper).to.not.have.prop('description');
  });
  
  it('should NOT have a url prop', () => {
    expect(firstWrapper).to.not.have.prop('url');
  });

  it('should NOT have an author prop', () => {
    expect(firstWrapper).to.not.have.prop('author');
  });
  
  it('should NOT have a publishedAt prop', () => {
    expect(firstWrapper).to.not.have.prop('publishedAt');
  });
});