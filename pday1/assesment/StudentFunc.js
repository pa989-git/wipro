export const StudentFunc = ({ name, address, scores }) => (
    <div>
      <h3>Student (Function Component)</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Scores: {scores.join(', ')}</p>
    </div>
  );