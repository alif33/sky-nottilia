import React from "react";

const ProfileAdd = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={color}
      />
      <path
        d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499ZM14 18.1299H12.75V19.3799C12.75 19.7899 12.41 20.1299 12 20.1299C11.59 20.1299 11.25 19.7899 11.25 19.3799V18.1299H9.99996C9.58996 18.1299 9.24996 17.7899 9.24996 17.3799C9.24996 16.9699 9.58996 16.6299 9.99996 16.6299H11.25V15.3799C11.25 14.9699 11.59 14.6299 12 14.6299C12.41 14.6299 12.75 14.9699 12.75 15.3799V16.6299H14C14.41 16.6299 14.75 16.9699 14.75 17.3799C14.75 17.7899 14.41 18.1299 14 18.1299Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfileAdd;