import React, {Component, useState} from "react";
export default function Home() {
    const [connectedUser, setConnectedUser] = useState("sousou");
        return (
            <>
                <h1>{connectedUser}</h1>
            </>
        )

}
