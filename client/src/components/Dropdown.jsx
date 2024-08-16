"use client";

import { Dropdown } from "flowbite-react";

export function UserDropdown({ logoutHandler }) {
  return (
    <Dropdown
      label={<span className="text-black">User</span>} // Ensure the dropdown label text is black
      dismissOnClick={false}
      className="custom-dropdown"
    >
      <Dropdown.Item onClick={logoutHandler} className="custom-dropdown-item">
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
