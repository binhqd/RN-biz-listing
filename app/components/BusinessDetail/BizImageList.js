import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions'
let width = Dimensions.get('window').width;

class BizImageList extends React.Component {
  constructor(props, context) {
    super(props, context);

    let images = [];
    images.push(require('./1.jpg'));
    images.push(require('./2.jpg'));
    images.push(require('./3.jpg'));
    images.push(require('./1.jpg'));
    images.push(require('./2.jpg'));
    images.push(require('./3.jpg'));
    images.push(require('./1.jpg'));
    images.push(require('./2.jpg'));

    this.state = {
      images,
      groups: []
    }

  }

  grouping(items, n) {
    console.log(items.length);
    let groups = [];

    while (items.length > 0) {
      groups.push(items.splice(0, n));
    }

    this.setState({groups: groups})
  }

  componentDidMount() {
    let n = 3;
    this.grouping(this.state.images, n);
  }

  render() {
    return (
      <View style={ styles.container}>
      <Swiper style={styles.wrapper} showsPagination={false}>
      {
        this.state.groups.map((group, index) => {
          return (
            <View style={ styles.slide } key={index}>
              {
                group.map((item, itemIndex) =>
                  <Image key={itemIndex} style={ styles.bizThumbnail } source={ item } />
                )
              }
            </View>
          )
        })
      }
      </Swiper>
      </View>
    )
  }
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    height: 75,
    flexDirection: 'column'
  },
  wrapper: {
    flex: 1
  },
  slide: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bizThumbnail: {
    flex: 0.28,
    height: 75
  }
}

export default BizImageList;
