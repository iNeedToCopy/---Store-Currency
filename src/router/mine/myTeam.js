import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  SectionList,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight
} from 'react-native';
import HeaderTitle from "../../components/header";
import Toast from "../../components/toast";

export default class MyTeam extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      actionBar: [{
        title: '一级',
        active: true
      }, {
        title: '二级',
        active: false
      },]
    }
  }
  componentDidMount() {
    HttpUtil.GET('/my/detail').then(({ data }) => {
    })
  }
  goBack = () => {
    this.props.navigation.goBack();
  }
  //切换级数
  changeActive(i) {
    this.state.actionBar.map((m, k) => {
      if (i == k) {
        m.active = true;
      } else {
        m.active = false;
      }
    });
    this.setState({
      actionBar: this.state.actionBar.concat()
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    const { actionBar } = this.state;
    return (
      <View style={{ flex: 1, height: HEIGHT, backgroundColor: '#fafafa', paddingTop: StatusBar.currentHeight + SCALE(88) }}>
        <Toast ref='toast'></Toast>
        <HeaderTitle
          title={'我的团队'}
          headerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0 }}
          solid={true}
          titleStyle={{ color: '#333' }}
          _goBack={this.goBack}
        />
        <View style={styles.topBar}>
          {actionBar.map((e, i) =>
            <TouchableOpacity
              key={'team' + i}
              activeOpacity={0.7}
              style={[styles.bars, e.active ? styles.activeBar : {}]}
              onPress={() => this.changeActive(i)}>
              <Text style={[styles.barText, e.active ? styles.activeText : {}]}>{e.title}</Text>
            </TouchableOpacity>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#fff',
    height: SCALE(80),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bars: {
    width: SCALE(120),
    height: SCALE(48),
    ...layout.margin(0, SCALE(20)),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeBar: {
    backgroundColor: '#26beff'
  },
  barText: {
    fontSize: SCALE(32),
    color: '#737373'
  },
  activeText: {
    color: '#fff'
  }
})