import React from "react";
import { NavLink } from "react-router-dom";

function ItermSidebar ({to, title, icon, active, onClick}) {
    return  (
        <NavLink to={to} className={({ isActive }) => (isActive ? 'active-sidebar-profile iterm' : 'inactive iterm')} >
            <span className="icon-sidebar">{icon}</span>
            <span className="active-icon">{active}</span>
            <span className="title-sidebar">{title}</span>
        </NavLink>
    )
}

export default ItermSidebar;