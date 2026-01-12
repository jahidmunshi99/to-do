import { IoSearch } from "react-icons/io5";
import { UseAuth } from "../../Providers/AuthProvider";
const SearchBox = () => {
  const { data, setData, search, setSearch } = UseAuth();

  const handleSearch = () => {
    if (!data) return;
    const searchResult = data.filter(
      (item) => item.client_name === search || item.client_id === search
    );
    setSearch(searchResult);
    console.log(searchResult);
    setData(searchResult);
  };
  return (
    <section>
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
              placeholder="Search Task"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              onClick={handleSearch}
            >
              <IoSearch />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchBox;
