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
  it('should have a div as the first child', () => {
    expect(wrapper).to.have.tagName('div');
  });

  it('should have Source as its child component', () => {
    expect(wrapper).to.have.descendants(Source);
  });

  it('should be a sidebar with col-sm-2', () => {
    expect(wrapper.find('.col-sm-2')).be.present();
  });

  it('should contain the text `News Sources` in the h4 tag', () => {
    expect(wrapper.find('h4')).to.contain.text('News Sources');
  });

  it('should have a state with key `defaultId` and value `techcrunch`', () => {
    expect(wrapper).to.have.state('defaultId', 'techcrunch');
  });

  it('should have nine different source groups', () => {
    expect(wrapper).to.have.exactly(9).descendants('.sourceGroup');
  });
});


describe('The Source component, child of Sidebar,', () => {
  it('should receives props named `source` from Sidebar', () => {
    expect(wrapper.find(Source).first()).to.have.prop('source');
  });
});

describe('The component', () => {
  const children = wrapper.children();
  it('should have nineteen direct children of the top most div', () => {
    expect(children).to.have.length(19);
  });

  it('should have a second child with a class of `sourceGroup`', () => {
    expect(children.at(1)).to.have.className('sourceGroup');
  });
});
