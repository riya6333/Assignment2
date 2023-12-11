// import {createStore} from 'redux';
// import reducer from '../reducer/reducer';
// const store = createStore(reducer);
// export default store;

// ----persister--------

import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../reducer/authReducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store);

export {persistor, store};

// --------------------------------------------------

// import {createStore} from 'redux';
// import {combineReducers} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistReducer, persistStore} from 'redux-persist';
// import authReducer from '../reducer/authReducer';
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['authReducer'],
// };
// const reducer = combineReducers(reducer);
// const persistedReducer = persistReducer(persistConfig, authReducer);
// // Passing counterReducer to createStore
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }).concat(logger),
// });
// const persistor = persistStore(store);
// // export default store;
// export {store, persistor};
