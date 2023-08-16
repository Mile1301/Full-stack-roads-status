import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../Icons/SearchIcon";
import { setFilters, setSearchQuery } from "../../state/slices/slice";
const SearchInput = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.roads);

  return (
    <div className="relative flex items-center mt-4 md:mt-0">
      <span className="absolute">
        <SearchIcon />
      </span>

      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onClick={() => dispatch(setFilters("title"))}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};
export default SearchInput;
