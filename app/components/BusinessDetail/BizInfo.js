import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let styles = {

}

class BizInfo extends React.Component {
  render() {
    return (
      <View>
        <Text style={ { fontWeight: 'bold' } }>Thông tin:</Text>
        <Text>Add. NO: { this.props.biz.address }
        </Text>
        <Text>Tel: { this.props.biz.phone }
        </Text>
        <Text>Fax: { this.props.biz.fax }
        </Text>
        <Text>Website: { this.props.biz.website }
        </Text>
      </View>
      );
  }

}

export default BizInfo;