"use client";
import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import All from "./All";
import Completed from "./Completed";
import Rejected from "./Rejected";
import Draft from "./Draft";
import Pending from "./Pending";

const Event = () => {
  const [selectedType, setSelectedType] = useState("All");

  const statuses = [
    {
      id: 1,
      status: "All",
      value: <All />,
    },
    {
      id: 2,
      status: "Pending",
      value: <Pending />,
    },
    {
      id: 3,
      status: "Completed",
      value: <Completed />,
    },
    {
      id: 4,
      status: "Rejected",
      value: <Rejected />,
    },
    {
      id: 5,
      status: "Draft",
      value: <Draft />,
    },
  ];

  const getComponent = (type) => {
    switch (type) {
      case "All":
        return <All />;

      case "Pending":
        return <Pending />;

      case "Completed":
        return <Completed />;

      case "Rejected":
        return <Rejected />;

      case "Draft":
        return <Draft />;

      default:
        return <All />;
    }
  };

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
          width: "100%",
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
          width: "100%",
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
            Events
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

        {/* tabs */}
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              // bgcolor: "red",
              height: "50px",
              padding: "0 10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                // justifyContent: "space-between",
                width: "100%",
                height: "100%",
              }}
            >
              {statuses.map((stats) => (
                <Box
                  sx={{
                    cursor: "pointer",
                    // border: "1px solid black",
                    borderBottom: "2px solid transparent",
                    padding: "4px 16px",
                    transition: "border-color 0.3s ease-in-out",
                    "&:hover": {
                      borderBottom: "2px solid blue",
                    },

                    bgcolor: selectedType === stats.status ? "#E3F2FD" : "",
                    borderRadius:
                      selectedType === stats.status ? "10px" : "0px",
                  }}
                  onClick={() => setSelectedType(stats.status)}
                >
                  <Typography
                    key={stats.id}
                    sx={{
                      fontFamily: "inherit",
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: selectedType === stats.status ? "500" : "400",
                    }}
                  >
                    {stats.status}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider />

        {getComponent(selectedType)}
      </Box>
    </Box>
  );
};

export default Event;
