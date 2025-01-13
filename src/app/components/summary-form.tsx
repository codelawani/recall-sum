"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { montserrat } from "../fonts";

export default function SummaryForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Input value: ${inputValue}`);
  };

  return (
    <div >
      <form className={`flex items-center ${montserrat.className}`}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a YouTube Link"
          className={(
          "flex w-full h-12 rounded-md border border-[#0066FF]/20 bg-[#020817]/80 px-6 text-lg text-white placeholder:text-white/90" +
          "focus:outline-none focus:ring-0 focus:border-[#0066FF]/40"+
          "transition-all duration-200"+
          "shadow-[0_0_20px_rgba(0,102,255,0.1)]"
        )}
        />
        <Button
          type="submit"
          onClick={handleButtonClick}
          className="bg-blue-500 h-12 w-28 text-white rounded-md p-2 ml-2"
        >
          Submit
        </Button>

      </form>
    </div>
  );
}
