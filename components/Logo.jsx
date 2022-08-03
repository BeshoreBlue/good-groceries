import logo from './../assets/GFLogo.jpg';
import { Image, StyleSheet, View } from 'react-native'

const Logo = () => (
    <View style={styles.logoContainer}>
        <Image source={logo} style={{ height: 100, width: 100 }}/>
    </View>
)

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
});

export default Logo;