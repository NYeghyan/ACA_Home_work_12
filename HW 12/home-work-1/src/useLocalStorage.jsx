import { useState } from "react";

export default function useLocalStorage(key, value) {
const [storageData, setstorageData] = useState({})


  const getSavedValueFromHook = () => {
    setstorageData({ ...localStorage });
  };

  const removeLocalStorageFromHook = (kay) => {
    localStorage.removeItem(kay);
    setstorageData({ ...localStorage });
  };


  const clearLocalStorageFromHook = () => {
    setstorageData(null)
    localStorage.clear();
  };

  const setItemToLocalStorageFromHook = (kay, value) => {
    
    localStorage.setItem(kay, JSON.stringify(value));
    setstorageData({ ...localStorage });
  };

  return {
    storageData,
    getSavedValueFromHook,
    clearLocalStorageFromHook,
    setItemToLocalStorageFromHook,
    removeLocalStorageFromHook
  };
}
