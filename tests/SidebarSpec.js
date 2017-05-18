import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Sidebar from '../src/app/components/layouts/Sidebar';
import Source from '../src/app/components/Source';
import * as data from './testData';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Sidebar component', () => {
  it('should be defined', () => {
    expect(<Sidebar />).to.not.equal(undefined);
  });
});

const wrapper = shallow(<Sidebar sources={data.sources} />);

describe('After rendering, the sidebar component', () => {
  it('should have Source as its child component', () => {
    expect(wrapper).to.have.descendants(Source);
  });

  it('should contain the text `News Sources` in the h4 tag', () => {
    expect(wrapper.find('h3')).to.contain.text('News Sources');
  });

  it('should have a state with key `defaultId` and value `techcrunch`', () => {
    expect(wrapper).to.have.state('defaultId', 'techcrunch');
  });

  it('should have only one descendant', () => {
    expect(wrapper).to.have.exactly(1).descendants('.sourceGroup');
  });
});


describe('The Source component, child of Sidebar,', () => {
  it('should receives the props `source` and `headlines` from Sidebar', () => {
    expect(wrapper.find(Source).first()).to.have.props(['source', 'headlines']);
  });
});
