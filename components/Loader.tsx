import * as React from 'react';
import { ActivityIndicator, PixelRatio, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Loader() {
    return (
        <View style={styles.fullScreen}>
            <LottieView
                source={require('../assets/images/98788-loading.json')}
                autoPlay= {true}
                loop = {true}
                style= {{flex: 1}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    container: {
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        width: PixelRatio.getPixelSizeForLayoutSize(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        opacity: 0.8
    },
});