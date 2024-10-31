import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

const BASE_URL = "http://localhost:8080/api";

export const createCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/comments/create/${data.postId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body:JSON.stringify(data.data)
        })
        const comment = await res.json()
        console.log("create comment: ", comment)
        dispatch({ type: CREATE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch: ", error)
    }
}

export const findPostCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/comments/${data.postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const comment = await res.json()
        console.log("find comment: ", comment)
        dispatch({ type: GET_POST_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch: ", error)
    }
}

export const likeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/comments/like/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const comment = await res.json()
        console.log("like comment: ", comment)
        dispatch({ type: LIKE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch: ", error)
    }
}


export const unLikeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/comments/unlike/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const comment = await res.json()
        console.log("unlike comment: ", comment)
        dispatch({ type: UNLIKE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch: ", error)
    }
}