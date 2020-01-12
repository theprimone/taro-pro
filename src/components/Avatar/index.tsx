import classNames from 'classnames';
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import CustomIcon from '../CustomIcon';
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
  static defaultProps = {
    shape: 'circle' as AvatarProps['shape'],
    size: 'default' as AvatarProps['size'],
  };

  state = {
    scale: 1,
    mounted: false,
    isImgExist: true,
  };

  private avatarNode: HTMLElement | undefined;

  private avatarChildren: HTMLElement | undefined;

  private lastChildrenWidth: number | undefined;

  private lastNodeWidth: number | undefined;

  componentDidMount() {
    console.log('mount Avatar')
    this.setScale();
    this.setState({ mounted: true });
  }

  componentDidUpdate(prevProps: AvatarProps) {
    this.setScale();
    if (prevProps.src !== this.props.src) {
      this.setState({ isImgExist: true, scale: 1 });
    }
  }

  setScale = () => {
    if (!this.avatarChildren || !this.avatarNode) {
      return;
    }
    const childrenWidth = this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale
    const nodeWidth = this.avatarNode.offsetWidth;
    // denominator is 0 is no meaning
    if (
      childrenWidth === 0 ||
      nodeWidth === 0 ||
      (this.lastChildrenWidth === childrenWidth && this.lastNodeWidth === nodeWidth)
    ) {
      return;
    }
    this.lastChildrenWidth = childrenWidth;
    this.lastNodeWidth = nodeWidth;
    // add 4px gap for each side to get better performance
    this.setState({
      scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1,
    });
  };

  handleImgLoadError = () => {
    const { onError } = this.props;
    const errorFlag = onError ? onError() : undefined;
    if (errorFlag !== false) {
      this.setState({ isImgExist: false });
    }
  };

  /**
   * this.props 不支持使用 rest property 语法，请把每一个 prop 都单独列出来
   */
  renderAvatar = () => {
    const {
      shape,
      size,
      src,
      icon,
      className,
      style,
    } = this.props;

    const { isImgExist, scale, mounted } = this.state;

    const prefixCls = 'avatar';

    const sizeCls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
    });


    const classString = classNames(prefixCls, className, sizeCls, {
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-image`]: src && isImgExist,
      [`${prefixCls}-icon`]: icon,
    });

    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
          width: size,
          height: size,
          lineHeight: size,
          fontSize: icon ? size / 2 : 18,
        }
        : {};

    const { children } = this.props;
    // ref: https://github.com/NervJS/taro/issues/3663#issuecomment-508311459
    let renderChildren: any = null;
    let childrenNode: any = null;
    if (src && isImgExist) {
      renderChildren = <Image src={src} onError={this.handleImgLoadError} />;
    } else if (icon) {
      if (typeof icon === 'string') {
        renderChildren = <CustomIcon type={icon} />;
      } else {
        renderChildren = icon;
      }
    } else {
      childrenNode = this.avatarChildren;
      if (childrenNode || scale !== 1) {
        const transformString = `scale(${scale}) translateX(-50%)`;
        const childrenStyle: React.CSSProperties = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString,
        };

        const sizeChildrenStyle: React.CSSProperties =
          typeof size === 'number'
            ? {
              lineHeight: size,
            }
            : {};
        renderChildren = (
          <View
            className={`${prefixCls}-string`}
            ref={(node: HTMLElement) => (this.avatarChildren = node)}
            style={{ ...sizeChildrenStyle, ...childrenStyle }}
          >
            {children}
          </View>
        );
      } else {
        const childrenStyle: React.CSSProperties = {};
        if (!mounted) {
          childrenStyle.opacity = 0;
        }

        renderChildren = (
          <View
            className={`${prefixCls}-string`}
            style={{ opacity: 0 }}
            ref={(node: HTMLElement) => (this.avatarChildren = node)}
          >
            {children}
          </View>
        );
      }
    }
    return (
      <View
        style={{ ...sizeStyle, ...style }}
        className={classString}
        ref={(node: HTMLElement) => (this.avatarNode = node)}
      >
        {renderChildren}
      </View>
    );
  };

  /**
   * 以 render 开头的类函数必须返回 JSX，否则会导致渲染失败。如果是为了渲染字符串，建议更名
   */
  render() {
    return (
      <View>
        {this.renderAvatar()}
      </View>
    );
  }
}
