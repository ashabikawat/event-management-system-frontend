export const showError = (msg) => ({
  severity: "error",
  summary: "Error",
  detail: msg,
  sticky: true,
});

export const showSuccess = (msg) => ({
  severity: "success",
  summary: "Success",
  detail: msg,
  sticky: true,
});
