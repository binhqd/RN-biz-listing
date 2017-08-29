import React, { Component } from 'react';
import { List, ListItem, Icon, SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, Image } from 'react-native';
import { CategoryListItem } from '../../components/CategoryListing';
import { LayoutWithSideBar } from '../../components/layouts';
import { connect } from 'react-redux';
import { Categories } from '../../api';

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    return {
      title: 'Doanh Nghiệp TP Đà Nẵng',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: (
      <Icon name='bars'
        type='font-awesome'
        color='#eee'
        underlayColor='#e6e7e9'
        iconStyle={ {
          // marginRight: 20
        } }
        onPress={ () => state.params.handleMenuToggle() } />
      )
    };
  };

  constructor(props, context) {
    super(props, context);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });



    let imgSources = require('../../dump/logos');
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
      images: imgSources
    };

  }

  componentDidMount() {
    this.props.dispatch(Categories.actions.list()).then(response => {
      this.props.dispatch({
        type: 'CATEGORIES_RECEIVED',
        categories: response.data
      });

      this.setState({
        dataSource: this.ds.cloneWithRows(response.data),
        originalData: response.data
      });
    });
  }

  filterCategories(searchTerm) {
    let categories = this.state.originalData;
    let filteredCategories = categories.filter(item => {
      return (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)
    });

    this.setState({
      dataSource: this.ds.cloneWithRows(filteredCategories)
    });

  }

  render() {
    return (
      <LayoutWithSideBar navigation={ this.props.navigation }>
        <View style={ styles.homeContainer }>
          <SearchBar round
            inputStyle={styles.searchInput}
            containerStyle={styles.searchContainer}
            onChangeText={this.filterCategories.bind(this)}
            lightTheme={true}
          placeholder='Tìm kiếm lĩnh vực doanh nghiệp' />
          {
            this.ds.getRowCount ?
              (<ListView contentContainerStyle={ styles.list }
                dataSource={ this.state.dataSource }
                enableEmptySections
                renderRow={ (rowData) => {
                  let imgSource = this.state.images[Math.floor(Math.random() * this.state.images.length)];
                  return <CategoryListItem category={ rowData }
                    image={ imgSource }
                    navigation={ this.props.navigation } />
                } } />)
            :
            (<View>
              <Text>No Results</Text>
            </View>)
          }


        </View>
      </LayoutWithSideBar>
      );
  }
}

var styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e7e9'
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#e6e7e9'
  },
  searchInput: {
    backgroundColor: '#fff'
  },
  searchContainer: {
    backgroundColor: '#e6e7e9'
  },
  headerStyle: {
    backgroundColor: '#109d58',
    paddingRight: 20
  },
  headerTitleStyle: {
    color: '#eee'
  }
});

export default connect()(Home);
