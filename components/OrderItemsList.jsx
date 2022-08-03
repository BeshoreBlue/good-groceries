import { Text, View } from 'react-native';
import styles from './../styles/card';

const OrderItemsList = ({ items }) => {
 return items.map(item => {
     return (
         <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.quantity} x {item.product}</Text>
            <Text style={styles.text}>£{item.price.toFixed(2)}</Text>
         </View>
     )
 })
};

export default OrderItemsList;