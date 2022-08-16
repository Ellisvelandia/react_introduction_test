import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content', () => {
  const app = {
    conten: 'the sum is success',
    important:true
  }


  const component = render.(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
