import Taro, { Component, Config } from '@tarojs/taro'
import { AtAvatar, AtGrid } from 'taro-ui'
import { Item } from 'taro-ui/@types/grid'
import { View, Button } from '@tarojs/components'
import './index.scss';

interface GridDataItem extends Item {
  url?: string;
}

const gridData: GridDataItem[] = [
  {
    iconInfo: {
      value: 'list',
      size: 30,
      color: '#f37a3f'
    },
    value: '列表',
    url: '/pages/list/index',
  },
  {
    iconInfo: {
      value: 'file-generic',
      size: 30,
      color: '#4fdde6'
    },
    value: '表单',
  },
  {
    iconInfo: {
      value: 'map-pin',
      size: 30,
      color: '#8ad939'
    },
    value: '地图',
  },
]

export class Welcome extends Component {
  config: Config = {
    navigationBarTitleText: '欢迎页'
  }

  handleClick = (item: GridDataItem) => {
    if (item.url) {
      Taro.navigateTo({
        url: item.url!,
      })
    }
  }

  render() {
    return (
      <View className='hero'>
        <View className='header'>
          <View className='userInfo'>
            <AtAvatar
              image='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            />
            <View className='username'>Username</View>
            <View className='lastLogin'>2020-1-16 21:52:37</View>
            <Button className='updatePassword'>修改密码</Button>
            <Button className='exit'>退出</Button>
          </View>
        </View>

        <AtGrid
          data={gridData}
          onClick={this.handleClick}
        />
      </View>
    );
  }
}

export default Welcome;
