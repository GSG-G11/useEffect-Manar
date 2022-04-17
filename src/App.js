import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Counter from './Companents/Counter'
import Ex2 from './Companents/Ex2'
import Giphyapi from './Companents/Giphyapi'
import Roboapi from './Companents/Robohashapi'
import UserProfile from './Companents/UserProfile'
import Navbar from './Companents/Navbar'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <>
      <Navbar />
        <Switch>
          <Route path="/ex2" component={Ex2} />
          <Route path="/ex3" component={Giphyapi} />
          <Route path="/ex4" component={Roboapi} />
          <Route path="/ex5" component={UserProfile} />
          <Route path="/" component={Counter} />
        </Switch>
      </>
      </BrowserRouter>

    </div>
  );
}

export default App;
