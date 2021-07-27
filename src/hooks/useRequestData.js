import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constants/url";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${baseUrl}${endpoint}`)
      .then((response) => setData(response.data))
      .catch((error) => alert(error));
  }, [endpoint]);
  return data;
};
