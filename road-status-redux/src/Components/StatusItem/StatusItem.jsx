import EditIcon from "../Icons/EditIcon";
import { Link } from "react-router-dom";

const StatusItem = ({ singleStatus }) => {
  let statusPriorityClasses = "inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 dark:bg-gray-800";
  if (singleStatus.priority === "medium") {
    statusPriorityClasses += "text-gray-500 bg-gray-100";
  } else if (singleStatus.priority === "high") {
    statusPriorityClasses += "text-red-500 bg-red-100";
  } else if (singleStatus.priority === "low") {
    statusPriorityClasses += "text-emerald-500 bg-emerald-100/60";
  } else statusPriorityClasses = "inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 dark:bg-gray-800";

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white ">{singleStatus.code}</h2>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
          <div className={statusPriorityClasses}>{singleStatus.priority}</div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div>
            <p className="text-gray-500 dark:text-gray-400">{singleStatus.title}</p>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <Link to={`${singleStatus.id}`}>
            <div className="px-1 py-1 w-8 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
              <EditIcon />
            </div>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default StatusItem;
