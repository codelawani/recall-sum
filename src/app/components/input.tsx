"use client"
import React, { useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Input value: ${inputValue}`);
  };

  return (
    <div className="flex items-center">
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your recall summary"
          className="border border-gray-300 rounded-md p-2 text-black"
        />
        <button
          type="submit"
          onClick={handleButtonClick}
          className="bg-blue-500 text-white rounded-md p-2 ml-2"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
