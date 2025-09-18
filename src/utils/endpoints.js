export const url = "http://localhost:4000";

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
  GET_ROLE_BY_ID: url + "/role/getRole",
  UPDATE_ROLE: url + "/role/updateRole",
};

export const menuEndpoints = {
  GET_MENUS: url + "/role/getMenus",
};

export const artistEndpoints = {
  CREATE_ARTIST: url + "/artist/createArtist",
  GET_ARTISTS: url + "/artist/getArtist",
  GET_ARTIST_BY_ID: url + "/artist/getArtistById",
};

export const categoryEndpoints = {
  CREATE_CATEGORY: url + "/category/createCategory",
};
