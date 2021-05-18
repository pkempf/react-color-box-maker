import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="NewBoxForm">
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Create a new box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
