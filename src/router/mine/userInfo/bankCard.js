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
import NavigationService from '../../../components/NavigationService';
import HeaderTitle from "../../../components/header";
import Toast from "../../../components/toast";

export default class BankCard extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    HttpUtil.GET('/my/detail').then(({ data }) => {
    })
  }
  goBack = () => {
    this.props.navigation.goBack();
  }
  render() {
    const { navigate } = this.props.navigation;
    const { userInfo } = this.state;
    return (
      <View style={{ flex: 1, height: HEIGHT, backgroundColor: '#fafafa', paddingTop: StatusBar.currentHeight + SCALE(88) }}>
        <Toast ref='toast'></Toast>
        <HeaderTitle
          title={'银行卡信息'}
          headerStyle={{ backgroundColor: '#fff' }}
          solid={true}
          titleStyle={{ color: '#333' }}
          _goBack={this.goBack}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({})