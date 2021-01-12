import "./App.css";
import React, {
  useEffect,
  useState,

} from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { ProfileList } from "../ProfileList/ProfileList";
import { fetchRecords } from "../../utils/fetchProfile";
import ReactPaginate from "react-paginate";

import "react-table-filter/lib/styles.css";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm] = useState("");
  const [selected, setSelected] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const url = "https://api.enye.tech/v1/challenge/records";
    fetchRecords(url)
      .then((profiles) => setProfiles([...profiles]))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);


  const handlePageClick = (data) => {
    // if (data.selected === 0) {
    //   return;
    // }
    setSelected(() => data.selected * 20);
    setPerPage((selected) => selected + 20);
  };


  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm) {
      let result = profiles.filter((obj) =>
        Object.keys(obj).some((key) =>
          String(obj[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setSearchResult(() => result);
    }
  };

  const _filterUpdated = (newData, filtersObject) => {
      if(newData){
        setSearchResult(()=>newData)
        console.log(searchResult);

      }
  };


  let resultList = searchResult.length !== 0 ? searchResult : profiles ;

  return (
    <React.Fragment>
      <SearchBar term={searchTerm} handleSearch={handleSearch}  />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={resultList.length / 20}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <ProfileList
        result={resultList.slice(selected, perPage)}
        _filterUpdated={_filterUpdated} 
      />
    </React.Fragment>
  );
}
