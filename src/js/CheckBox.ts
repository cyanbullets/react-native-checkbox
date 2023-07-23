import { Platform } from 'react-native';
import IOSCheckBox from './CheckBox.ios';
import AndroidCheckBox from './CheckBox.android';

const CheckBox = Platform.OS === 'ios' ? IOSCheckBox : AndroidCheckBox;

export default CheckBox;