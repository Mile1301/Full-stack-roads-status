import { useDispatch } from "react-redux";
import { setPriorityStatus, setSearchQuery, setPageNum } from "../../state/slices/slice";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const handleViewAll = (btnValue) => {
    dispatch(setPriorityStatus(btnValue));
    dispatch(setSearchQuery(""));
    dispatch(setPageNum(1));
  };
  return (
    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
      <button
        value=""
        onClick={(e) => handleViewAll(e.target.value)}
        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 focus:bg-gray-100 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
      >
        View all
      </button>

      <button
        onClick={() => dispatch(setPriorityStatus("low"))}
        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 focus:bg-gray-100 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
      >
        Low priority
      </button>

      <button
        onClick={() => dispatch(setPriorityStatus("medium"))}
        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 focus:bg-gray-100 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
      >
        Medium priority
      </button>

      <button
        onClick={() => dispatch(setPriorityStatus("high"))}
        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 focus:bg-gray-100 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
      >
        High priority
      </button>
    </div>
  );
};
export default ButtonContainer;
