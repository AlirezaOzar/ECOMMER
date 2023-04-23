import http from "./Service";

export const signupUser = (data) => {
    return http.post("/user/register", data)
}