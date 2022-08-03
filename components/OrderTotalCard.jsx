import { Text, View } from "react-native";
import styles from './../styles/card';

const OrderTotalCard = ({ order }) => {
    const { savings, subtotal, total } = order;

    const savingsList = savings?.map(saving => {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{saving.quantity} x {saving.offer}</Text>
                    <Text>-£{saving.saving.toFixed(2)}</Text>
                </View>
            )
        }
    )

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.boldText}>£{subtotal}</Text>
            </View>
            { savings?.length
                ? <View style={styles.savingsContainer}>
                    {savingsList}
                  </View>
                : null
            }
            <View style={styles.textContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>£{total}</Text>
            </View>
        </View>
    )
};

export default OrderTotalCard;