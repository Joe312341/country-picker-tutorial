import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

// components / reducers
import AppLayout from '../layouts/AppLayout';
import rootReducer from '../reducers';

// initial store setup
const configureStore = (initialState) => {
  const enhancers = compose(applyMiddleware(logger));
  return createStore(rootReducer, initialState, enhancers);
};

// create store
const store = configureStore({});

// wrap rest of the App in a provider
const AppContainer = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default AppContainer;
