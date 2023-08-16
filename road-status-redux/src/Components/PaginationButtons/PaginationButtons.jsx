import { useDispatch, useSelector } from "react-redux";
import LArrowIcon from "../../Components/Icons/LArrowIcon";
import RArrowIcon from "../../Components/Icons/RArrowIcon";
import { setPageNum } from "../../state/slices/slice";
const PaginationButtons = () => {
  const { pageNum } = useSelector((state) => state.roads);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          setTimeout(() => {
            dispatch(setPageNum(pageNum - 1));
          }, 1000)
        }
        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <LArrowIcon />
        <span>Previous</span>
      </button>

      <button
        onClick={() =>
          setTimeout(() => {
            dispatch(setPageNum(pageNum + 1));
          }, 1000)
        }
        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <span>Next</span>
        <RArrowIcon />
      </button>
    </>
  );
};
export default PaginationButtons;
