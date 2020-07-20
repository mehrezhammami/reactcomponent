import React from 'react';
import Name from "./profile/fullname";
import Adr from "./profile/adress";
import Photo from "./profile/profilephoto";
import "./profile/fullname";
import "./profile/adress";
import "./profile/profilephoto";
const Main = () => {
    return ( 
            <div>
                <Name/>
                <Adr/>
                <Photo/>
            </div> );
}
 
export default Main;