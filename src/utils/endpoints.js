const url = "http://localhost:4000";

export const login = {
  LOGIN: url + "/user/login",
};

export const userEndpoints = {
  GET_USER: url + "/user/getUsers",
  CREATE_USER: url + "/user/createUser",
  GET_USER_BY_ID: url + "/user/getUserById",
  UPDATE_USER: url + "/user/updateUser",
};

export const roleEndpoints = {
  GET_ROLES: url + "/role/getRoles",
  CREATE_ROLES: url + "/role/createRole",
};

export const menuEndpoints = {
  GET_MENUS: url + "/role/getMenus",
};
