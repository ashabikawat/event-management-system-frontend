"use client";
import CreateRole from "@/app/views/roles/createRole";
import Datagrid from "@/reuseableComponents/dataGrid";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Role = () => {
  const rows = [
    {
      id: 1,
      roleName: "Admin",
      description: "Full access to all system features",
      permissions: "Read, Write, Delete, Manage Users",
      status: "Active",
    },
    {
      id: 2,
      roleName: "Manager",
      description: "Manage teams and oversee projects",
      permissions: "Read, Write, Approve",
      status: "Active",
    },
    {
      id: 3,
      roleName: "Editor",
      description: "Can edit and update content",
      permissions: "Read, Write",
      status: "Active",
    },
    {
      id: 4,
      roleName: "Viewer",
      description: "Read-only access to system data",
      permissions: "Read",
      status: "Inactive",
    },
    {
      id: 5,
      roleName: "HR",
      description: "Manages employee records and payroll",
      permissions: "Read, Write, Approve",
      status: "Active",
    },
    {
      id: 6,
      roleName: "Finance",
      description: "Handles billing and financial reports",
      permissions: "Read, Write",
      status: "Inactive",
    },
    {
      id: 7,
      roleName: "Support",
      description: "Handles user queries and tickets",
      permissions: "Read, Write",
      status: "Active",
    },
    {
      id: 8,
      roleName: "QA",
      description: "Tests and ensures product quality",
      permissions: "Read, Write, Approve",
      status: "Inactive",
    },
    {
      id: 9,
      roleName: "Developer",
      description: "Builds and maintains system features",
      permissions: "Read, Write, Deploy",
      status: "Active",
    },
    {
      id: 10,
      roleName: "Guest",
      description: "Temporary access with limited rights",
      permissions: "Read",
      status: "Inactive",
    },
  ];

  const columns = [
    { field: "roleName", headerName: "Role Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    { field: "permissions", headerName: "Permissions", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const value = params.value;
        const bgColor = value === "Active" ? "#E7FDE6" : "#FEF2E7";
        const textColor = value === "Active" ? "#2E7D32" : "#EF6C00";
        return (
          <Box
            sx={{
              bgcolor: bgColor,
              color: textColor,
              borderRadius: "999px",
              minWidth: "80px",
              display: "inline-block",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {value}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "Action",
      // headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        // const value = params.value;
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <i class="ri-pencil-line"></i>
            <i class="ri-delete-bin-line" style={{ color: "#CF193A" }}></i>
          </Box>
        );
      },
    },
  ];

  const [isCreateRole, setIsCreateRole] = useState(false);
  const handleModal = () => {
    setIsCreateRole(false);
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
        }}
      >
        <Box>
          <Typography fontWeight={600} fontFamily="inherit" fontSize="18px">
            Roles
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
            All roles
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
              <i class="ri-time-line"></i>
              <span>Bulk add roles</span>
            </Button>

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
              <span>Export roles</span>
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
              onClick={() => setIsCreateRole(true)}
            >
              <i class="ri-add-line"></i>
              <span>Add Role</span>
            </Button>
          </Box>
        </Box>

        {/* table grid*/}
        <div style={{ height: 500, width: "100%" }}>
          <Datagrid rows={rows} columns={columns} />
        </div>
        {isCreateRole && <CreateRole handleModal={handleModal} />}
      </Box>
    </Box>
  );
};

export default Role;
