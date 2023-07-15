import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataSearchAction } from "../store/slice/dataSearch";
import { useActionData, redirect } from "react-router-dom";
import SearchContent from "../components/Search/SearchContent";
const SearchPage = () => {
  const dataSearch = useActionData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataSearch) {
      if (dataSearch.length === 0) {
        return window.alert("No matching hotel found");
      }
      dispatch(dataSearchAction.add_data(dataSearch));
    }
  }, [dataSearch]);
  return <SearchContent />;
};
export default SearchPage;

export const action = async ({ request }) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;

  const method = request.method;
  const valueInput = await request.formData();

  const destination = valueInput.get("destination");
  const [dateStart, dateEnd] = valueInput.get("date").split(" to ");
  const ault = valueInput.get("ault") ? valueInput.get("ault") : 1;
  const children = valueInput.get("children") ? valueInput.get("children") : 0;
  const room = valueInput.get("room") ? valueInput.get("room") : 1;

  const body = {
    destination,
    dateStart,
    dateEnd,
    ault,
    children,
    room,
  };

  const response = await fetch(
    process.env.REACT_APP_API_URL + "/search_hotel",
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user._id,
      },
      body: JSON.stringify(body),
    }
  );
  if (!response.ok) {
    console.log("search error");
    return null;
  }

  const data = await response.json();

  return data;
};
