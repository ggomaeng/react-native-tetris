/**
 * Created by ggoma on 2016. 11. 23..
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import CreateBlock from './create_block';

export default (props) => {
    return (
        <View style={{paddingLeft: 10, alignItems: 'center'}}>
            {
                props.blocks.map((block) => {
                    return <CreateBlock key={block.id} type={block.type} color={block.color}/>
                })
            }
        </View>
    )

}
