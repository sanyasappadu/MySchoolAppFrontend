
import React, { useState } from 'react';

const TableComponent = () => {
  const [rows, setRows] = useState([
    { id: 1, name: '', class: '', unitTest: '', telugu: '', hindi: '', english: '', maths: '', science: '', social: '' }
  ]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, name: '', class: '', unitTest: '', telugu: '', hindi: '', english: '', maths: '', science: '', social: '' };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, rowIndex, fieldName) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = e.target.value;
    setRows(updatedRows);
  };

  const handleSubmit = () => {
    const payload = rows.map(row => ({
      id: row.id,
      name: row.name,
      class: row.class,
      unitTest: row.unitTest,
      telugu: row.telugu,
      hindi: row.hindi,
      english: row.english,
      maths: row.maths,
      science: row.science,
      social: row.social
    }));

    console.log('Payload:', payload);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Name</th>
            <th>Class</th>
            <th>Unit Test</th>
            <th>Telugu</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td><input type="text" value={row.name} onChange={(e) => handleInputChange(e, index, 'name')} /></td>
              <td><input type="text" value={row.class} onChange={(e) => handleInputChange(e, index, 'class')} /></td>
              <td><input type="text" value={row.unitTest} onChange={(e) => handleInputChange(e, index, 'unitTest')} /></td>
              <td><input type="text" value={row.telugu} onChange={(e) => handleInputChange(e, index, 'telugu')} /></td>
              <td><input type="text" value={row.hindi} onChange={(e) => handleInputChange(e, index, 'hindi')} /></td>
              <td><input type="text" value={row.english} onChange={(e) => handleInputChange(e, index, 'english')} /></td>
              <td><input type="text" value={row.maths} onChange={(e) => handleInputChange(e, index, 'maths')} /></td>
              <td><input type="text" value={row.science} onChange={(e) => handleInputChange(e, index, 'science')} /></td>
              <td><input type="text" value={row.social} onChange={(e) => handleInputChange(e, index, 'social')} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TableComponent;
