import Datagrid from "@/reuseableComponents/dataGrid";
import React from "react";

const Pending = () => {
  const rows = [
    {
      id: 1,
      eventName: "Tech Conference 2025",
      startDateTime: "2025-09-15 10:00 AM",
      endDateTime: "2025-09-15 05:00 PM",
      venue: "Bangalore Convention Center",
      status: "Completed",
    },
    {
      id: 2,
      eventName: "Startup Pitch Night",
      startDateTime: "2025-09-20 06:00 PM",
      endDateTime: "2025-09-20 09:00 PM",
      venue: "Mumbai Innovation Hub",
      status: "In Progress",
    },
    {
      id: 3,
      eventName: "Design Thinking Workshop",
      startDateTime: "2025-09-25 09:00 AM",
      endDateTime: "2025-09-25 01:00 PM",
      venue: "Delhi Co-Working Space",
      status: "Draft",
    },
    {
      id: 4,
      eventName: "AI & ML Summit",
      startDateTime: "2025-10-02 09:30 AM",
      endDateTime: "2025-10-02 04:30 PM",
      venue: "Hyderabad Tech Park",
      status: "Completed",
    },
    {
      id: 5,
      eventName: "Cultural Fest 2025",
      startDateTime: "2025-10-05 05:00 PM",
      endDateTime: "2025-10-05 11:00 PM",
      venue: "Chennai Arts Arena",
      status: "Rejected",
    },
    {
      id: 6,
      eventName: "Hackathon 48hr",
      startDateTime: "2025-10-10 08:00 AM",
      endDateTime: "2025-10-12 08:00 AM",
      venue: "Pune IT Hub",
      status: "In Progress",
    },
    {
      id: 7,
      eventName: "Product Launch Gala",
      startDateTime: "2025-10-15 07:00 PM",
      endDateTime: "2025-10-15 10:00 PM",
      venue: "Goa Beach Resort",
      status: "Draft",
    },
    {
      id: 8,
      eventName: "Health & Wellness Expo",
      startDateTime: "2025-10-18 09:00 AM",
      endDateTime: "2025-10-18 06:00 PM",
      venue: "Jaipur Exhibition Center",
      status: "Completed",
    },
    {
      id: 9,
      eventName: "Blockchain Meetup",
      startDateTime: "2025-10-22 04:00 PM",
      endDateTime: "2025-10-22 08:00 PM",
      venue: "Ahmedabad FinTech Hub",
      status: "Rejected",
    },
    {
      id: 10,
      eventName: "Music Fiesta 2025",
      startDateTime: "2025-10-28 05:00 PM",
      endDateTime: "2025-10-28 11:30 PM",
      venue: "Kolkata Open Grounds",
      status: "In Progress",
    },
  ];

  const columns = [
    // { field: "id", headerName: "ID", flex: 1 },
    { field: "eventName", headerName: "Event Name", flex: 1 },
    { field: "startDateTime", headerName: "Start Date & Time", flex: 1 },
    { field: "endDateTime", headerName: "End Date & Time", flex: 1 },
    { field: "venue", headerName: "Venue", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
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
        <Datagrid rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default Pending;
