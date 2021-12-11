import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../Context";

function InputCity() {
  const { showInput, searchCity, setSearchCity } = useGlobalContext();
  const inputValue = useRef(searchCity);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.current.value !== 0) {
      setSearchCity(inputValue.current.value);
      inputValue.current.value = "";
    } else return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`animate__animated animate__${
        showInput ? "slideInDown" : "slideOutUp"
      } flex flex-col mx-auto justify-center items-center`}
    >
      <div className="flex w-9/12 bg-black py-1.5 mt-2 border border-gray-300 rounded-10px justify-between items-center">
        <FaSearch className="mr-3 ml-3" />
        <input
          className="w-8/12 bg-transparent text-white text-sm outline-none"
          placeholder="Enter the city"
          autoFocus
          ref={inputValue}
        />
        <IoClose
          onClick={() => (inputValue.current.value = "")}
          className="ml-3 mr-3 text-lg cursor-pointer"
        />
      </div>
    </form>
  );
}

export default InputCity;
