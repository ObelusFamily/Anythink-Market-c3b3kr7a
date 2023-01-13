import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {

  const handleSearch = (e) => {
    e.preventDefault();

    let keyword = e.target.value;

    props.onSearch(
      keyword,
      (page) => agent.Items.byTitle(keyword, page),
      agent.Items.byTitle(keyword)
    )
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input id="search-box" className="mx-2 p-2" type="search" placeholder="What is that you truly desire" onChange={handleSearch} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// done - create ui
// done - add agent byTitle
// done - add action types
// add handle search function
//