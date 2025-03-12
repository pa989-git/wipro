import { useEffect, useState } from "react";

function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // ✅ Fetch Records from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/batch")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching records:", error));
  }, []);

  // ✅ Add Record
  const addRecord = () => {
    if (!name || !age) {
      alert("Please enter both Name and Age");
      return;
    }

    fetch("http://localhost:5000/api/batch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age }),
    })
      .then((response) => response.json())
      .then((newRecord) => {
        setRecords([...records, newRecord]);
        setName("");
        setAge("");
      })
      .catch((error) => console.error("Error adding record:", error));
  };

  // ✅ Delete Record
  const deleteRecord = (id) => {
    fetch(`http://localhost:5000/api/batch/${id}`, { method: "DELETE" })
      .then(() => {
        setRecords(records.filter(record => record.id !== id));
      })
      .catch((error) => console.error("Error deleting record:", error));
  };

  return (
    <div>
      <h1>React Batch API Example</h1>
      
      {/* Add Record Form */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addRecord}>Add Record</button>
      </div>

      <h2>Batch API Response:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              {record.name} - Age: {record.age} 
              <button onClick={() => deleteRecord(record.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
