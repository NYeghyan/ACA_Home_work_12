import CustomFetchHook from "./hooks/useFetchHook";
import "./App.css";

function App() {
  const {
    handleFetchData,
    FetchData,
    title,
    SetTitle,
    pageNumber,
    SetPageNumber,
    limit,
    Setlimit,
  } = CustomFetchHook();

  console.log(FetchData);

  const HandleButtonClick = (e) => {
    if (title) {
      handleFetchData(title, pageNumber, limit);
    }
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={HandleButtonClick}>
        <input
          onChange={(e) => SetTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          onChange={(e) => SetPageNumber(e.target.value)}
          placeholder="Page Number"
        />
        <input
          onChange={(e) => Setlimit(e.target.value)}
          placeholder="Limit per page"
        />
        <button type="submit">serch </button>
      </form>

      {FetchData && (
        <div className="list-of-items">
          <span> Title match count {FetchData.numFound} </span>
          {FetchData.docs.map((value, index) => (
            <ul key={index}>
              <li> Title is: {value.title}</li>
              <li> Author Name is: {value.author_name}</li>
              <li> First Publish Year: {value.first_publish_year}</li>
              <li> Subject is : {value.subject}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
