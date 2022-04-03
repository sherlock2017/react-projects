import { CalendarViewDay, Create, EdgesensorLowTwoTone, EventNote, Image, Subscriptions } from '@mui/icons-material';
import "./Feed.css";
import React from 'react'
import InputOption from './InputOption';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
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
    </div>
  );
}

export default Feed