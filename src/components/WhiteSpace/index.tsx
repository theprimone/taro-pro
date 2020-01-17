import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

export interface WhiteSpaceProps {
  className?: string;
  style?: React.CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const WhiteSpace: Taro.FC<WhiteSpaceProps> = (props) => {
  const { size = 'md', style, className} = props;
  const wrapCls = classNames('custom-whitespace', `custom-whitespace--${size}`, className);

  return (
    <View
      style={style}
      className={wrapCls}
    />
  )
}

export default WhiteSpace
