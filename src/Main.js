import React from 'react';
import ProfilPhoto from "./Profile/ProfilPhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Address";
export default function Main() {
    return (
        <div>
         <ProfilPhoto/> 
         <FullName/>
          <Address/>
        </div>
    )
}
