import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native-web'

// Styles
const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    // fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  },
  body: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  row: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  column: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
    box: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1
  },
  scrollViewContainer: {
    height: 400,
    width: 300
  },
  scrollViewStyle: {
    borderWidth: 1
  },
  scrollViewContentContainerStyle: {
    padding: 10
  }
})

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
// const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
const App = () => (
  <Card>
    <Title>App Card apart</Title>
    <View style={styles.body}>
      <View style={styles.row}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
          <View style={styles.scrollViewContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollViewContentContainerStyle}
              onScroll={e => console.log('ScrollView.onScroll', e)}
              scrollEventThrottle={1} // 1 event per second
              style={styles.scrollViewStyle}
            >
              {Array.from({ length: 50 }).map((item, i) => (
                <View key={i} style={styles.box}>
                  <Text>{i}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
    </View>
  </Card>
)

export default App;
