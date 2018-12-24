import React from 'react';
import { Enzyme, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/index';

Enzyme.configure({ adapter: new Adapter() });

test('<App />', () => {
  const App = shallow(<App />)
});
