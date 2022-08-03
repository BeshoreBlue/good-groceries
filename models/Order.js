import getSavings from "./getSavings";


const Order = ({ data }) => {
    if (!data || !data.order.length) {
        return null;
    }

    const { order } = data;

    const savings = getSavings(order);

    const subtotal = order.reduce((total, currItem) => {
         return total + (currItem.price * currItem.quantity);
    }, 0).toFixed(2);

    const total = (subtotal - savings.reduce((totalSaving, currOffer) => {
        return totalSaving + currOffer.saving;
    }, 0)).toFixed(2);

    return {
        orderItems: order,
        subtotal,
        savings,
        total,
    }
};

export default Order;