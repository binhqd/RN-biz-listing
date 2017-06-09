import React, { Component } from 'react';
import { List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image, Picker, ScrollView } from 'react-native';
import { PromotionListItem } from '../../components/Promotion';
import { LayoutWithSideBar } from '../../components/layouts';
import { connect } from 'react-redux';
import { Categories } from '../../api';

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

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: this.ds.cloneWithRows([]),
      selectedCategoryId: ''
    };
  }

  componentDidMount() {
    // this.props.dispatch(Categories.actions.list()).then(response => {
    //   this.props.dispatch({
    //     type: 'CATEGORIES_RECEIVED',
    //     categories: response.data
    //   });
    //
    //   this.setState({
    //     dataSource: this.ds.cloneWithRows(response.data),
    //     originalData: response.data
    //   });
    // });

    this.setState({
      dataSource: this.ds.cloneWithRows([
        {
          title: 'test',
          description: 'some description some description some description some description some description some description some description some description some description some description some description some description some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },{
          title: 'test',
          description: 'some description',
          date: '2017-06-15'
        },
      ]),
      originalData: []
    });
  }

  onFilterChange(itemValue, itemIndex) {
    this.setState({
      selectedCategoryId: itemValue
    })
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
            this.ds.getRowCount ?
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
