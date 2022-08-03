import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo'
import orderDataMock from "./mocks/orderDataMock";
import Order from "./models/Order";
import BillCard from "./components/BillCard";

export default function App() {
    /*
        When calling from an actual api this would be a fetch within
         useEffect, storing the data using useState. This could maybe be
         abstracted as a custom hook
     */
    const order = Order({data: orderDataMock});

    // TODO - scrollview
  return (
      <View style={styles.container}>
          <Logo />
          { order
              ? <>
                  <Text style={styles.title}>Your latest bill</Text>
                  <BillCard order={order} />
                </>
              : <Text style={styles.title}>No bills</Text>
          }
      </View>
  );
}

// Styling can be improved to be adaptive to screen size
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        margin: 10
    }
});
