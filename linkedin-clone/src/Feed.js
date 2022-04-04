import { CalendarViewDay, Create, EdgesensorLowTwoTone, EventNote, Image, Subscriptions } from '@mui/icons-material';
import "./Feed.css";
import React, { useEffect, useState } from 'react'
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, []);

  const sendPost = (e) => { 
    e.preventDefault();
    db.collection("posts").add({
      name: 'Rishabh Jain',
      description: ':: '+new Date(),
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value) }/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* input options */}
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E" />
        </div>
      </div>

      {/* All post will be lsited here */}
      {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed