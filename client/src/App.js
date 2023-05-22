import React, { useState, useEffect } from "react";
import Content from "./components/Content";
import AddData from "./components/AddData";
import TableData from "./components/TableData";

function App() {
  
  return (
    <div>
      <div className="header">Phone Book</div>
      <AddData/>
      <TableData/>
      </div>
  );
}

export default App;

