import React from "react";
import Profile from "./Profile";
import Header from "../component/Header";
import SliderDown from "../Slide/SliderDown";



function ProfileParent () {

    return  (
        <div>

            <Header/>
            <SliderDown/>
            <Profile/>
        </div>
    )
};

export default ProfileParent;
