import { useDispatch, useSelector } from "react-redux";
import StatusItemsContainer from "../../Components/StatusItemsContainer/StatusItemsContainer";
import SearchInput from "../../Components/SearchInput/SearchInput";
import ButtonContainer from "../../Components/ButtonContainer/ButtonContainer";
import PlusCircleIcon from "../../Components/Icons/PlusCircleIcon";
import AddStatusForm from "../../Components/AddStatusForm/AddStatusForm";
import PaginationButtons from "../../Components/PaginationButtons/PaginationButtons";
import { setAddFormStatus } from "../../state/slices/slice";
import ExpiredSessionPage from "../ExpiredSessionPage/ExpiredSessionPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const { statussesCounter, pageNum, totalPageNumber, addFormStatus, accessToken } = useSelector((state) => state.roads);
  return (
    <section className="container p-4 mx-auto">
      {accessToken !== null ? (
        <>
          {addFormStatus && <AddStatusForm />}
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Road statuses</h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                  {statussesCounter} statuses
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These statuses are from the last 2 months.</p>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
              <button
                onClick={() => dispatch(setAddFormStatus(true))}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                <PlusCircleIcon />
                <span>Add status</span>
              </button>
            </div>
          </div>
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <ButtonContainer />
            <SearchInput />
          </div>
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto">
              {/* <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">{<StatusItemsContainer />}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Page{" "}
              <span className="font-medium text-gray-700 dark:text-gray-100">
                {pageNum} of {totalPageNumber}
              </span>
            </div>

            <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
              <PaginationButtons />
            </div>
          </div>
        </>
      ) : (
        <ExpiredSessionPage />
      )}
    </section>
  );
};

export default HomePage;
