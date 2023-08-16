import AzIcon from "../Icons/azIcon";
import { useDispatch, useSelector } from "react-redux";
import StatusItem from "../StatusItem/StatusItem";
import { setFilters, setSortOrder } from "../../state/slices/slice";

const StatusItemsContainer = () => {
  const { value: roads, status, error } = useSelector((state) => state.roads);

  const dispatch = useDispatch();
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <button
              onClick={() => {
                dispatch(setFilters("orderBy"), dispatch(setSortOrder()));
              }}
              className="flex items-center gap-x-3 focus:outline-none"
            >
              <span>Status Code</span>
              <AzIcon />
            </button>
          </th>

          <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Status Priority
          </th>

          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Status Description
          </th>
          <th scope="col" className="relative py-3.5 px-4">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <>
          {status === "loading" && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
          {status === "fail" && (
            <tr>
              <td colSpan="4">{error}</td>
            </tr>
          )}
          {status === "success" && roads.map((singleStatus) => <StatusItem key={singleStatus.id + singleStatus.id} singleStatus={singleStatus} />)}
        </>
      </tbody>
    </table>
  );
};

export default StatusItemsContainer;
