"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import CreateUser from "@/reuseableComponents/createUser";

const User = () => {
  const [isCreateUser, setIsCreateUser] = useState(true);
  const rows = [
    {
      id: 1,
      username: "ashaa_b",
      name: "Ashaa Bikawat",
      email: "ashaa.b@example.com",
      phone: "+91 98765 43210",
      status: "Active",
    },
    {
      id: 2,
      username: "raaj_p",
      name: "Raaj Patil",
      email: "raaj.p@example.com",
      phone: "+91 87654 32109",
      status: "Active",
    },
    {
      id: 3,
      username: "salman_k",
      name: "Salman Khan",
      email: "salman.khan@example.com",
      phone: "+91 76543 21098",
      status: "Inactive",
    },
    {
      id: 4,
      username: "aamir_k",
      name: "Aamir Khan",
      email: "aamir.khan@example.com",
      phone: "+91 65432 10987",
      status: "Active",
    },
    {
      id: 5,
      username: "neha_s",
      name: "Neha Sharma",
      email: "neha.sharma@example.com",
      phone: "+91 91234 56780",
      status: "Active",
    },
    {
      id: 6,
      username: "vikram_r",
      name: "Vikram Rao",
      email: "vikram.rao@example.com",
      phone: "+91 99887 66554",
      status: "Inactive",
    },
    {
      id: 7,
      username: "meena_g",
      name: "Meena Gupta",
      email: "meena.g@example.com",
      phone: "+91 88990 11223",
      status: "Active",
    },
    {
      id: 8,
      username: "arjun_m",
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      phone: "+91 93456 78901",
      status: "Inactive",
    },
    {
      id: 9,
      username: "priya_k",
      name: "Priya Kapoor",
      email: "priya.kapoor@example.com",
      phone: "+91 94567 89012",
      status: "Active",
    },
    {
      id: 10,
      username: "rahul_j",
      name: "Rahul Joshi",
      email: "rahul.joshi@example.com",
      phone: "+91 95678 90123",
      status: "Active",
    },
  ];

  const columns = [
    { field: "username", headerName: "Username", flex: 1 },
    { field: "name", headerName: "Display Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
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

  const handleModal = () => {
    setIsCreateUser(false);
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
            Users
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
            All users
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
              <span>Bulk add users</span>
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
              <span>Export users</span>
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
              onClick={() => setIsCreateUser(true)}
            >
              <i class="ri-add-line"></i>
              <span>Add User</span>
            </Button>
          </Box>
        </Box>

        {/* table grid*/}
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            checkboxSelection
            columns={columns}
            columnHeaderHeight={40}
            sx={{
              border: "none",
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              // Test with a very obvious color first
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#FAFAFA !important", // Test color
                border: "none !important",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#FAFAFA !important", // Test color
                border: "none !important",
              },
            }}
          />
        </div>
        {isCreateUser && <CreateUser handleModal={handleModal} />}
      </Box>
    </Box>
  );
};

export default User;
