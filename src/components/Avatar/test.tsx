import classNames from 'classnames';
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less';

// ref: https://github.com/ant-design/ant-design/blob/master/components/avatar/index.tsx
export interface AvatarProps {
  /** Shape of avatar, options:`circle`, `square` */
  shape?: 'circle' | 'square';
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size?: 'large' | 'small' | 'default' | number;
  /** Src of image avatar */
  src?: string;
  /** Type of the Icon to be used in avatar */
  icon?: string | React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  alt?: string;
  /* callback when img load error */
  /* return false to prevent Avatar show default fallback behavior, then you can do fallback by your self */
  onError?: () => boolean;
}

export interface AvatarState {
  scale: number;
  mounted: boolean;
  isImgExist: boolean;
}

export default class Avatar extends Component<AvatarProps, AvatarState> {
  renderAvatar = () => {
    const { src } = this.props;
    return (
      <View>
        <Image src={src!} />
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.renderAvatar()}
      </View>
    )
  }
}
