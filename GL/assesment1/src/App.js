import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import First1 from "./components/First1";
import Second1 from "./components/Second1";
import Third1 from "./components/Third1";
import Fourth1 from "./components/Fourth1";
import Student from "./components/Student";
import StudentClass from "./components/StudentClass";
import Display from "./components/Display";

const App = () => {
    const studentInfo = { name: "John Doe", address: "123 Main St", scores: [85, 90, 78] };

    const handleHello = () => alert("Hello!");
    const handleBye = () => alert("Bye!");

    return (
        <div>
            <h1>Hello World</h1>
            <First /><Second /><Third /><Fourth />
            <First1 /><Second1 /><Third1 /><Fourth1 />
            <Student name={studentInfo.name} address={studentInfo.address} scores={studentInfo.scores} />
            <StudentClass name={studentInfo.name} address={studentInfo.address} scores={studentInfo.scores} />
            <Display name={studentInfo.name} address={studentInfo.address} />
            <button onClick={handleHello}>Say Hello</button>
            <button onClick={handleBye}>Say Bye</button>
        </div>
    );
};
export default App;
