import React, { useState } from "react";

const LoginWithProps = ({ setUser }) => {
    const [username, setUsername] = useState("");

    const handleLogin = () => setUser(username);

    return (
        <div>
            <h2>Login (Props)</h2>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginWithProps;
