import React from "react";
import "./NavBar.css";
import AccountMenu from "../AccountMenu/AccountMenu";
import UserStoryAdd from "../UserStoryAddPopup/UserStoryAdd";


// material ui
import { Badge, Button, IconButton, Typography } from "@mui/material";
import { IoIosNotifications } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import AddStory from "../../../Pages/AddStory/AddStory";
import { Navigate } from "react-router-dom";

// get profile user
const user = JSON.parse(localStorage.getItem("Profile"));
console.log("user", user?.name);

function NavBar() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // setOpen(true);
    window.location.href = "/add-story";
  };
  return (
    <>
    <div className="navbar">
      <div className="navbar__left">
        <Typography sx={{color:"white", fontFamily:'Poppins, sans-serif !important', fontSize:'13px', fontWeight:300}}>Good Morning 🌄, {user?.name}</Typography>
      </div>
      <div className="navbar__right">
      {/* <Button className="navBtn" variant="contained" onClick={handleClick}>+ Add</Button> */}
      {/* <Button className="navBtn" variant="contained" onClick={handleClick}>+ Add</Button> */}
      <IconButton onClick={handleClick} sx={{color:'white'}}>
        <MdFormatListBulletedAdd size={26} />
      </IconButton>
      <UserStoryAdd open={open} setOpen={setOpen} />
      <Badge variant="dot" color="warning">
          <IoIosNotifications size={26} style={{ color: "white", cursor:'pointer' }} />
        </Badge>
        <AccountMenu />
        {/* <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnoR5PHuEu2C3bcMN7kOLHrStpF1-pY6nmA&usqp=CAU"   sx={{ width: 34, height: 34 }}/> */}
      </div>
    </div>
    </>
  );
}

export default NavBar;
