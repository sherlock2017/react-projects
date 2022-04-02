import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header - Build <Header> component*/}
        <Header />
        {/* Router is the incharge of what url shows what component */}
        <Switch>
          {/* In V6 the Switch is replaced by Routes */}
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/* Sidebar - Build <Sidebar> component*/}
              <Sidebar />
              {/* Search Page - Build <SearchPage> component*/}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar - Build <Sidebar> component*/}
              <Sidebar />
              {/* Recommendations - Build <Recommendations> component*/}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
