import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.less'

type Props = {
  type: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
};
const CustomIcon: Taro.FC<Props> = (props) => {
  const { type, className, style, size, ...rest } = props;

  const setStyle = () => {
    return size ? {
      width: size,
      height: size,
    } : {};
  }

  return (
    <View className={classNames(styles.icon, className)} aria-hidden="true" style={{ ...setStyle(), ...style }} {...rest}>
      <Text className={type} />
    </View>
  );
};

export default CustomIcon;
