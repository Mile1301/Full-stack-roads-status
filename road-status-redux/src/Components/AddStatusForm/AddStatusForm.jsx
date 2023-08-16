import { useState } from "react";
import DropdownIcon from "../Icons/DropdownIcon";
import { addRoadStatus, setAddFormStatus } from "../../state/slices/slice";
import { useDispatch, useSelector } from "react-redux";

const AddStatusForm = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.roads);
  console.log(accessToken);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      code: Number(code),
      title: title,
      priority: priority,
    };
    console.log(newData);
    // Dispatch the addRoadStatus action with the newData object
    dispatch(addRoadStatus({ roadsData: newData, accessToken }));
    dispatch(setAddFormStatus(false));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto relative">
          <div className="absolute top-2 -right-2 h-16 w-16 ">
            <div className="mx-auto">
              <button
                type="button"
                onClick={() => dispatch(setAddFormStatus(false))}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD ROAD STATUS</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="code" className="text-lx">
                Status Code:
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                id="code"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="title" className="block mb-2 text-lg">
                Status Description:
              </label>
              <textarea
                required
                id="title"
                cols="30"
                rows="10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div>
              <label htmlFor="priority" className="text-lx">
                Status Priority:
              </label>
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
            <button className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600">ADD ROAD STATUS</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddStatusForm;
