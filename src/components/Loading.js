import { Colors } from '../constants/Constants';
import { MaterialIndicator } from 'react-native-indicators';
import React from 'react';

const Loading = () => {
  return (
    <MaterialIndicator color={Colors.warning} />
  )
}

export default Loading