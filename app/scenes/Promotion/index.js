import React, { Component } from 'react';
import { List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image, Picker, ScrollView } from 'react-native';
import { PromotionListItem } from '../../components/Promotion';
import { LayoutWithSideBar } from '../../components/layouts';
import { connect } from 'react-redux';
import { Promotions } from '../../api';

class Promotion extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Tin Khuyến Mãi',
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

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      ds,
      dataSource: ds.cloneWithRows([]),
      selectedCategoryId: ''
    };
  }

  componentDidMount() {
    Promotions.actions.list.request()
    .then(response => {
      this.setState({
        dataSource: this.state.ds.cloneWithRows(response)
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  onFilterChange(itemValue, itemIndex) {
    this.setState({
      selectedCategoryId: itemValue
    });

    let catID = '.*';
    if (itemValue) {
      catID = itemValue;
    }

    console.log(catID);

    Promotions.actions.filterByCat.request({catID: catID, name: ''})
    .then(response => {
      this.setState({
        dataSource: this.state.ds.cloneWithRows(response)
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <LayoutWithSideBar navigation={ this.props.navigation }>
        <View style={ styles.container }>
          <Picker
            selectedValue={this.state.selectedCategoryId}
            onValueChange={this.onFilterChange.bind(this)}
            >
            <Picker.Item label={'Tất cả ngành nghề'} value={''}></Picker.Item>
            {
              this.props.categories.map(category => {
                return (
                  <Picker.Item key={category.id} label={category.name} value={category.id}></Picker.Item>
                )
              })
            }
          </Picker>
          <ScrollView>
          {
            this.state.ds.getRowCount ?
            (<ListView contentContainerStyle={ styles.list }
                      dataSource={ this.state.dataSource }
                      enableEmptySections
                      renderRow={ (rowData) => {
                                    let imgSource = require('../../dump/promotion.jpg');
                                    return <PromotionListItem promotion={ rowData }
                                                             image={ imgSource }
                                                             navigation={ this.props.navigation } />
                                                           } } />)
            :
            (<View>
              <Text>Không tìm thấy kết quả</Text>
            </View>)
          }
          </ScrollView>
        </View>
      </LayoutWithSideBar>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  listPromotions: {
    flex: 1
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Promotion);
