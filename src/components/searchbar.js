import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search flex items-center bg-gray-200 p-1 rounded-xl mb-6 cursor-pointer">
      <MdSearch className="text-3xl" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search....."
        className="flex border-none bg-gray-200 rounded-xl p-3 w-full h-full focus: outline-none "
      />
    </div>
  );
};

export default Search;
