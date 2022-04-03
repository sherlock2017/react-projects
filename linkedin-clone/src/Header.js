import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { BusinessCenter, Home, Message, Notifications, People, SupervisorAccount } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          {/* search icon + input */}
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption Icon={Home} title="Home"/>
          <HeaderOption Icon={SupervisorAccount} title="My Network"/>
          <HeaderOption Icon={BusinessCenter} title="Jobs"/>
          <HeaderOption Icon={Message} title="Message"/>
          <HeaderOption Icon={Notifications} title="Notifications"/>

          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQE1AHiHmVO46A/profile-displayphoto-shrink_100_100/0/1621942211165?e=1654732800&v=beta&t=Ve79MZJTuv3XnVWQ85o8Nb1X32p7TLUwo8tmVqAeJOY" title="Me"/>
      </div>
    </div>
  );
}

export default Header;
