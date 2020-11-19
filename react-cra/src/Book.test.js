import React from 'react';
import { shallow, mount, render } from './enzyme';
import renderer from 'react-test-renderer';

import Book from './Book';

describe('<Book />', () => {
  it('debug', () => {
    const books = [];
    const wrapper = shallow(<Book data={books} />);
    console.log(wrapper.debug());
  });

  it('should check whether the className book exists', () => {
    const books = [];
    const wrapper = shallow(<Book data={books} />);
    expect(wrapper.find('.booklist').exists()).toBe(true);
  });

  it('renders correct text in books prop', () => {
    const books = ['book1', 'book2', 'book3'];
    const wrapper = mount(<Book data={books} />);
    console.log(wrapper.debug());
  });

  it('renders correctly', () => {
    const books = ['book1', 'book2', 'book3'];
    const tree = renderer.create(<Book data={books} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
