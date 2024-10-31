import { FOLLOW_USER, GET_USER_BY_USER_IDS, GET_USER_BY_USERNAME, POPULAR_USER, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";
const BASE_URL = "http://localhost:8080/api"

export const getUserProfileAction = (jwt) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/users/req`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })
        const reqUser = await res.json()
        console.log("reqUse:", reqUser)
        dispatch({ type: REQ_USER, payload: reqUser });
    } catch (error) {
        console.log("catch :", error)
    }
}

export const findUserByUsernameAction = (data) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/users/username/${data.username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.jwt
        }
    })
    const user = await res.json()
    console.log("find by user name: ", user)
    dispatch({ type: GET_USER_BY_USERNAME, payload: user });
}

export const findUserByUserIdsAction = (data) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/users/userid/${data.userIds}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.jwt
        }
    })
    const user = await res.json()
    console.log("find by user id: ", user)
    dispatch({ type: GET_USER_BY_USER_IDS, payload: user });
}

export const followUserAction = (data) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/users/follow/${data.userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.jwt
        }
    })
    const user = await res.json()
    console.log("follow user: ", user)
    dispatch({ type: FOLLOW_USER, payload: user });
}

export const unFollowUserAction = (data) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/users/unfollow/${data.userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.jwt
        }
    })
    const user = await res.json()
    console.log("unfollow user: ", user)
    dispatch({ type: UNFOLLOW_USER, payload: user });
}

export const searchUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/users/search?q=${data.query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const user = await res.json()
        console.log("search user: ", user)
        dispatch({ type: SEARCH_USER, payload: user });
    } catch (error) {
        console.log("catch error: ",error)
    }
}

export const editUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/users/account/edit`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body:JSON.stringify(data.data)
        })
        const user = await res.json()
        console.log("update user: ", user)
        dispatch({ type: UPDATE_USER, payload: user });
    } catch (error) {
        console.log("catch error: ",error)
    }
}

export const getPopularUser = (jwt) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/users/popular`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            },
        })
        const user = await res.json()
        console.log("popular user: ", user)
        dispatch({ type: POPULAR_USER, payload: user });
    } catch (error) {
        console.log("catch error: ",error)
    }
}