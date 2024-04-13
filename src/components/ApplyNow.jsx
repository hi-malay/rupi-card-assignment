import React, { useState } from "react";
import { getIcon, isButtonDisabled } from "../commonRequirements/utils";
import Loading from "../assets/loading.svg";

const BUTTON_STATE = {
  LOADING: "loading",
  APPLIED: "applied",
  INITIAL: "initial",
};

function ApplyNow({ isColumn }) {
  const [number, setNumber] = useState("");
  const [buttonState, setButtonState] = useState(BUTTON_STATE.INITIAL);
  const [isApplyNow, setIsApplyNow] = useState(false);
  const [isCheked, setIsChecked] = useState(true);

  const onNumberChange = (e) => {
    const val = e.target.value;
    if (val.length > 10) {
      return;
    }
    setNumber(val);
  };

  const onButtonClick = () => {
    if (!number.length || buttonState === BUTTON_STATE.LOADING) {
      return;
    }
    setButtonState(BUTTON_STATE.LOADING);
    setTimeout(() => {
      setButtonState(BUTTON_STATE.APPLIED);
    }, 3000);
  };

  const onPhoneApplyNowClick = () => {
    if (isApplyNow) {
      onButtonClick();
      return;
    }
    setIsApplyNow(true);
  };

  const isDisabled = isButtonDisabled(number) || !isCheked;

  return (
    <>
      <div
        className={`hidden md:flex ${
          isColumn ? "flex-col" : "w-full flex-row justify-between items-center"
        }`}
      >
        <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
          <div className="flex items-center">
            <input
              className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
              placeholder="Enter Phone Number"
              value={number}
              onChange={onNumberChange}
            />
            <span className="w-6 flex items-center justify-end h-full">
              {getIcon(number)}
            </span>
          </div>
          <button
            type="submit"
            className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={isDisabled}
            onClick={onButtonClick}
          >
            <span>
              {buttonState === BUTTON_STATE.LOADING ? (
                <span className="flex items-center">
                  <img src={Loading} alt="Cross" /> Applying ....
                </span>
              ) : (
                "Apply Now"
              )}
            </span>
          </button>
        </div>

        <div className="consent flex items-center py-4 px-2 max-w-xs">
          <input type="checkbox" checked={isCheked} id="consent-msg" />
          <label
            htmlFor="consent-msg"
            className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
            onClick={() => setIsChecked((prevState) => !prevState)}
          >
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </label>
        </div>
      </div>

      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            {isApplyNow && (
              <div className="phone-input-container">
                <div className="flex items-center">
                  <input
                    id="phone"
                    className="phone-input w-full text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl py-3"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                    value={number}
                    onChange={onNumberChange}
                  />
                  <span className="w-6">{getIcon(number)}</span>
                </div>
              </div>
            )}
            <button
              className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
              disabled={isDisabled}
              onClick={onPhoneApplyNowClick}
            >
              <span>
                {buttonState === BUTTON_STATE.LOADING ? (
                  <span className="flex items-center">
                    <Loading /> Applying ....
                  </span>
                ) : (
                  "Apply Now"
                )}
              </span>
              <img
                src="/images/right_arrow.svg"
                alt="right_arrow"
                width="21px"
                className="inline ml-3 css-0"
              />
            </button>
            {isApplyNow &&
              (buttonState === BUTTON_STATE.APPLIED ? (
                <div className="my-2">
                  <p className="text-white md:text-black text-[10px] leading-3">
                    Thank you for your interest in the Uni Card.
                    <br />
                    Download the Uni Cards app now and get your Uni Card in
                    minutes.
                  </p>
                </div>
              ) : (
                <div className="consent flex items-center py-4 px-2 max-w-xs">
                  <input type="checkbox" id="consent-msg" checked={isCheked} />
                  <label
                    htmlFor="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                    onClick={() => setIsChecked((prevState) => !prevState)}
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
