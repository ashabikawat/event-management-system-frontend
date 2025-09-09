"use client";
import { Box, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const sidebar = ({
  isCollapsed,
  setsIsCollapsed,
  isHovered,
  setIsHovered,
  expanded,
}) => {
  const router = useRouter();
  const authStore = useSelector((store) => store.auth.token);
  const menu = authStore[1];
  return (
    <Box
      sx={{
        bgcolor: "#F6F6F6",
        width: "100%",
        height: "100vh",
        transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
        cursor: `${expanded ? "pointer" : "default"}`,
        borderRight: "1px solid #F0F0F0",
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
              padding: "14px 12px",
              // borderBottom: "1px solid #ddd",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: `${expanded ? "25px" : "18px"} `,
                  fontWeight: "700",
                }}
              >
                EMS
              </Typography>
            </Box>
            {expanded && (
              <Box
                onClick={() => setsIsCollapsed(!isCollapsed)}
                sx={{
                  cursor: "pointer",
                  padding: "6px",
                  borderRadius: "10px",
                  "&:hover": {
                    bgcolor: "#F5F7FB",
                  },
                }}
              >
                <i
                  class="ri-menu-line"
                  style={{
                    fontSize: "22px",
                  }}
                ></i>
              </Box>
            )}
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: `${expanded ? "left" : "center"}`,
            flexDirection: "column",
            // gap: "px",
            padding: "10px",
            height: "500px",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          {menu.map((m) => (
            <Box
              onClick={() => {
                router.push(m.path);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#F5F7FB",
                },
              }}
            >
              <span>
                <i
                  class={`${m.icon}`}
                  style={{
                    fontSize: "20px",
                  }}
                ></i>
              </span>
              {expanded && (
                <Typography
                  sx={{
                    fontSize: "15px",
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
