import React, { useEffect, useState } from "react";
import { auth } from '../../firebase';
import Navbar from "../../component/Navbar";
import './GarbMonitor.css';


export default function GarbMonitor() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            } else {
                setUserName("");
            }
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="greeting section">
                <p className="heading-font">Hello {userName}! Ready to scan and discover your waste sustainability? Let's start !</p>
            </div>

            <div className="videoframe section">

            </div>
        </div>
    );
}
