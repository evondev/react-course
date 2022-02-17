import React from "react";
import { useAuth } from "../contexts/auth-context";
import { useGallery } from "../contexts/gallery-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  const { photos, cartItems } = useGallery();
  // console.log("HeaderMain ~ photos", photos);
  // console.log("HeaderMain ~ user", user);
  const favoriteCount =
    photos.length > 0
      ? photos.filter((item) => item.isFavorite === true).length
      : 0;
  const cartItemsCount = cartItems.length;
  // console.log(photos.filter((item) => item.isFavorite === true));
  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <div className="ml-auto mr-5 flex items-center gap-5">
        <span className="relative w-8">
          <svg
            width="44"
            height="41"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <ellipse
              cx="20.9584"
              cy="37.7083"
              rx="3.125"
              ry="3.125"
              fill="#292D32"
            />
            <circle cx="33.4584" cy="37.7083" r="3.125" fill="#292D32" />
            <path
              d="M5.33333 13.75L3.25 13.75"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7.41671 26.25L5.33337 26.25"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7.41669 20H1.16669"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11.0873 8.54167L15.7094 29.2435C15.8625 29.9291 16.4709 30.4167 17.1734 30.4167H36.7473C37.4498 30.4167 38.0582 29.9291 38.2113 29.2435L42.4255 10.3685C42.6347 9.43136 41.9218 8.54167 40.9615 8.54167H11.0873ZM11.0873 8.54167L9.40419 2.35616C9.2265 1.70315 8.63356 1.25 7.95682 1.25H1.16669"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-pink-600 text-xs absolute right-0 top-0 translate-x-2/4
          "
          >
            {cartItemsCount || 0}
          </span>
        </span>
        <span className="relative w-8">
          <svg
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <path
              d="M21 37.7499C19.6563 36.5582 18.1375 35.3186 16.5313 33.9999H16.5104C10.8542 29.3749 4.44376 24.1416 1.61251 17.8707C0.682335 15.8743 0.18939 13.7022 0.16665 11.4999C0.160438 8.478 1.37245 5.58112 3.52877 3.464C5.6851 1.34688 8.60372 0.188223 11.625 0.249901C14.0847 0.253786 16.4913 0.964653 18.5583 2.29782C19.4666 2.88734 20.2884 3.60043 21 4.41657C21.7156 3.60364 22.5376 2.89096 23.4438 2.29782C25.5099 0.96439 27.916 0.253481 30.375 0.249901C33.3963 0.188223 36.3149 1.34688 38.4712 3.464C40.6276 5.58112 41.8396 8.478 41.8334 11.4999C41.8121 13.7058 41.3191 15.8816 40.3875 17.8812C37.5563 24.152 31.1479 29.3832 25.4917 33.9999L25.4708 34.0166C23.8625 35.327 22.3458 36.5666 21.0021 37.7666L21 37.7499ZM11.625 4.41657C9.68441 4.39228 7.81266 5.13499 6.41667 6.48323C5.07164 7.80441 4.31991 9.61458 4.33316 11.4999C4.35694 13.1051 4.72048 14.6871 5.40001 16.1416C6.73649 18.8472 8.53982 21.2958 10.7271 23.3749C12.7917 25.4582 15.1667 27.4749 17.2208 29.1707C17.7896 29.6395 18.3688 30.1124 18.9479 30.5853L19.3125 30.8832C19.8688 31.3374 20.4438 31.8082 21 32.2707L21.0271 32.2457L21.0396 32.2353H21.0521L21.0708 32.2207H21.0813H21.0917L21.1292 32.1895L21.2146 32.1207L21.2292 32.1082L21.2521 32.0916H21.2646L21.2833 32.0749L22.6667 30.9395L23.0292 30.6416C23.6146 30.1645 24.1938 29.6916 24.7625 29.2228C26.8167 27.527 29.1938 25.5124 31.2583 23.4187C33.4459 21.3406 35.2493 18.8926 36.5854 16.1874C37.2772 14.7203 37.646 13.1218 37.6668 11.4999C37.6754 9.6204 36.924 7.81718 35.5833 6.4999C34.19 5.14557 32.318 4.39674 30.375 4.41657C28.004 4.39642 25.7374 5.39025 24.1458 7.14782L21 10.7728L17.8542 7.14782C16.2626 5.39025 13.996 4.39642 11.625 4.41657Z"
              fill="black"
            />
          </svg>
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-pink-600 text-xs absolute right-0 top-0 translate-x-2/4
          "
          >
            {favoriteCount || 0}
          </span>
        </span>
      </div>
      <button
        className="p-2 rounded-md bg-gray-300 text-black ml-auto"
        onClick={() => setUser(null)}
      >
        Sign out
      </button>
    </div>
  );
};

export default HeaderMain;
