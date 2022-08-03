import Order from "../models/Order";
import orderDataMock from "../mocks/orderDataMock";

/* Test only accounts for happy path. Would want to expand to include handling
* of missing data and different orders (especially varying quantities to effect
* offers). Should also add tests to check = rendering of BillCard and related
* components.
* */
describe('Order model', () => {

    test('Order model returns orderItems', () => {
        const order = Order({data: orderDataMock});
        expect(order.orderItems).toEqual(
            [
                {"price": 0.6, "product": "soup", "quantity": 1},
                {"price": 1.1, "product": "bread", "quantity": 2},
                {"price": 0.9, "product": "cheese", "quantity": 4},
                {"price": 1.2, "product": "butter", "quantity": 1},
                {"price": 0.5, "product": "milk", "quantity": 3}
            ]
        )
    })
    test('Order model returns correct subtotal', () => {
        const order = Order({data: orderDataMock});
        expect(order.subtotal).toEqual("9.10")
    })
    test('Order model returns savings', () => {
        const order = Order({data: orderDataMock});
        expect(order.savings).toEqual(
            [
                    {"offer": 'Buy a soup, get a bread half price!', "quantity": 1, "saving": 0.55 },
                    {"offer": 'Buy a cheese, get another free!', "quantity": 2, "saving": 1.8 },
                    {"offer": 'Get a third off butter!', "quantity": 1, "saving":  0.39999999999999997 },
                ]
        )
    })
    test('Order model returns total', () => {
        const order = Order({data: orderDataMock});
        expect(order.total).toEqual("6.35")
    })
})