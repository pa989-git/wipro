import React, { useEffect, useState } from "react";
import { batchRequest } from "./apiService";

const BatchApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const requests = [
          { method: "GET", url: "/users" },
          { method: "GET", url: "/posts" },
          { method: "GET", url: "/comments" },
        ];

        const result = await batchRequest(requests);
        setData(result);
      } catch (error) {
        console.error("Error fetching batch data", error);
      }
    };

    fetchBatchData();
  }, []);

  return (
    <div>
      <h2>Batch API Response</h2>
      {data ? (
        <div>
          <p><strong>Total Requests:</strong> {data.total_requests}</p>
          {data.responses.map((res, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
              <h3>📌 {res.url}</h3>
              <p><strong>Status:</strong> {res.status} - {res.message}</p>
              <pre style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
                {JSON.stringify(res.data, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BatchApiComponent;
