// import {createStore} from 'redux';
// import reducer from '../reducer/reducer';
// const store = createStore(reducer);
// export default store;

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from '../reducer/reducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

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
