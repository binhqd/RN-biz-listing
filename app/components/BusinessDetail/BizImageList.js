import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class BizImageList extends React.Component {
  constructor(props, context) {
    super(props, context);

    let images = [];
    images.push(require('./1.jpg'));
    images.push(require('./2.jpg'));
    images.push(require('./3.jpg'));

    this.state = {
      images: images
    };

  }
  render() {
    return (
      <View style={ { flex: 1, flexDirection: 'row', justifyContent: 'space-around' } }>
        <Image style={ styles.bizThumbnail } source={ this.state.images[0] } />
        <Image style={ styles.bizThumbnail } source={ this.state.images[1] } />
        <Image style={ styles.bizThumbnail } source={ this.state.images[2] } />
      </View>
    )
  }
}

let styles = {
  bizThumbnail: {
    width: 100,
    height: 75
  }
}

export default BizImageList;