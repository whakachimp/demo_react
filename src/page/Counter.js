import  React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class CounterPage extends React.Component{
    state={
        timesclicked:0
    }
    addOne =() =>{
        this.setState({timesclicked: this.state.timesclicked+1})
    }
    minusOne = () =>{
        this.setState({timesclicked: this.state.timesclicked-1})
    }
    render(){
        return(
        <View>
            <Text>You have pressed the button {this.state.timesclicked} times</Text>
            <Button
                title="+1"
                onPress = {this.addOne}
            />
            <Button
                title="-1"
                onPress = {this.minusOne}
            />
        </View>
        )
    }
}

export default CounterPage