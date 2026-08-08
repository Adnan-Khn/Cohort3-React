import { api } from "../../../config/api";

export const loginApi = async (credentials) => {
  try {
    const res = await api.post("/auth/login", credentials);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (err) {
    console.log("Error from Auth API | Login : ", err);
  }
};
export const hyderateApi = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Pass JWT via Authorization header
      },
    });
    return res.data;
  } catch (error) {
    console.log("Error from Auth Api | Hyderate", error);
  }
};
