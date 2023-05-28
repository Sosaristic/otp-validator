import React, { useState, useEffect, useRef } from "react";

export default function UserDetails({handleSetStep}) {
    const firstInputRef = useRef(null)
useEffect(()=>{
    firstInputRef.current?.focus()
}, [])

  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetStep(2)
  };
  return (
    <div>
      <form className="flex flex-col gap-4 w-[80%] lg:w-[40%] mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
          ref={firstInputRef}
            type="text"
            id="name"
            name="fullName"
            value={inputValues.fullName}
            onChange={handleOnChange}
            required
            autoComplete="off"
            placeholder="Full name"
            className="outline-none text-[1.2rem] pl-2 rounded-md border h-[3rem] focus:border-purple-800 border-gray-500 caret-purple-800"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="name"
            name="email"
            value={inputValues.email}
            onChange={handleOnChange}
            required
            autoComplete="off"
            placeholder="Email"
            className="outline-none text-[1.2rem] pl-2 rounded-md border h-[3rem] focus:border-purple-800 border-gray-500 caret-purple-800"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white h-[3rem] rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}
