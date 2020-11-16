import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMIddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMIddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
