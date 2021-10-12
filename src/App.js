// import Todo from './components/Todos/Todo';
import { Route, Switch } from "react-router";
import AllMeetups from "./components/pages/AllMeetups";
import FavouriteMeetups from "./components/pages/FavouriteMeetups";
import NewMeetups from "./components/pages/NewMeetups";
import Layout from "./components/Layout/Layout";


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favourite">
          <FavouriteMeetups />
        </Route>
        <Route path="/newmeet">
          <NewMeetups />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
