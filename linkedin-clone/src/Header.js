import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Home,
  Message,
  Notifications,
  People,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Message} title="Message" />
        <HeaderOption Icon={Notifications} title="Notifications" />

        <HeaderOption
          onClick={logoutOfApp}
          title="Me"
          avatar={true}
        />
      </div>
    </div>
  );
}

export default Header;
