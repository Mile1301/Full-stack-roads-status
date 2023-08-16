import { useDispatch, useSelector } from "react-redux";
import DropdownIcon from "../Icons/DropdownIcon";
import { removeRoadStatus, updateRoadStatus } from "../../state/slices/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateForm = ({ foundStatus }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.roads);
  const [code, setCode] = useState(foundStatus?.code);
  const [title, setTitle] = useState(foundStatus?.title);
  const [priority, setPriority] = useState(foundStatus?.priority);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = {
      code: Number(code),
      title: title,
      priority: priority,
    };
    console.log("updated data is", updateData);
    console.log("the id is", foundStatus.id);
    const roadId = foundStatus.id;
    // Dispatch the updateRoadStatus action with the updatedData object
    dispatch(updateRoadStatus({ roadId, updateData, accessToken }));
    navigate("/home");
  };

  const deleteStatus = (e) => {
    e.preventDefault();
    const roadId = foundStatus.id;
    dispatch(removeRoadStatus({ roadId, accessToken }));
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:bg-indigo-50 min-h-screen md:px-20 p-6">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/home")}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">UPDATE OR DELETE STATUS</h1>
          <div className="space-y-4">
            <div>
              <h3 htmlFor="code" className="text-lx">
                Status Code:
              </h3>
              <input
                type="text"
                onChange={(e) => setCode(e.target.value)}
                value={code}
                id="code"
                className="outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <h3 htmlFor="title" className="block mb-2 text-lg">
                Status Description:
              </h3>
              <textarea
                id="title"
                cols="30"
                rows="10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div>
              <h3 htmlFor="priority" className="text-lx">
                Status Priority:&nbsp;
              </h3>
              <div className="relative inline-flex">
                <DropdownIcon />
                <select
                  className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option>Choose a priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button className="px-6 py-2 mx-auto rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600">UPDATE POST</button>
              <button onClick={deleteStatus} className="px-6 py-2 mx-auto rounded-md text-lg font-semibold text-indigo-100 bg-red-600">
                DELETE POST
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UpdateForm;
