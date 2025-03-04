import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginWithProps from "./components/LoginWithProps";
import WelcomeWithProps from "./components/WelcomeWithProps";
import { UserProvider } from "./context/UserContext";

const App = () => {
    const [user, setUser] = useState("");

    return (
        <UserProvider>
            <Router>
                <nav>
                    <Link to="/">Props Login</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<><LoginWithProps setUser={setUser} /><WelcomeWithProps user={user} /></>} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
