import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback() {
  //   // side-effects
  // }, []);
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // console.log("outside");
  // instance
  // Ben Awad
  const handleLoadMorePhotos = useRef({});
  handleLoadMorePhotos.current = async () => {
    console.log("getRandomPhotos ~ nextPage", nextPage);
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    console.log("getRandomPhotos ~ newPhotos", newPhotos);
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    // side-effects
    // document.title = "Welcome to useEffect";
    // console.log("inside");
    handleLoadMorePhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
