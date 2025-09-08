"use client";
import { Box } from "@mui/material";
import Sidebar from "@/reuseableComponents/sidebar";
import React, { useState } from "react";

const LayoutWrapper = ({ children }) => {
  const [isCollapsed, setsIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const expanded = isHovered || !isCollapsed;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: `${expanded ? "250px" : "100px"}`,
        }}
      >
        <Sidebar
          isCollapsed={isCollapsed}
          setsIsCollapsed={setsIsCollapsed}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          expanded={expanded}
        />
      </Box>
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          p: 2,
          flex: 1,
          minWidth: 0,
          height: "100%",
          width: "calc(100% - ${expanded ? '300px' : '100px'})",
          width: `${expanded ? "800px" : "100px"}`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayoutWrapper;
