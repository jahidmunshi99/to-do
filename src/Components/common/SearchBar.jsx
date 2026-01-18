import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { getPosts } from "../../FetchData/getPosts";
import { UseAuth } from "../../Providers/AuthProvider";

const SearchBar = () => {
  const { data, setData } = UseAuth();
  const [search, setSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(true);

  if (isSearch.length > 0) {
    setIsSearch(false);
  }
  console.log(search);
  const handleSearch = () => {
    if (!data) return;
    setIsSearch(false);

    const searchResult = data.filter(
      (item) => item.client_name === search || item.client_id === search
    );
    setData(searchResult);
  };

  const handleSearchClose = async () => {
    setIsSearch(true);
    setSearch("");
    const result = await getPosts();
    setData(result);
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
            {isSearch ? (
              <button
                onClick={handleSearch}
                type="button"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              >
                <IoSearch />
              </button>
            ) : (
              <button
                onClick={handleSearchClose}
                type="button"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              >
                <IoClose />
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
