import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducer from "./slices/adminSlice.js";
import alertReducer from "./slices/alertSlice.js";
import authReducer from "./slices/authSlice.js";
import creatorReducer from "./slices/creatorSlice.js";
import discSlice from "./slices/discSlice.js";
import exploreSlice from "./slices/exploreSlice.js";
import interestSlice from "./slices/interestSlice.js";
import inviteReducer from "./slices/inviteSlice";
import onetSlice from "./slices/onetSlice.js";
import profileReducer from "./slices/profileSlice.js";
import resumeReducer from "./slices/resumeSlice.js";
import surveySlice from "./slices/surveySlice.js";
import unifiedRecordSlice from "./slices/unifiedRecordSlice.js";
import userDetailsSlice from "./slices/userDetailsSlice.js";
import userSlice from "./slices/userSlice.js";
import zylaSlice from "./slices/zylaSlice.js";
import likeSlice from "./slices/likeSlice.js";
import ratingSlice from "./slices/ratingSlice.js";
import userHistorySlice from "./slices/userHistory.js";
import playlistSlice from "./slices/playlistSlice.js";

const persistConfig = {
  key: "user",
  version: 1,
  storage,
};

// Combine all your reducers into a root reducer
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  alert: alertReducer,
  admin: adminReducer,
  invite: inviteReducer,
  profile: profileReducer,
  creator: creatorReducer,
  onet: onetSlice,
  user: userSlice,
  zyla: zylaSlice,
  survey: surveySlice,
  unifiedRecord: unifiedRecordSlice,
  userDetails: userDetailsSlice,
  resume: resumeReducer,
  disc: discSlice,
  interest: interestSlice,
  explore: exploreSlice,
  like: likeSlice,
  rating: ratingSlice,
  history: userHistorySlice,
  playlist: playlistSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: {},
});

const persistor = persistStore(store);

export { store, persistor };