import { REQ_USER } from "./ActionType";

const initialValues = {
    reqUser: null,
}
export const UserReducer = (store = initialValues, { type, payload }) => {
    if (type === REQ_USER) {
        return { ...store, reqUser: payload }
    }
    return store;
}