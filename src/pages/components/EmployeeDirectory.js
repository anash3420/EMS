import React, { useState } from "react";
import { EmployeeSearch } from "./EmployeeSearch";
import { EmployeeCreate } from "./EmployeeCreate";
import { IconButton } from "@mui/material";
import { ArrowBack, Search } from "@mui/icons-material";
import { EmployeeTable } from "./EmployeeTable";

export const EmployeeDirectory = () => {
  //seach API call ()
  const [searchText, setSearchText] = useState("");
  const [createEmployee, setCreateEmployee] = useState(false);
  console.log(searchText);
  return (
    <>
      <IconButton
        aria-label="fingerprint"
        color="success"
        style={{ alignSelf: "flex-end" }}
        onClick={() => {setCreateEmployee(!createEmployee)}}
      >
        {createEmployee ? <ArrowBack /> : <Search />}
      </IconButton>
      {createEmployee ? <EmployeeCreate /> : (
        <>
            <EmployeeSearch setSearchText={(val) => setSearchText(val)} />
            <EmployeeTable data={[]} />
        </>
        )}
    </>
  );
};
