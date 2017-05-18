import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Source from '../../src/app/components/Source';
import * as data from '../testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Source component', () => {
  it('should be defined', () => {
    expect(<Source />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Source source={data.sources[0]} />);

describe('After rendering, the source component', () => {
  it('should have an li tag rendered, which contains everything else', () => {
    expect(wrapper).to.have.tagName('li');
  });

  it('should have an element with class name `sources`', () => {
    expect(wrapper.find('.sources')).be.present();
  });

  it('should have its Link tag math the class name `sourcesLink`', () => {
    expect(wrapper.find('Link')).to.match('.sourcesLink');
  });
});
