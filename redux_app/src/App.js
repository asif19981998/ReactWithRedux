import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  
  
  return (
    <Provider store={store}>
       <div className="App">
         <ItemContainer cake/>
         <ItemContainer/>
         <HookCakeContainer />
         <CakeContainer />
         <IceCreamContainer/>
         <NewCakeContainer/>
         <UserContainer/>
      </div>
    </Provider>
  
 );
}

export default App;
