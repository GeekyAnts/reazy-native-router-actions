import { Actions as RouterActions } from 'react-native-router-flux';

export default function() {
  return function(serviceName) {
    return RouterActions;
  }
}
