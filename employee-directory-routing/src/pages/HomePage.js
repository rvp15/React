import React from "react";

import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
function HomePage() {
  return (
    <div>
      <Header />
      <Searchbar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
