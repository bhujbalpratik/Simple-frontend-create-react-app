import { combineReducers } from "@reduxjs/toolkit"

import userSilce from "./userSlice"
import themeSlice from "./theme"
import postSlice from "./postSlice"

const rootReducer = combineReducers({
  user: userSilce,
  theme: themeSlice,
  posts: postSlice,
})

export { rootReducer }
