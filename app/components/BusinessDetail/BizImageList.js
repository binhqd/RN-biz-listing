import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

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
      <Swiper style={styles.wrapper} showsPagination={false} height={75}>
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
    )
  }
}

let styles = {
  wrapper: {
    flex: 1,
    height: 75,
    alignSelf: 'stretch'
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bizThumbnail: {
    width: 100,
    height: 75
  }
}

export default BizImageList;
