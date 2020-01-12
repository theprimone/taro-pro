import Taro, { Component, Config } from '@tarojs/taro'
import Avatar from '../../components/Avatar'
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
            <Avatar
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              // shape='square'
              // size={100}
              style={{ border: '1px solid #dfdfdf' }}
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
