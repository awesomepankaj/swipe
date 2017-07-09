import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://s-media-cache-ak0.pinimg.com/originals/6f/9c/c7/6f9cc7f27e8dba1d4f57ca9fa60bfc4d.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://s-media-cache-ak0.pinimg.com/originals/6c/2f/f1/6c2ff122b867292548328c26749e6cca.jpg' },
  { id: 3, text: 'Card #3', uri: 'https://s-media-cache-ak0.pinimg.com/originals/be/c0/c4/bec0c4d7c0341c41f275f27d30a8f197.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://s-media-cache-ak0.pinimg.com/originals/d9/8b/8c/d98b8c02bd378b91712dd648e2701cac.jpg' }
];

export default class App extends React.Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          Bhaiya ji kese ho app
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor='#03A9F4'
          title="View Now"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          {"There's no more content here!"}
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
