import React, { useEffect, useState } from "react";

let previousScrollTop = 0;

const Homepage = (props) => {
  const [navbarPosition, setNavbarPosition] = useState(0);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidData, setIsValidData] = useState(false);

  const onLogOutHandler = () => {
    props.onLogOut();
  };

  const onRefreshData = () => {
    setIsValidData(true);
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
    };

    document.addEventListener("scroll", handleScroll);

    //componentWillUnMount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isValidData) {
      setIsLoading(true);
      setTimeout(() => {
        fetch("https://randomuser.me/api/?results=10")
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            setUsers(responseJson.results);
            setIsLoading(false);
            setIsValidData(false);
          });
      }, 1500);
    }
  }, [isValidData]);

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
      <button onClick={onRefreshData} className="btn btn-secondary ml-2">
        Refresh
      </button>
      <p>Total: {isLoading ? "loading...." : users.length}</p>
    </div>
  );
};
export default Homepage;
