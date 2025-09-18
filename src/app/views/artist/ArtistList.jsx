"use client";
import Datagrid from "@/reuseableComponents/dataGrid";
import { axiosWrapper } from "@/utils/axiosWrapper";
import { showError } from "@/utils/confirmationBox";
import { artistEndpoints } from "@/utils/endpoints";
import { Box, Button, Typography } from "@mui/material";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";

const Artist = () => {
  const toast = useRef(null);

  const [artist, setArtist] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const response = await axiosWrapper(
        artistEndpoints.GET_ARTISTS,
        {},
        "get"
      );
      setArtist(response.data.artists);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (row) => {
    console.log("row", row);
    confirmDialog({
      message: "Are you sure you want to delete this role ?",
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
    console.log("executed", row.artist_id);
    confirmDialog({
      message: "Are you sure you want to edit this artist ?",
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
        setUpdateId(row.artist_id);
        window.open(`/edit-artist/${row.artist_id}`);
      },
    });
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

  const columns = [
    { id: 1, field: "artist_name", header: "Name" },
    // { id: 2, field: "role_name", header: "Role name" },
    // { id: 3, field: "menus", header: "Permissions", body: permissionsTemplate },
    // { id: 6, field: "status", header: "Status", body: StatusTemplate },
    { id: 2, field: "action", header: "Actions", body: ActionTemplate },
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
              Artist
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
              All artists
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
                <span>Bulk add artists</span>
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
                <span>Export artists</span>
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
                onClick={() => window.open("/create-artist", "_blank")}
              >
                <i class="ri-add-line"></i>
                <span>Add Artist</span>
              </Button>
            </Box>
          </Box>

          {/* table grid*/}
          <div style={{ height: 500, width: "100%" }}>
            <Datagrid value={artist} columns={columns} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Artist;
