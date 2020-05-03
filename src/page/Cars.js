import React from 'react';
import {View, Text} from 'react-native';
import {Button, SearchBar} from 'react-native-elements';

class CarsPage extends React.Component{
    state={
        search:''
    }
    updateSearch = (inputSearch) => {
        this.setState({search:inputSearch})
    }
    render(){
        console.log(this.state.search)
        return(
            <View>
                <Text>This is the Cars Page</Text>
                <SearchBar
                    placeholder = "Search here......."
                    onChangeText = {(val) => this.updateSearch(val)}
                    value = {this.state.search}
                />
                <Button
                        title="Go to Users"
                        type="clear"
                        onPress={() => this.props.navigation.navigate("User")}
                    />
            </View>
        )
    }
}

export default CarsPage