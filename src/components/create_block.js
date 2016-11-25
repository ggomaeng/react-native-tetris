/**
 * Created by ggoma on 2016. 11. 23..
 */
import React, {Component} from 'react';
import {
View,
StyleSheet
} from 'react-native';

import Cell from './cell';

export default class CreateBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            color: props.color,
            rotation: false,
            width: 4,
            height: 4,
            grid: []
        }
    }

    componentDidMount() {
        this.createBlockGrid()
    }

    createBlockGrid() {
        var grid = [];
        var row = [];
        const {width, height} = this.state;
        for (i = 0; i < height; i ++) {
            for (j = 0; j < width; j++) {
                row.push(0);
            }
            grid.push(row);
            row = [];
        }
        this.colorGrid(grid);

    }

    colorGrid(grid) {
        if(this.state.type == 'I') {
            grid[0][0] = 1;
            grid[0][1] = 1;
            grid[0][2] = 1;
            grid[0][3] = 1;
        } else if(this.state.type == 'O') {
            grid[1][1] = 1;
            grid[1][2] = 1;
            grid[2][1] = 1;
            grid[2][2] = 1;
        } else if(this.state.type == 'T') {
            grid[0][1] = 1;
            grid[1][0] = 1;
            grid[1][1] = 1;
            grid[1][2] = 1;
        } else if(this.state.type == 'S') {
            grid[0][1] = 1;
            grid[0][2] = 1;
            grid[1][0] = 1;
            grid[1][1] = 1;
        } else if(this.state.type == 'Z') {
            grid[0][0] = 1;
            grid[0][1] = 1;
            grid[1][1] = 1;
            grid[1][2] = 1;
        } else if(this.state.type == 'J') {
            grid[0][0] = 1;
            grid[1][0] = 1;
            grid[1][1] = 1;
            grid[1][2] = 1;
        }else if(this.state.type == 'L') {
            grid[0][2] = 1;
            grid[1][0] = 1;
            grid[1][1] = 1;
            grid[1][2] = 1;
        }

        this.setState({grid});

    }

    renderBlockGrid() {
        var size = 10;
        var {color} = this.state;
        // console.log('rendering grid');
        return this.state.grid.map((row, i) => {
            return (
                <View key={i} style={{flexDirection: 'row'}}>
                    {row.map((cell, j) => {
                        var c = 'white';
                        if(cell == 1) {
                            c = color;
                        }
                        return <Cell ref={i + ',' + j} key={j} color={c} size={size}/>
                    })}
                </View>
            )
        })
    }

    render() {
        return (
            <View style={{margin: 10}}>
                {this.renderBlockGrid()}
            </View>
        )

    }



}