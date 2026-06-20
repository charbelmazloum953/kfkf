import React, { useState } from "react";

const BeginnerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("Option 1");

  const handleSubmit = () => {
    alert(`
Name: ${name}
Checked: ${checked}
Message: ${message}
Selected: ${option}
    `);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Simple React Form</h2>

      {/* Input */}
      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your knaffme"
        />
      </div>

      {/* Checkbox */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Accept Terms
        </label>
      </div>

      {/* Text Area */}
      <div style={{ marginBottom: "10px" }}>
        <label>Message:</label>
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write something..."
          rows={4}
        />
      </div>

      {/* Dropdown */}
      <div style={{ marginBottom: "10px" }}>
        <label>Choose an option:</label>
        <br />
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      {/* Button */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BeginnerForm;