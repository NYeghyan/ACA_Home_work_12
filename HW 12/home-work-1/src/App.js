import "./App.css";
import useLocalStorage from "./useLocalStorage";
import { useRef, useState } from "react";


function App() {
  const [name, setNaeme] = useState();
 
  let key = Math.floor((Math.random()) * 1000)


const myinput = useRef()


  const { storageData,
          getSavedValueFromHook, 
          clearLocalStorageFromHook, 
          setItemToLocalStorageFromHook ,
          removeLocalStorageFromHook,
        } =
    useLocalStorage();

const setItemToLocalStorage = () => {
    setItemToLocalStorageFromHook(key, name);
     myinput.current.value = ""
}

const handleInputData = (e) => {
  setNaeme((prev) => e.target.value)
}


  const handleCleareLocalStorage = (e) => {
    e.preventDefault()
    clearLocalStorageFromHook();
  };



  const  handleRemouveFromLocalStorage = (e) => {
    removeLocalStorageFromHook(myinput.current.value)
  }

  const getItemFromLocalStorage = (e) => {
    console.log(storageData)
    if (storageData) {
      getSavedValueFromHook()
    } else {
      alert("Ther is no storage data")
    }
  };
// console.log(Object.values(storageData))


  return (
    <>
      <input ref={myinput} name="myinput" type="text"   onChange={handleInputData} />
      <button onClick={handleCleareLocalStorage} >Cleare LocalStorage </button>
      <button onClick={getItemFromLocalStorage}>get LocalStorage </button>
      <button onClick={setItemToLocalStorage}>set LocalStorage </button>
      <button onClick={handleRemouveFromLocalStorage}>remuve from LocalStorage </button>

   
      
    {storageData &&  Object.entries(storageData).map((el,index)=><p key={index}> {el} </p>) }
    </>
  );
}

export default App;
