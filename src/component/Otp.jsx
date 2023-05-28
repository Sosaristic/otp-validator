import React, { useEffect, useRef, useState } from "react";

function Input({ id, inputRef }) {
  return (
    <input
      type="text"
      id={id}
      className="outline-none border border-gray-800 h-[3rem] w-[3rem] flex-1 text-center rounded-sm disabled:text-white disabled:font-[700] disabled:bg-purple-800 disabled:border-purple-800 focus:border-purple-800"
      ref={inputRef}
      maxLength="1"
    />
  );
}
export default function EnterOtp({handleSetStep}) {
  const [errMessage, setErrMessage] = useState(false)
  const formRef = useRef(null);
  const input1Ref = useRef(null);
  const defaultOtp = "1234";
  const inputValues = [];
  useEffect(() => {
    const form = formRef?.current;
    const children = Array.from(form.children);
    children.forEach((child) => {
      child.value = ""
      child.disabled = true;
    });
    input1Ref.current.disabled = false;
    input1Ref.current?.focus();
  }, []);

  const handleOnKeyUp = (e) => {
    const keyCode = e.keyCode || e.which;

    const form = formRef?.current;
    const children = Array.from(form.children);
    const focusElement = document.activeElement;
    const index = children.findIndex((child) => child === focusElement);
    const currentIndexValue = children[index].value;

    if (children[index].value != "" && index < children.length - 1) {
      inputValues[index] = currentIndexValue;
      children[index + 1].disabled = false;
      children[index + 1].focus();
      children[index].disabled = true;
    }
    if (index == children.length - 1 && currentIndexValue != "") {
      inputValues[index] = currentIndexValue;
      children[index].disabled = true;
      submitOtp();
    }
    if (keyCode === 8 && index <= children.length) {
      // when backspace is clicked
      children[index].value = "";
      children[index].disabled = true;
      children[index - 1].disabled = false;
      children[index - 1].value = "";
      children[index - 1].focus();
    }

    function submitOtp() {
      if (defaultOtp != inputValues.join("")) {
        setErrMessage(true)
        children.forEach((child) => {
          child.value = "";
          child.disabled = true;
        });
        children[0].disabled = false;
        children[0].focus();
      } else {
        setErrMessage(false)
        handleSetStep(3)
      }
    }
  };
  return (
    <>
      <div className="w-[80%] lg:w-[40%] mx-auto mt-[6rem] flex flex-col items-center">
      <button type="button" className="bg-purple-800 text-white p-2 rounded-sm" onClick={()=>handleSetStep(1)}>Go Back</button>

        <p className="text-center">Please Enter the OTP sent to your Email</p>
        <p className="text-center mt-4">Use <span className="font-bold">1234</span> as default</p>

        <form
          ref={formRef}
          onKeyUp={handleOnKeyUp}
          className=" mx-auto relative flex gap-1 mt-4"
        >
          <Input inputRef={input1Ref} />
          <Input />
          <Input />
          <Input />
        </form>
        {errMessage && <p className="text-center mt-2 text-sm text-red-600">OTP is not correct, Try Again</p>}
      </div>
    </>
  );
}
