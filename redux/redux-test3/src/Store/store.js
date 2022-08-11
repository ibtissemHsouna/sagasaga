import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware,createStore} from "redux";
import rootReducer from "../reducers/RootReducer";
import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
    rootReducer,
      composeWithDevTools(applyMiddleware(logger)));
    return store;
  }