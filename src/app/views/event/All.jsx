import Datagrid from "@/reuseableComponents/dataGrid";
import { Tag } from "primereact/tag";
import React, { useState } from "react";

const All = () => {
  const events = [
    {
      id: 1,
      eventName: "Tech Conference 2025",
      startDateTime: "2025-09-20 10:00 AM",
      endDateTime: "2025-09-20 05:00 PM",
      venue: "Bangalore Convention Center",
      status: "Pending",
    },
    {
      id: 2,
      eventName: "Startup Pitch Fest",
      startDateTime: "2025-10-05 02:00 PM",
      endDateTime: "2025-10-05 06:00 PM",
      venue: "Mumbai Innovation Hub",
      status: "Completed",
    },
    {
      id: 3,
      eventName: "AI Workshop",
      startDateTime: "2025-10-12 09:00 AM",
      endDateTime: "2025-10-12 01:00 PM",
      venue: "Hyderabad Tech Park",
      status: "Rejected",
    },
    {
      id: 4,
      eventName: "Design Sprint",
      startDateTime: "2025-11-01 11:00 AM",
      endDateTime: "2025-11-01 04:00 PM",
      venue: "Delhi Design Studio",
      status: "Draft",
    },
    {
      id: 5,
      eventName: "Cloud Expo",
      startDateTime: "2025-11-15 09:30 AM",
      endDateTime: "2025-11-15 05:30 PM",
      venue: "Chennai Trade Center",
      status: "Pending",
    },
  ];

  const statusTemplate = (row) => {
    const statusColors = {
      Pending: { severity: "info", label: "Pending" }, // light blue
      Completed: { severity: "success", label: "Completed" }, // green
      Rejected: { severity: "danger", label: "Rejected" }, // red
      Draft: { severity: "secondary", label: "Draft" }, // gray
    };

    const st = statusColors[row.status] || {
      severity: "secondary",
      label: row.status,
    };
    return <Tag value={st.label} severity={st.severity} />;
  };

  const ActionTemplate = (row) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "100%",
        }}
      >
        <i
          class="ri-edit-fill"
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
        ></i>
        <i
          class="ri-add-circle-fill"
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
        ></i>
        <i
          class="ri-delete-bin-5-fill"
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
        ></i>
      </div>
    );
  };

  const columns = [
    { id: 1, field: "id", header: "ID" },
    { id: 2, field: "eventName", header: "Event name" },
    { id: 3, field: "startDateTime", header: "Start Date & Time" },
    { id: 4, field: "endDateTime", header: "End Date & Time" },
    { id: 5, field: "venue", header: "Venue" },
    { id: 6, field: "status", header: "Status", body: statusTemplate },
    { id: 7, field: "action", header: "Actions", body: <ActionTemplate /> },
  ];

  return (
    <>
      {/* table grid*/}
      <div
        style={{
          height: 500,
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Datagrid value={events} columns={columns} />
      </div>
    </>
  );
};

export default All;
