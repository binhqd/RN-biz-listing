import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import CONFIG from '../../constants';

import Dimensions from 'Dimensions'
let width = Dimensions.get('window').width;

class BizImageList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      images: this.props.images,
      groups: []
    }

    this.cols = 3;
  }

  grouping(items, n) {
    let groups = [];

    while (items.length > 0) {
      groups.push(items.splice(0, n));
    }

    this.setState({groups: groups})
  }

  componentDidMount() {
    this.grouping(this.state.images, this.cols);
  }

  render() {
    return (
      <View style={ styles.container}>
        <Swiper style={styles.wrapper} showsPagination={false}>
        {
          this.state.groups.map((group, index) => {
            let images = [];
            for (let i = 0; i < this.cols; i++) {
              let item = group[i];
              if (typeof item != "undefined") {
                images.push(<Image key={i} style={ styles.bizThumbnail } source={ {uri: `${CONFIG.STATIC_URL}/${item.container}/${item.name}`} } />);
              } else {
                images.push(<Image key={i} style={ styles.bizThumbnail } source={ {uri: `http://via.placeholder.com/350x150`} } />);
              }

            }

            return (
              <View style={ styles.slide } key={index}>
                {images}
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
    flexDirection: 'column',
    padding: 0,
    margin: 0
  },
  wrapper: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  slide: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bizThumbnail: {
    // display: 'flex',
    width: (width / 3)- 5,
    height: 75
  }
}

BizImageList.propTypes = {
  images: PropTypes.array
}

BizImageList.defaultProps = {
  images: []
}

export default BizImageList;
