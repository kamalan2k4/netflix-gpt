
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStroe from './utils/appStore';

function App() {
  return (
  
     <Provider store={appStroe}>
     <Body />
     </Provider>
    
  );
}

export default App;
