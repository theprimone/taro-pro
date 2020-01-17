import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import WhiteSpace from '@/components/WhiteSpace'

export default class extends Taro.Component {
  state = {
    value: ''
  }

  handleChange(value) {
    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(event)
  }

  onReset(event) {
    console.log(event)
  }

  render() {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <WhiteSpace />
        <AtButton formType='submit'>提交</AtButton>
        <WhiteSpace />
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}
