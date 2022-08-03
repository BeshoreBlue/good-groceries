const getSavings = ( order ) => {
    if (!order || !order.length) {
        return [];
    }

    /* Storing the offer conditions as a separate array and comparing with order data
    would be more robust and maintainable. Doubly so if offers change regularly and/or
    are pulled from an api. */
    const hasSoup = order.find(item => item.product === 'soup');

    return order.map((item) => {
        if (item.product === 'cheese' && item.quantity > 1) {
            // Only applies every two cheeses
            const quantity = Math.floor(item.quantity / 2);
            const saving = item.price * quantity;
            return {
                offer: 'Buy a cheese, get another free!',
                quantity,
                saving,
            }
        }
        if (item.product === 'bread' && hasSoup) {
            // How offer is applied depends on soup and bread amounts
            const quantity = item.quantity >= hasSoup.quantity ? hasSoup.quantity : item.quantity;
            const saving = (item.price / 2) * quantity;
            return {
                offer: 'Buy a soup, get a bread half price!',
                quantity,
                saving,
            }
        }
        if (item.product === 'butter') {
            const quantity = item.quantity
            const saving = (item.price / 3) * quantity
            return {
                offer: 'Get a third off butter!',
                quantity,
                saving,
            }
        }
    }).filter(item => !!item); // Map returns undefined if no conditions met, that need to be removed
};

export default getSavings;