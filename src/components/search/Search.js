import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { WEATHER_API_URL, weatherApiOption } from "../../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  
  const loadOptions = async (inputValue) => {
    try {
      const { data } = await axios.get(`${WEATHER_API_URL}${inputValue}`);

      dispatch({ type: "placeData", payload: data.location.name });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    if (e.key === "Enter") {
      onSearchChange(e);
      setText("");
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={(e) => setText(e.target.value)}
      onKeyUp={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
