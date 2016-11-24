/**
 * Created by ggoma on 2016. 11. 23..
 */
import React, {Component} from 'react';
import {
View,
Text,
TouchableOpacity,
StyleSheet
} from 'react-native';

export default class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: props.color,
            size: props.size,
            borderWidth: props.borderWidth
        }
    }

    changeColor(color) {
        this.setState({color});
    }

    render() {
        var {color, size, borderWidth} = this.state

        if(color != 'white') {
            borderWidth = 1;
        }

        return (
            <View style={[styles.cell, {backgroundColor: color,
            width: size, height: size, borderWidth: borderWidth}]}/>
        )
    }

}



var styles = StyleSheet.create({
    cell : {
        borderColor: 'black',

    }

})