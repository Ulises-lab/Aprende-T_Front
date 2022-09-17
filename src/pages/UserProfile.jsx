import React, { useState } from "react";
import * as PATHS from "../utils/paths";
import { useNavigate } from "react-router-dom";

export default function UserProfile({user}) {
    console.log(user,'el usuario')

    return (
        <div>
            <div>
                {user.profile_pic === "" ? (
                    <img className="image-profile" src="https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg" alt="image-profile" />
                ): <img className="image-profile" src={user.profile_pic} alt="image-profile" />}
                
            </div>
            <div>
                <p>Usuario: {user.firstname} {user.lastname}</p>
                <p>Correo: {user.email}</p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}