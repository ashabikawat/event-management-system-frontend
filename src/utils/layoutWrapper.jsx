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
        // justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${expanded ? "300px" : "100px"}`,
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
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayoutWrapper;
