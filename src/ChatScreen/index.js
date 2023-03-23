import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';

const {height, width} = Dimensions.get('window');

const messages = [
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there '},
  {id: 2, text: 'hi there i am here '},
  {id: 1, text: 'hi there this is really important for me '},
  {
    id: 1,
    text: 'hi there this is really important for me hi there this is really important for me  ',
  },
  {
    id: 2,
    text: 'i there this is really important for me hi there this is really important for me i there this is really important for me hi there this is really important for me i there this is really important for me hi there this is really important for me ',
  },
  {
    id: 2,
    text: 'i there this is really important for me hi there this is really important for me i there this is really important for me hi there this is really important for me i there this is really important for me hi there this is really important for me ',
  },
];

const renderItem = ({item}) => {
  return <Message id={item.id} message={item.text} />;
};

const Message = ({others, message, id}) => {
  myId = 1;
  const alignMessage = id === myId ? 'flex-end' : 'flex-start';
  const color = id === myId ? 'green' : 'grey';

  return (
    <>
      <View
        style={[
          styles.message,
          {alignSelf: alignMessage, backgroundColor: color},
        ]}>
        <Text style={{color: 'black', fontSize: 16}}>{message}</Text>
      </View>
    </>
  );
};

function ChatScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color: 'black', fontSize: 20}}>Header</Text>
        </View>
        <View style={styles.chatArea}>
          <FlatList
            inverted
            data={messages.reverse()}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.footer}>
          <Text style={{color: 'black', fontSize: 20}}>footer</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: 'yellow',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'blue',
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatArea: {
    backgroundColor: 'orange',
    flex: 9,
    padding: 5,
  },
  message: {
    maxWidth: width * 0.8,
    backgroundColor: 'green',
    marginTop: 4,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: '2%',
    minHeight: height * 0.04,
  },
});

export default ChatScreen;
