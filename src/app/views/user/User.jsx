"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Datagrid from "@/reuseableComponents/dataGrid";
import CreateUser from "@/app/views/user/createUser";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";

const User = () => {
  const toast = useRef(null);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const user = [
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

  const handleDelete = (row) => {
    console.log("row", row);
    confirmDialog({
      message: "Are you sure you want to delete this user ?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "none",
      acceptClassName: "danger-btn",
      acceptLabel: "Delete",
      rejectLabel: "Cancel",
      icon: (
        <i
          className="ri-delete-bin-6-line"
          style={{
            fontSize: "26px",
          }}
        ></i>
      ),
    });
  };

  const handleEdit = (row) => {
    console.log("row", row);
    confirmDialog({
      message: "Are you sure you want to edit this user ?",
      header: "Confirmation",
      acceptLabel: "Edit",
      rejectLabel: "Cancel",
      acceptClassName: "edit-btn",
      defaultFocus: "none",
      icon: (
        <i
          className="ri-error-warning-line"
          style={{
            fontSize: "26px",
          }}
        ></i>
      ),
    });
  };

  const StatusTemplate = (row) => {
    const statusColors = {
      Active: { severity: "success", label: "Active" }, // green
      Inactive: { severity: "danger", label: "Inactive" }, // red
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
          onClick={() => handleEdit(row)}
        ></i>

        <i
          class="ri-delete-bin-5-fill"
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={() => handleDelete(row)}
        ></i>
      </div>
    );
  };

  const column = [
    { id: 1, field: "id", header: "ID" },
    { id: 2, field: "username", header: "User name" },
    { id: 3, field: "name", header: "Display name" },
    { id: 4, field: "email", header: "Email" },
    { id: 5, field: "phone", header: "Phone no." },
    { id: 6, field: "status", header: "Status", body: StatusTemplate },
    { id: 7, field: "action", header: "Actions", body: ActionTemplate },
  ];

  const handleModal = () => {
    setIsCreateUser(false);
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
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
                  border: "1px solid #F0F0F0",
                  color: "#3D3D4E",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  padding: "6px 20px",
                  borderRadius: "8px",
                  gap: "4px",
                  boxShadow: 0,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                  "&:hover": {
                    bgcolor: "#F5F4F7",
                  },
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
                  border: "1px solid #F0F0F0",
                  color: "#3D3D4E",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  padding: "6px 20px",
                  borderRadius: "8px",
                  gap: "4px",
                  boxShadow: 0,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                  "&:hover": {
                    bgcolor: "#F5F4F7",
                  },
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
                  padding: "6px 20px",
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

          <Datagrid columns={column} value={user} />

          {isCreateUser && <CreateUser handleModal={handleModal} />}
        </Box>
      </Box>
    </>
  );
};

export default User;
