import { render} from '@testing-library/react';
import App from './App';

test('renders content', () => {
  const app = {
    content: 'the sum is success',
    important:true
  }


  const component = render(<App app ={app}/>);

  expect(component.container).tohac
});
