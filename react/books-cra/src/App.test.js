import React from 'react';
import { shallow, mount, render } from './enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('debug', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });

  it('should check number of <h1> elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should check whether the className App exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').exists()).toBe(true);
  });

  it('renders correct text in name prop', () => {
    const name = 'Some app name';
    const wrapper = mount(<App name={name} />);
    console.log(wrapper.debug());
    expect(wrapper.contains(<App name='Some app name'></App>)).toBeTruthy();
  });

  it('renders component correctly', () => {
    const name = 'Some app name';
    const wrapper = render(<App name={name} />);
    expect(wrapper.find('.App')).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
