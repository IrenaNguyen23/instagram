import { FOLLOW_USER, GET_USER_BY_USER_IDS, GET_USER_BY_USERNAME, POPULAR_USER, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";

const initialValues = {
    reqUser: null,
    findByUsername: null,
    findUserByIds: [],
    followUser: null,
    unFollowUser: null,
    searchUser: null,
    updateUser: null,
    popularUser:null


}
export const UserReducer = (store = initialValues, { type, payload }) => {
    if (type === REQ_USER) {
        return { ...store, reqUser: payload }
    } else if (type === GET_USER_BY_USERNAME) {
        return { ...store, findByUsername: payload }
    } else if (type === GET_USER_BY_USER_IDS) {
        return { ...store, findUserByIds: payload }
    } else if (type === FOLLOW_USER) {
        return { ...store, followUser: payload }
    } else if (type === UNFOLLOW_USER) {
        return { ...store, unFollowUser: payload }
    } else if (type === SEARCH_USER) {
        return { ...store, searchUser: payload }
    } else if (type === UPDATE_USER) {
        return { ...store, updateUser: payload }
    }else if(type === POPULAR_USER){
        return { ...store, popularUser: payload }
    }
    return store;
}