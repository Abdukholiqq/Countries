import { useState, useEffect } from "react";
const Header = () => {
  return (
    <div className="  position-fixed z-3 w-100 d-flex justify-content-around  bg-success p-5 text-warning">
      <input
        className="w-25 p-2 rounded-3"
        type="search"
        name="search"
        id="search"
        placeholder="Search"
      />
      <h1> All Countries</h1>
      <select className="w-25 p-2 rounded-3" name="select" id="select"></select>
    </div>
  );
};
export default Header;
