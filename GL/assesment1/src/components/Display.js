import React, { useState } from "react";
const Display = ({ name, address }) => {
    const [userName, setUserName] = useState(name);
    const [userAddress, setUserAddress] = useState(address);

    return (
        <div>
            <h3>Modify Details</h3>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
            <p>Updated Name: {userName}</p>
            <p>Updated Address: {userAddress}</p>
        </div>
    );
};
export default Display;
