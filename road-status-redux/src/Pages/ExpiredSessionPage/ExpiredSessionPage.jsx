import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LArrowIcon from "../../Components/Icons/LArrowIcon";

const ExpiredSessionPage = () => {
  const { resultStatus } = useSelector((state) => state.roads);
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">{resultStatus?.message.slice(-3)}</p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">{resultStatus?.message.slice(0, 14)}</p>
        <Link
          to="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
          title="Return Home"
        >
          <LArrowIcon />
          <span>Return to Login page</span>
        </Link>
      </div>
    </div>
  );
};
export default ExpiredSessionPage;
