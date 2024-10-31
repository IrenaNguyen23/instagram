import { SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data,signin) => async (dispatch) => {

    try {
        const res = await fetch("http://localhost:8080/signin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(data.email + ":" + data.password),
            },
        });

        if (res.ok) {
            const token = res.headers.get("Authorization");
            console.log("token:", token);

            if (token) {
                // Sử dụng hàm signin từ context
                signin(token);
                dispatch({ type: SIGN_IN, payload: token });
                console.log("signin success:", token);
                return true;
            } else {
                throw new Error("No token received");
            }
        } else {
            throw new Error("Login failed");
        }
    } catch (error) {
        console.log("signin error:", error);
        return false;
    }
}

export const signupAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        const user = await res.json();
        console.log("signup user:", user)
        dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
        console.log(error)
    }
}