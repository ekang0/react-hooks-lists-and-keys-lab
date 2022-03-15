import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchorLink = links.map((link)=> {
    return <a href={'#' + link} key={link}>{link}</a>
  })

  return <nav>{anchorLink}</nav>;
}

export default NavBar;
