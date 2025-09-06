"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const sidebar = ({
  isCollapsed,
  setsIsCollapsed,
  isHovered,
  setIsHovered,
  expanded,
}) => {
  const authStore = useSelector((store) => store.auth.token);
  const menu = authStore[1];
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        height: "100vh",
        transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
        cursor: `${expanded ? "pointer" : "default"}`,
      }}
      onMouseEnter={() => {
        if (isCollapsed) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isCollapsed) {
          setIsHovered(false);
        }
      }}
      onClick={() => setsIsCollapsed(!isCollapsed)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ marginBottom: "0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: `${expanded ? "space-between" : "center"}`,
              width: "100%",
              padding: "10px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: `${expanded ? "25px" : "18px"} `,
                }}
              >
                EMS
              </Typography>
            </Box>
            {expanded && (
              <Box
                sx={{
                  cursor: "pointer",
                }}
              >
                <i
                  class="ri-menu-line"
                  style={{
                    fontSize: "24px",
                  }}
                ></i>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: `${expanded ? "left" : "center"}`,
            justifyContent: "center",
            flexDirection: "column",
            gap: "2px",
            padding: "10px",
          }}
        >
          {menu.map((m) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                gap: "10px",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#cff5f0",
                },
              }}
            >
              <span>
                <i
                  class={`${m.icon}`}
                  style={{
                    fontSize: `${expanded ? "16px" : "24px"}`,
                  }}
                ></i>
              </span>
              {expanded && (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "inherit",
                  }}
                >
                  {m.name}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default sidebar;
