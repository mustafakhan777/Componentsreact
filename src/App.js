import { useState } from "react";
import "./App.css";
import INput from "./components/INput";
import Table from "./components/Table";
import Button from "./components/Button";
import Cards from "./components/Cards";

function App() {
  let users = [
    {
      id: 1,
      name: "ABC",
      age: 18,
      isActive: true,
    },
    {
      id: 2,
      name: "JKL",
      age: 18,
      isActive: true,
    },
    {
      id: 3,
      name: "TYU",
      age: 18,
      isActive: true,
    },
    {
      id: 4,
      name: "OPO",
      age: 18,
      isActive: true,
    },
  ];
  const tableData = [
    { id: 1, name: "Ahmed", age: 18, email: "ahmed123@abc.com" },
    { id: 2, name: "Ali", age: 20, email: "ali2@bcd.com" },
  ];
  const buttonClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="border border-dark w-100 mb-5 text-center fs-2">
        Input
      </div>
      <INput
        style="text-center"
        // value=""
        inptype="text"
        onChangefn={(e) => {
          console.log(e.target.value);
        }}
      />
      <div className="border border-dark w-100 my-5 text-center fs-2">
        Table
      </div>

      <div className="text-center">
        <Table style="text-center" data={tableData} />
      </div>

      <div className="border border-dark w-100 my-5 text-center fs-2">
        Button
      </div>

      <div className="">
        <Button
          label="Click it!"
          style="btn btn-warning fw-semibold"
          onclickfn={buttonClick}
        />
      </div>

      <div className="border border-dark w-100 my-5 text-center fs-2">
        Cards
      </div>

      <div className="">
        <div className="">
          {users.map((x, i) => {
            return (
              <Cards
                id={x.id}
                name={x.name}
                age={x.age}
                isActive={x.isActive}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
