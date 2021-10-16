import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import CakeContainer from './component/CakeContainer'
import HooksCakeContainer from './component/HooksCakeContainer'
import IceCreamContainer from './component/IceCreamContainer'
import NewCakeContainer from './component/NewCakeContainer'
import ItemContainer from './component/ItemContainer'
import UserContainer from './component/UserContainer'

import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <UserContainer />
        <CakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
