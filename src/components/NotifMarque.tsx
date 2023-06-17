import Marquee from "react-fast-marquee";
import bell from "../assets/icons/notif/bell.svg";
import bar from "../assets/icons/notif/bar.svg";
import time from "../assets/icons/notif/time.svg";

function NotifMarque() {
  return (
    <>
      <Marquee pauseOnHover speed={20} autoFill>
        <div
          className="flex flex-col gap-5 justify-between w-[190px] min-h-[190px] p-3 text-[#19191A] rounded-xl mx-2
            shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)]
            notif-gradient
          "
        >
          <div className="flex justify-between items-start">
            <img src={bell} className="w-7 h-7" />
            <button className="text-xs font-semibold text-[#19191A]">
              Save
            </button>
          </div>
          <p className="text-sm font-medium text-[#19191A]">
            We’ll be sending notifications to you here
          </p>
          <input
            className="border-[0.7px] border-[#E5E5E6] rounded-md w-full p-2 text-gray-700 
              text-xs
            placeholder:text-[#CACBCC] placeholder:text-xs
              focus:outline-none focus:shadow-outline
            "
            id="username"
            type="email"
            placeholder="Your email address"
          />
        </div>
        <div
          className="flex flex-col gap-5 justify-between w-[190px] min-h-[190px] p-3 text-[#19191A] rounded-xl mx-2
            shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)]
            bg-white
          "
        >
          <div className="flex justify-between items-start">
            <img src={bar} className="w-7 h-7" />
            <input type="checkbox" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#19191A] mb-2">
              Notify me when any wallets move more than
            </p>
            <div className="relative w-3/5">
              <select
                className="block w-full appearance-none bg-gray-200 focus:outline-none
                  border border-gray-200
                  text-xs text-gray-700 py-1 px-2
                  rounded leading-tight  focus:border-gray-500
                "
                id="grid-state"
              >
                <option>$1,000.00</option>
                <option>$5,000.00</option>
                <option>$10,000.00</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 mr-2">
                <svg
                  className="w-4 h-4"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z"
                    fill="#96979A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 justify-between w-[190px] min-h-[190px] p-3 text-[#19191A] rounded-xl mx-2
            shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)]
            bg-white
          "
        >
          <div className="flex justify-between items-start">
            <img src={time} className="w-7 h-7" />
            <input type="checkbox" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#19191A]">
              Notify me when any wallet dormant for
            </p>
            <div className="relative w-3/5 my-2">
              <select
                className="block w-full appearance-none bg-gray-200 focus:outline-none
                  border border-gray-200
                  text-xs text-gray-700 py-1 px-2
                  rounded leading-tight  focus:border-gray-500
                "
                id="grid-state"
              >
                <option> {">"} 30days</option>
                <option> {">"} 60days</option>
                <option> {">"} 90days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 mr-2">
                <svg
                  className="w-4 h-4"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z"
                    fill="#96979A"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs font-medium text-[#19191A]">becomes active</p>
          </div>
        </div>
      </Marquee>
      <div className="absolute inset-0 marquee-shadow z-10 pointer-events-none"></div>
    </>
  );
}

export default NotifMarque;
