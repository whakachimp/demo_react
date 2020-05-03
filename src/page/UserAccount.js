import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import axios from 'axios';

class UserPage extends React.Component {
    state = {
        data: [],
        restaurantName: '',
        photos: []
    }

    componentDidMount() {
        this.getData()
    }


    getData = async () => {

        await axios.get("https://api.otoklix.com/api/carmanager/getcars/4/",{
            headers: {
                'Authorization': 'Token a9060bd952ee8047236199f6304ca2a4994b627b',
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            }
        })
            .then((res) => {
                console.log(res)
                console.log("JALAN KOK")
                console.log(res.data)
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err, "iki error")
                console.log(err.response.data)
                console.log(err.response)
            })
    }

    renderData = () => {
        return (
            <FlatList style={{width: "100%"}}
                data={this.state.data}
                renderItem={({ item }) =>
                    <View style={{backgroundColor: "gainsboro", marginBottom: 5, height: 100}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color:'red'}}>{item.car_brand}</Text>
                        <Text style={{color:"black", fontWeight:'bold'}}>{item.car_model}</Text>
                        <Text style={{color: "orange"}}>{item.license_plate}</Text>
                    </View>
            }
                keyExtractor = {item=> item.license_plate}
            ></FlatList>

        )
    }

    render() {
        console.log("COBA")
        console.log("RES", this.state.data.length)
        const { photos, data } = this.state
        return (
            <View style={{flex:1}}>
                {this.renderData()}
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default UserPage