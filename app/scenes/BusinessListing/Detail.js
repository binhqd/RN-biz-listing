import React, { Component } from 'react';
import { SideMenu, List, ListItem, Icon, SearchBar, Button } from 'react-native-elements';
import { StyleSheet, Text, View, ListView, Image, ScrollView } from 'react-native';
import { BizInfo, BizImageList, BizGMap } from '../../components/BusinessDetail';
import { LayoutWithSideBar } from '../../components/layouts';
import CONFIG from '../../constants';

class BusinessDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
      headerRight: (
      <Icon
            name='bars'
            type='font-awesome'
            color='#000'
            iconStyle={{
              marginRight: 20
            }}
            onPress={ () => state.params.handleMenuToggle() } />

      )
    };
  };

  constructor(props, context) {
    super(props, context);
    let imgSources = require('../../dump/logos');

    const {params} = this.props.navigation.state;

    this.state = {
      biz: {
        ...params,
        //address: '35 Nguyen Tat Thanh, Q. Thanh Khe, TP. Đà Nẵng',
        //phone: '0236 454432',
        //fax: '0236 454433',
        //website: 'http://theircompany.com',
        lat: 45,
        lng: 45
      },
      images: imgSources
    };
  }

  render() {
    let imgSource = this.state.images[Math.floor(Math.random() * this.state.images.length)];
    if (this.state.biz.logo) {
      imgSource = {uri:`${CONFIG.STATIC_URL}/biz-logos/${this.state.biz.logo}`};
    }

    const {navigate} = this.props.navigation;
    return (
      <LayoutWithSideBar navigation={ this.props.navigation }>
        <ScrollView>
          <View style={ {
                          flex: 1,
                          flexDirection: 'column',
                          backgroundColor: '#fff',
                          padding: 20
                        } }>
            <View>
              <Text style={ styles.bizTitle }>
                { this.state.biz.name }
              </Text>
            </View>
            <View style={ styles.row }>
              <View>
                <Image style={ styles.thumb } source={ imgSource } />
              </View>
              <View style={ {
                              flex: 1,
                              marginLeft: 5
                            } }>
                <Text style={ styles.description }>
                  { this.state.biz.description }
                </Text>
              </View>
            </View>
            <BizGMap lat={ 45 } lng={ 35 } />
            <BizImageList images={this.state.biz.images}/>
            <BizInfo biz={ this.state.biz } />
            <View style={ styles.panelButtons }>
              <Button buttonStyle={ styles.btnAction }
                      raised
                      icon={ {
                               name: 'globe',
                               type: 'font-awesome'
                             } }
                      title='Website' />
            </View>
          </View>
        </ScrollView>
      </LayoutWithSideBar>
      );
  }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
    marginBottom: 0,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  thumb: {
    width: 64,
    height: 64
  },
  bizTitle: {
    fontWeight: 'bold'
  },
  text: {
    margin: 5,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 14
  },
  description: {
    margin: 5
  },
  btnAction: {
    width: 100,
    borderRadius: 5,
    height: 30
  },
  panelButtons: {
    marginBottom: 10,
    marginTop: 10
  }
});

export default BusinessDetail;
