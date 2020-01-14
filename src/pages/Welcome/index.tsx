import Taro, { Component, Config } from '@tarojs/taro'
import { AtAvatar, AtButton } from 'taro-ui'
import { View, Button } from '@tarojs/components'
import './index.less';

export class Welcome extends Component {
  config: Config = {
    navigationBarTitleText: '欢迎页'
  }

  render() {
    return (
      <View className='hero'>
        <View className='header'>
          <View className='userInfo'>
            <AtAvatar
              image='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            />
            <View className='username'>admin</View>
            <View className='lastLogin'>2019-8-14 09:47:07</View>
            <Button className='updatePassword'>修改密码</Button>
            <Button className='exit'>退出</Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Welcome;
