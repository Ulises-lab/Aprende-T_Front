import React, { useState } from "react";
import * as PATHS from "../utils/paths";
import { useNavigate } from "react-router-dom";

export default function UserProfile({user}) {
    console.log(user)

    return (
        <div>
            <div>
                <img src={user.profile_pic} alt="image-profile" />
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