import './App.css';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Course from './Course';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [input, setInput] = useState('');
  const [courses, setCourses] = useState([]);

  // when the app loads, we need to listen to the database and fetch new Courses as they get added/removed
  useEffect(() => {
    // useEffect runs once when the app loads
    db.collection('Courses').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data().name));
      setCourses(snapshot.docs.map(doc => ({id: doc.id, name: doc.data().name})));
    });

    // if the below array is empty, it will run once the app loads
    // if it has some variable, it will run once the app loads or variable changes
  }, [input]);

  const addCourse = (event) => {
    event.preventDefault(); // will stop the refresh
    db.collection('Courses').add({
      name: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>React App + Firebase 🚀</h1>
      <h2>Add new courses for Mangal Vidhya Peet</h2>

      <form>
        <FormControl>
          <InputLabel>✅ Type course name</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addCourse}>
            Add Course
        </Button>
      </form>

      <ul>
        {courses.map(course => (
          <Course details={course} />
        ))}
      </ul>
    </div>
  );
}

export default App;
