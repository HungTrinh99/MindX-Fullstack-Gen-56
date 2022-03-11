import React, { useEffect, useState } from "react";

let previousScrollTop = 0;

const Homepage = (props) => {
  const [navbarPosition, setNavbarPosition] = useState(0);

  const onLogOutHandler = () => {
    props.onLogOut();
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.documentElement.scrollTop;

      // scroll down
      if (scrollTop > previousScrollTop) {
        setNavbarPosition(0);
      } else {
        // scroll up
        setNavbarPosition(scrollTop);
      }

      previousScrollTop = scrollTop;
      console.log("scrollTop-", scrollTop);
    };

    document.addEventListener("scroll", handleScroll);


    //componentWillUnMount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div
      style={{
        height: 2000,
        position: "relative",
        paddingTop: 60,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 50,
          position: "absolute",
          backgroundColor: "black",
          color: "white",
          fontSize: 24,
          top: navbarPosition,
          left: 0,
        }}
      >
        <h5>Navbar Component</h5>
      </div>
      <h1>Homepage</h1>
      <button onClick={onLogOutHandler} className="btn btn-success">
        Log out
      </button>
    </div>
  );
};
export default Homepage;
