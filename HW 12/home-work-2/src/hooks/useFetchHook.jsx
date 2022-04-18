import { useState } from "react";

function CustomFetchHook() {
  const [FetchData, SetFeFetchData] = useState();
  const [title, SetTitle] = useState();
  const [pageNumber, SetPageNumber] = useState(1);
  const [limit, Setlimit] = useState(100);

  const handleFetchData = (title, pageNumber, limit) => {
    fetch(
      `https://openlibrary.org/search.json?q=${title}&page=${pageNumber}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => SetFeFetchData(res));
  };

  return {
    handleFetchData,
    FetchData,
    title,
    SetTitle,
    pageNumber,
    SetPageNumber,
    limit,
    Setlimit,
  };
}

export default CustomFetchHook;
