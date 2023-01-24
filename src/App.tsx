
import BookContainer from "./containers/BookContainer";
import WishlistContainer from "./containers/WishlistContainer";
import { Provider } from 'react-redux';
import { store } from "./app/store"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"


function App() {

  return (
    <Router>
      <Provider store = {store}>
      <div className="App">
        <section className ="search">
        <Routes>
          <Route path = '/' element = {<BookContainer />} />
        </Routes>  
        </section>
          <section className = "wishlist">    
          <Route path = '/wishlist' element = {<WishlistContainer />} />   
            
          </section>    
      </div>
      </Provider>
     </Router>
  );
}

export default App;
