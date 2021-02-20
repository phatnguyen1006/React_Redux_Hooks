import React from "react";
import Link from "../Features/Link";

const Footer = () => {
  return (
    <p>
      SHOW: 
      <Link filter={"SHOW_ALL"}>ALL</Link>{" "}
      <Link filter={"SHOW_ACTIVE"}>ACTIVE</Link>{" "}
      <Link filter={"SHOW_COMPLETED"}>COMPLETED</Link>
    </p>
  )
}

export default Footer;