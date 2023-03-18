import React from 'react'
import "./Drawer.css"

// mui icons
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';

function DrawerBrower() {
  return (
    <div className="SideDrawer">
        
        <div className="SideDrawer__body">
            <div className="SideDrawer__body__list">
                <div className="SideDrawer__body__item">
                <div className="nav_list">
                    <AssignmentTurnedInOutlinedIcon style={{ color: "white", fontSize: 20 }} />
                    <a href="index.jsx">Tasks</a>
                </div>
                <div className="nav_list">
                    <MapsUgcRoundedIcon size={18} style={{ color: "white", fontSize: 20 }} />
                    <a href="index.jsx">Messages</a>
                </div>
                <div className="nav_list">
                    <AssignmentTurnedInOutlinedIcon size={14} style={{ color: "white", fontSize: 20 }} />
                    <a href="index.jsx">Tasks</a>
                </div>
                <div className="nav_list">
                    <MapsUgcRoundedIcon size={14} style={{ color: "white", fontSize: 20 }} />
                    <a href="index.jsx">Messages</a>
                </div>
                <div className="nav_list">
                    <AssignmentTurnedInOutlinedIcon size={14} style={{ color: "white", fontSize: 20 }} />
                    <a href="index.jsx">Tasks</a>
                </div>

                </div>
            </div>
        </div>
    </div>

    
  )
}

export default DrawerBrower