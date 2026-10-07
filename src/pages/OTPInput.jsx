import React, { useState, useRef, useEffect } from "react";

const OTP_DIGITS = 6;

function OTPInput() {
  const [otpArr, setOtpArr] = useState(new Array(OTP_DIGITS).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleInputChange = (value, index) => {
    const newValue = value.trim().slice(-1);
    if (isNaN(newValue)) return;
    const newOtpArr = [...otpArr];
    newOtpArr[index] = newValue;
    setOtpArr(newOtpArr);
    if (newValue && index < OTP_DIGITS - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  // const handleKeyDown = (e, index) => {
  //   if (e.key === "ArrowRight" && index < OTP_DIGITS - 1) {
  //     inputRef.current[index + 1]?.focus();
  //   }

  //   if (e.key === "ArrowLeft" && index > 0) {
  //     const prevInput = inputRef.current[index - 1];

  //     prevInput?.focus();
  //     prevInput?.setSelectionRange(1, 1);
  //   }

  //   if (!e.target.value && e.key === "Backspace") {
  //     inputRef.current[index - 1]?.focus();
  //   }
  // };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" && index < OTP_DIGITS - 1) {
      e.preventDefault();
      const nextInput = inputRef.current[index + 1];

      nextInput?.focus();
      nextInput?.setSelectionRange(1, 1);
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      const prevInput = inputRef.current[index - 1];

      prevInput?.focus();
      prevInput?.setSelectionRange(1, 1);
    }

    if (!e.target.value && e.key === "Backspace" && index > 0) {
      e.preventDefault();
      const prevInput = inputRef.current[index - 1];

      prevInput?.focus();
      prevInput?.setSelectionRange(1, 1);
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="text-center w-full flex ">OTP Input</h1>
      <div className="otp-container">
        {otpArr.map((otp, index) => {
          return (
            <input
              type="text"
              key={index}
              value={otp}
              ref={(el) => {
                inputRef.current[index] = el;
              }}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input"
            />
          );
        })}
      </div>
    </div>
  );
}

export default OTPInput;
