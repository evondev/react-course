import React from "react";
import withError from "./withError";
import withLoading from "./withLoading";
// Higher Order Component
// connect, loading
const FetchingData = ({ data }) => {
  console.log("FetchingData ~ data", data);
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withError(
  withLoading(FetchingData, "https://hn.algolia.com/api/v1/search?query=css")
);
