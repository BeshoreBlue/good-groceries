import OrderItemsList from "./OrderItemsList";
import OrderTotalCard from "./OrderTotalCard";
import { View } from 'react-native';
import styles from './../styles/card';

const BillCard = ({ order }) => {
    if (!order) {
        return null;
    }
    return (
         <View style={styles.card}>
             <OrderItemsList items={order.orderItems} />
             <OrderTotalCard order={order} />
         </View>
    )
};

export default BillCard;