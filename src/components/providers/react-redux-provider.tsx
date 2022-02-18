import React, { FC, ReactNode } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { store, persistor } from '../../store/config-store';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9c949f',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

interface Props {
  children: ReactNode;
}

const ReactReduxProvider: FC<Props> = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

ReactReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReactReduxProvider;
