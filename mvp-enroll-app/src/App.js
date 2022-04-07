import "./App.css";
import CourseCreation from "./CourseCreation";
import CourseRegistration from "./CourseRegistration";
import CourseView from "./CourseView";
import EnrollmentsView from "./EnrollmentsView";


function App() {
  return (
    <div className="App">
      <CourseCreation />
      <CourseView />
      <CourseRegistration />
      <EnrollmentsView />
    </div>
  );
}

export default App;
