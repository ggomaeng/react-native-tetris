/**
 * Created by ggoma on 2016. 11. 23..
 */
import React, {Component} from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

import Grid from './components/grid';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Grid w={10} h={24}/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

})