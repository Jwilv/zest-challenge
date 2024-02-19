import { NativeModules as RNNativeModules } from 'react-native';

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};

global.fetch = require('node-fetch');