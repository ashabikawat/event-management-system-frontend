"use client";
import { axiosWrapper } from "@/utils/axiosWrapper";
import { showError, showSuccess } from "@/utils/confirmationBox";
import { artistEndpoints } from "@/utils/endpoints";
import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";

const CreateArtist = () => {
  const toast = useRef(null);
  const [formValues, setFormValues] = useState({
    artistName: "",
    artistDescription: "",
    artistImages: [],
  });

  const [errors, setErrors] = useState({});

  const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const saveArtist = async () => {
    // console.log("formvalues", formValues);

    const formData = new FormData();
    formData.append("artist_name", formValues.artistName);
    formData.append("artist_description", formValues.artistDescription);

    formValues.artistImages?.forEach((file) =>
      formData.append("artist_image", file)
    );

    try {
      const response = await axiosWrapper(
        artistEndpoints.CREATE_ARTIST,
        formData,
        { "Content-Type": "multipart/form-data" }
      );

      if (response.data.status === 200) {
        toast.current.show(showSuccess(response.data.message));
        setFormValues({
          artistName: "",
          artistDescription: "",
          artistImages: [],
        });
        setSelectedImagesPreview(null);
      }
    } catch (error) {
      console.log(error);
      if (error) {
        toast.current.show(showError(error.response.data.message));
        setFormValues({
          artistName: "",
          artistDescription: "",
          artistImages: [],
        });
        setSelectedImagesPreview(null);
      }
    }
  };

  const handleUploadImage = (e) => {
    const files = Array.from(e.target.files);
    const newPreviewImages = files?.map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
    }));
    setSelectedImagesPreview((prev) => ({ ...prev, newPreviewImages }));
    setFormValues((prev) => ({ ...prev, artistImages: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    const { artistName, artistDescription } = formValues;

    if (!artistName) {
      newError.artistName = "Artist name is required";
    }

    if (!artistDescription) {
      newError.artistDescription = "Artist description is required";
    }

    setErrors(newError);

    if (!Object.keys(newError)?.length > 0) {
      saveArtist();
    }
  };

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          paddingY: "16px",
          overflow: "auto",
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
              Create Artist
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            padding: "16px",
            minHeight: "500px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              flexGrow: 1,
            }}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <label
                      style={{
                        color: "#8D8D8D",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Artist images <span style={{ color: "red" }}>*</span>
                    </label>
                    <Box
                      sx={{
                        border: "2px  dashed #ccc",
                        height: "250px",
                        width: "100%",
                        p: 4,
                        cursor: "pointer",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        bgcolor: "#FAFAFA",
                        mt: "12px",
                      }}
                      onClick={() =>
                        document.getElementById("image-input").click()
                      }
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="image-input"
                        multiple
                        accept="image/*"
                        onChange={handleUploadImage}
                      />
                      <CloudUpload
                        sx={{
                          fontSize: "32px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{
                          fontFamily: "inherit",
                        }}
                      >
                        Click to upload images
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        gap: "20px",
                        marginTop: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      {selectedImagesPreview?.newPreviewImages?.map((f) => (
                        <Box>
                          <Image
                            src={f.url}
                            height={150}
                            width={150}
                            alt="image"
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    mt: "10px",
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <label
                        style={{
                          color: "#8D8D8D",
                          marginBottom: "10px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Artist name <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        name="artistName"
                        value={formValues.artistName}
                        onChange={handleChange}
                        sx={{
                          borderRadius: "10px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // applies to the outer border
                            bgcolor: "#FAFAFA",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px", // ensures the outline itself has rounded corners
                          },
                        }}
                        error={errors.artistName}
                        helperText={errors.artistName}
                      />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl fullWidth>
                      <label
                        style={{
                          color: "#8D8D8D",
                          marginBottom: "10px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Artist description{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        name="artistDescription"
                        value={formValues.artistDescription}
                        onChange={handleChange}
                        sx={{
                          borderRadius: "10px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // applies to the outer border
                            bgcolor: "#FAFAFA",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px", // ensures the outline itself has rounded corners
                          },
                        }}
                        error={errors.artistDescription}
                        helperText={errors.artistDescription}
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              fontFamily: "inherit",
            }}
          >
            Reset
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "inherit",
              }}
              onClick={handleSubmit}
            >
              Create Artist
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateArtist;
