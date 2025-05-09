import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";
import { FaCalendarDays } from "react-icons/fa6";
import { HiHandRaised } from "react-icons/hi2";



const ExperienceTop = () => {
  return (
    <div className="relative isolate overflow-hidden  bg-gray-900 py-16 sm:py-24 lg:p-20 rounded-4xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Front-End Developer
            </h2>
            <p className="mt-4 text-lg text-gray-300">Pioneer the Future Pvt. Ltd. Noida</p>
           
          </div>
          <dl className=" sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <FaCalendarDays
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                2023 - 2025
              </dt>
              <ul className="mt-2 text-base/7 text-gray-400">
                Responsibilities:
                <li>Implementing reusable components.</li>
                <li>Participating in large scale application. </li>
                <li> Working on the performance of web applications.</li>
                <li> Generating new ideas for better user experience.</li>
              </ul>
            </div>
          </dl>
        </div>
      </div>
      
    </div>
  );
};

export default ExperienceTop;
