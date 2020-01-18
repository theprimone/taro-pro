import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtNavBar } from 'taro-ui'
import './index.scss'

export default class List extends Component {
  render() {
    return (
      <View>
        <AtNavBar
          fixed
          title='列表'
          leftIconType='chevron-left'
          onClickLeftIcon={() => Taro.navigateBack()}
        />
        <View className='body'>
          <AtList>
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </View>
      </View>
    )
  }
}
