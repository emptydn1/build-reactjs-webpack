import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
// import logger from "redux-logger";
import { persistStore } from "redux-persist";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

// test saga
// const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middleWares = [thunk];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return { store, persistor: persistStore(store) };
};

export default configureStore;
