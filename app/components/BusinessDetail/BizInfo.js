import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BizInfo extends React.Component {
  showBizInfo(title, content) {
    if (typeof content != 'undefined' && content) {
      return <Text>
               { title }: { content }
             </Text>
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.infoTitle }>
          Thông tin:
        </Text>
        { this.showBizInfo('Add. NO', this.props.biz.address) }
        { this.showBizInfo('Tel', this.props.biz.phone) }
        { this.showBizInfo('Fax', this.props.biz.fax) }
        { this.showBizInfo('Website', this.props.biz.website) }

      </View>
      );
  }
}

let styles = StyleSheet.create({
  infoTitle: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    marginTop: 10
  }
});

export default BizInfo;
