import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import Layout from '../src/app/components/Layout';
import Nav from '../src/app/components/layouts/Nav';
import Home from '../src/app/components/Home';
import * as data from './testData';

// const localStorage = {
//   getItem: (key) => {
//     const values = {
//       name: 'Ignatius',
//       email: 'ignatius.ukwuoma@andela.com',
//       uid: '8575894',
//       photo: 'http://andela.com'
//     };
//     return values[key];
//   }
// };

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('The Layout component', () => {
  it('should be defined', () => {
    expect(<Layout />).to.not.equal(undefined);
  });
});

// const wrapper = mount(<Layout {...data}/>);

// describe('After rendering, the Layout component', () => {
//   it('should have a div as the first child', () => {
//     expect(wrapper).to.have.tagName('div');
//   });

//   it('should have Article as its child component', () => {
//     expect(wrapper).to.have.descendants(Article);
//   });

//   it('should have an element with class name `main-headers`', () => {
//     expect(wrapper.find('.main-headers')).be.present();
//   });

//   it('should have a select tag with class name `styled-select`', () => {
//     expect(wrapper.find('select')).to.match('.styled-select');
//   });

//   it('should contain the text `from` in the h2 tag', () => {
//     expect(wrapper.find('h2')).to.contain.text('from');
//   });

//   it('should have the value `sortby` as the default value of the select tag', () => {
//     expect(wrapper.find('select')).to.have.value('sortby');
//   });

//   it('should have option tags with attributes of `value`', () => {
//     expect(wrapper.find('option')).to.have.attr('value');
//   });

//   it('should have a state with key `defaultSort` and value `sortby`', () => {
//     expect(wrapper).to.have.state('defaultSort', 'sortby');
//   });
// });


// describe('The Article component, child of MainScreen,', () => {
//   it('should receives props named `article` from MainScreen', () => {
//     expect(wrapper.find(Article).first()).to.have.prop('article');
//   });
// });

// describe('The component', () => {
//   const children = wrapper.children();
//   it('should have three direct children of the top most div', () => {
//     expect(children).to.have.length(2);
//   });

//   it('should have a first child with an class of `main-headers`', () => {
//     expect(children.at(0)).to.have.className('main-headers');
//   });

//   it('should have a first child that contains a select element with a class name of `styled-select`', () => {
//     expect(children.at(0).find('select')).to.have.className('styled-select');
//   });

//   it('should have a second child with an class name of `row`', () => {
//     expect(children.at(1)).to.have.className('row');
//   });
// });