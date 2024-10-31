import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "../Auth/Reducer";
import { UserReducer } from "../User/Reducer";
import { thunk } from "redux-thunk";
import { PostReducer } from "../Post/Reducer";
import { CommentReducer } from "../Comment/Reducer";
import { StoryReducer } from "../Story/Reducer";

const rootReducers=combineReducers({
    auth:AuthReducer,
    user:UserReducer,
    post:PostReducer,
    comment:CommentReducer,
    story:StoryReducer
})
export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));