import React from "react";
import withLoading from "./withLoading";

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

export default withLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=css"
);
