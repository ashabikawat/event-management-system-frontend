import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Datagrid = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        rows={rows}
        checkboxSelection
        columns={columns}
        columnHeaderHeight={40}
        sx={{
          border: "none",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          // Test with a very obvious color first
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#FAFAFA !important", // Test color
            border: "none !important",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#FAFAFA !important", // Test color
            border: "none !important",
          },
        }}
      />
    </>
  );
};

export default Datagrid;
