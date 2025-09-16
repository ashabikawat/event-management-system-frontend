"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Datagrid from "@/reuseableComponents/dataGrid";
import CreateUser from "@/app/views/user/createUser";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { useSelector } from "react-redux";
import { axiosWrapper } from "@/utils/axiosWrapper";
import { userEndpoints } from "@/utils/endpoints";

const User = () => {
  const toast = useRef(null);
  const authDetails = useSelector((store) => store.auth);
  const userDetails = authDetails.user;
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [user, setUser] = useState([]);
  const [editObject, setEditObject] = useState({});
  const [updateId, setUpdateId] = useState();

  const getUser = async () => {
    try {
      const response = await axiosWrapper(userEndpoints.GET_USER, {}, "get");
      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (updateId) {
      getUserById();
    }
  }, [updateId]);

  const getUserById = async () => {
    try {
      const payload = {
        user_id: updateId,
      };
      const response = await axiosWrapper(
        userEndpoints.GET_USER_BY_ID,
        payload,
        "post"
      );
      setEditObject(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("editObject", editObject);

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
      accept: () => {
        setUpdateId(row.user_id);
        setIsCreateUser(true);
      },
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

  const phoneTemplate = (row) => {
    return row.mob_no && row.mob_no.trim() !== " " ? (
      row.mob_no
    ) : (
      <span style={{ display: "block", textAlign: "left", width: "100%" }}>
        -
      </span>
    );
  };

  const emailTemplate = (row) => {
    return row.email && row.email.trim() !== " " ? (
      row.email
    ) : (
      <span style={{ display: "block", textAlign: "left", width: "100%" }}>
        -
      </span>
    );
  };

  const column = [
    { id: 1, field: "user_name", header: "User name" },
    { id: 2, field: "name", header: "Display name" },
    { id: 2, field: "role_name", header: "Role" },
    { id: 3, field: "email", header: "Email", body: emailTemplate },
    { id: 4, field: "mob_no", header: "Phone no.", body: phoneTemplate },
    // { id: 5, field: "status", header: "Status", body: StatusTemplate },
    { id: 6, field: "action", header: "Actions", body: ActionTemplate },
  ];

  return (
    <>
      <Toast ref={toast} position="top-center" />
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
                onClick={() => {
                  setEditObject({});
                  setIsCreateUser(true);
                }}
              >
                <i class="ri-add-line"></i>
                <span>Add User</span>
              </Button>
            </Box>
          </Box>

          {/* table grid*/}

          <Datagrid columns={column} value={user} />

          {isCreateUser && (
            <CreateUser
              setIsCreateUser={setIsCreateUser}
              toast={toast}
              getUser={getUser}
              editObject={editObject}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default User;
