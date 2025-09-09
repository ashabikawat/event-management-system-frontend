"use client";
import Datagrid from "@/reuseableComponents/dataGrid";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Event = () => {
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
    <Box
      sx={{
        width: "100%",
        height: "100% ",
        // padding: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box>
          <Typography fontWeight={600} fontFamily="inherit" fontSize="18px">
            Events
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        {/* cta btns */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <Typography fontWeight="600" fontFamily="inherit" fontSize="16px">
            All events
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              size="small"
              sx={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #F7F7F7",
                color: "#3D3D4E",
                fontWeight: "600",
                fontFamily: "inherit",
                padding: "6px 10px",
                gap: "4px",
                textTransform: "capitalize",
                borderBottom: "2px solid #EFEFEF",
                borderRadius: "10px",
              }}
            >
              <i class="ri-file-text-line"></i>
              <span>Export Events</span>
            </Button>

            <Button
              size="small"
              sx={{
                display: "flex",
                bgcolor: "black",
                alignItems: "center",
                // border: "1px solid #EFEFEF",
                color: "white",

                fontWeight: "600",
                fontFamily: "inherit",
                padding: "6px 10px",
                gap: "4px",
                textTransform: "capitalize",
                // borderBottom: "2px solid #EFEFEF",
                borderRadius: "10px",
              }}
              onClick={() => {
                window.open("/createEvent", "_blank");
              }}
            >
              <i class="ri-add-line"></i>
              <span>Add Event</span>
            </Button>
          </Box>
        </Box>

        {/* table grid*/}
        <div style={{ height: 500, width: "100%" }}>
          <Datagrid rows={rows} columns={columns} />
        </div>
      </Box>
    </Box>
  );
};

export default Event;
