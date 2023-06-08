import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const EmployeeSearch = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    props.setSearchText(text);
    };
  return (
    <Grid container spacing={3} style={{ margin: "2%" }}>
      <Grid item xs={4} justifyContent={"center"}>
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="standard"
        />
      </Grid>
      <Grid item xs={2} justifyContent={"center"}>
        <Button
          
          style={{ height: "100%" }}
          onClick={handleSearch }
          variant="contained"
          color="primary"
        //   fullWidth
        > Search</Button>
      </Grid>
    </Grid>
  );
};
