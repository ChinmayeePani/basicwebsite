import React from "react";

function Container1() {
  return (
    <div className='container'>
      <button className="btn">Made In Webflow</button>
      <h1 className="d">
        Discover <span>Basic</span> Websites built by the Webflow Community
      </h1>
      <p className="b">
        Browse, clone, and customize the latest websites #MadeInWebflow.{" "}
        <a href="#" className="l">
          Looking for premium templates?
        </a>
      </p>
      <input type="text" placeholder="Search.." className="input"></input>
      <span className="all">
        <button>Basic</button>
        <button>All</button>
        <button>Animations</button>
        <button>Interactions</button>
        <button>CMS</button>
        <button>Ecommerce</button>
        <button>Portfolio</button>
      </span>
      <div className="most">
        <button className="btn1">Most Liked</button>
        <button className="btn1">Cloneable sites only</button>
        <button className="btn2">+ Showcase your site</button>
      </div>

      <div className="foot"></div>
    </div>
  );
}

export default Container1;
