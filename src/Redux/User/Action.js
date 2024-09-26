import { REQ_USER } from "./ActionType";

export const getUserProfileAction = (data) => async (dispatch) => {
    try {
        const jwt = localStorage.getItem("token");
        
        const res = await fetch("http://localhost:8080/api/users/req", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })
        const reqUser = await res.json()
        dispatch({ type: REQ_USER, payload: reqUser });
    } catch (error) {
        console.log("catch :",error)
    }
}