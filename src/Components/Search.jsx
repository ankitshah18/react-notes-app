import React, { useContext } from "react";
import { MdSearch } from "react-icons/md";
import AllContext from "../context/context";

const Search = () => {
  const { setSearchText } = useContext(AllContext);
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search"
        onChange={(event) =>
          setSearchText(
            event.target.value,
            console.log("searchtext", event.target.value)
          )
        }
      />
    </div>
  );
};

export default Search;
