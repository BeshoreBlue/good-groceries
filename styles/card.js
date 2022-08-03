import { StyleSheet } from "react-native";

const borderColor = 'rgba(76, 217, 100, 1.0)';
const borderRadius = 5;
const padding = 15;
const space = 2;

// Styling can be improved to be adaptive to screen size
export default StyleSheet.create({
    boldText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    card: {
        alignItems: 'center',
        backgroundColor: 'rgba(100, 260, 100, 0.3)',
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderWidth: 5,
        justifyContent: 'center',
        marginVertical: 10,
        padding: padding,
        width: '95%'
    },
    itemContainer: {
        backgroundColor: 'rgba(100, 300, 100, 1.0)',
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
        padding: padding,
        width: '100%'
    },
    savingsContainer: {
        marginVertical: 10
    },
    text: {
        fontSize: 15
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: space
    },
    totalsContainer: {
        backgroundColor: 'rgba(76, 217, 100, 1.0)',
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: 1,
        marginVertical: space,
        padding: 10,
        width: '100%'
    },
    totalText: {
        fontSize: 25
    },
});