import { FaTasks, FaUserFriends, FaCalendarCheck, FaClipboardList } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="container py-12">
      {/* header section */}
      <div className="text-center ">
        <h1 className="text-4xl font-semibold">Our Services</h1>
      </div>
      {/* icons section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
        <div className="flex justify-center items-center gap-3">
          <FaTasks className="text-2xl text-blue-500" />
          <p className="text-xl font-semibold">Task Management</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaCalendarCheck className="text-2xl text-green-500" />
          <p className="text-xl font-semibold">Track Deadlines</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaClipboardList className="text-2xl text-yellow-500" />
          <p className="text-xl font-semibold">Organize Tasks</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaUserFriends className="text-3xl text-purple-500" />
          <p className="text-xl font-semibold">Collaborate</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
