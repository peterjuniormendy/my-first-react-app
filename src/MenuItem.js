import React from "react";

const MenuItem = (props) => {
  // Note we can destructure props and just use {menuItem} and pass it into the anchor tag.
  return (
    <li>
      <a href="Home">{props.menuItem} </a>
    </li>
  );
};

export default MenuItem;
