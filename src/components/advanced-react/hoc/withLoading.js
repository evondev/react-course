import * as React from "react";

function withLoading(Component, url) {
  return (props) => {
    const [news, setNews] = React.useState([]);
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log("fetchData ~ data", data);
        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
}
export default withLoading;
// High order function: map, filter, some, every, reduce
// [1,2,3].map((item, array) => {})
