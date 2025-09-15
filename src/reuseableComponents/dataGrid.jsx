import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const Datagrid = ({ columns, value }) => {
  return (
    <div className="card">
      <DataTable
        value={value}
        tableStyle={{ minWidth: "60rem" }}
        scrollable
        scrollHeight="500px"
      >
        {columns?.map((c) => (
          <Column
            key={c.id}
            field={c.field}
            header={c.header}
            style={{
              fontSize: "14px",
            }}
            body={c.body}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default Datagrid;
