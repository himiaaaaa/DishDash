/* eslint-disable no-undef, import/no-extraneous-dependencies */

// Import built-in Jest matchers
import '@testing-library/react-native/extend-expect';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-vector-icons', () => {
  return {
    MaterialCommunityIcons: jest.fn().mockImplementation(() => {
      return {
        Icon: jest.fn(),
      };
    }),
  };
});