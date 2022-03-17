import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      {/* <h1>Youtube clone 🚀</h1> */}

      {/* Header - Build <Header> component*/}
      <Header />

      <div className="app__page">
        {/* Sidebar - Build <Sidebar> component*/}
        <Sidebar />

        {/* Recommendations - Build <Recommendations> component*/}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
