import { FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORY } from "./ActionType";

const BASE_API = "http://localhost:8080/api";

export const findFollowingUserStory = (data) => async (dispatch) => {
    const res = await fetch(
        `${BASE_API}/stories/${data.userId}`,
        {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        }
    );
    const stories = await res.json();
    dispatch({ type: FETCH_FOLLOWING_USER_STORY, payload: stories })
};

export const findStoryByUserId = (data) => async (dispatch) => {
    try {
        const res = await fetch(
            `${BASE_API}/stories/${data.userId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.jwt
                },
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`); // Ném lỗi nếu không phải 200
        }

        const stories = await res.json();
        console.log("Stories fetched successfully:", stories); // Kiểm tra phản hồi từ server
        dispatch({ type: FETCH_USER_STORY, payload: stories });
    } catch (error) {
        console.log("Error fetching stories:", error); // Ghi nhận lỗi
    }
};
