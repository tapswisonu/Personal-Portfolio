import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="sytapswi@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91-7041029596" Image={FiPhone} />
      <SingleInfo text="Sector 58, Noida" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
