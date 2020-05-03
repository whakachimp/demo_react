import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import axios from 'axios';

class HomePage extends React.Component {
    state = {}

    getData = () => {
        var formdata = new FormData();
        formdata.append("user_id", "2");

        axios.get("http://api.otoklix.com:8000/api/carmanager/getcars/4/",{
            headers: {
                'Authorization': 'Token a9060bd952ee8047236199f6304ca2a4994b627b',
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            }
        })
            .then((res) => {
                console.log(res)
                console.log("JALAN KOK")
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err, "iki error")
                console.log(err.response.data)
                console.log(err.response)
            })
    }

    logoutAPI = () =>{
        console.log("LOGGING OUT")
        var formdata = new FormData()
        formdata.append('Token', 'bb8b7a4b91fbe53cb70b09ab053657a2d9d3f2a3')

        axios.delete("https://api.otoklix.com/api/account/logout/",
        {
            data:formdata,
            headers:{
                'Host': 'api.otoklix.com',
                'Authorization': 'Token bb8b7a4b91fbe53cb70b09ab053657a2d9d3f2a3',
                'Content-Length': '<calculated when request is sent>',
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            }
        } 
        )
            .then((res) => {
                console.log("herererererrerer");
                console.log(res.data);
                console.log(res)
            })
            .catch((err) => {
                console.log('ERROR::', err);
                console.log(err.response);
                console.log(err.response.data)
            })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.viewstyle}>
                <Icon name="xing" type="font-awesome" />
                    <Text>React Gatel</Text>
                    <Button
                        title="Go to Cars"
                        type="clear"
                        onPress={() => this.props.navigation.navigate("Cars")}
                        style={styles.buttonstyle}
                    />
                    <Button
                        title="Go to Users"
                        type="clear"
                        onPress={() => this.props.navigation.navigate("User")}
                        style={styles.buttonstyle}
                    />
                    <Button
                        title="Go to Counter"
                        type="clear"
                        onPress={() => this.props.navigation.navigate("Counter")}
                        style={styles.buttonstyle}
                    />
                    <Button
                        title="GET USER CAr"
                        onPress={ () => this.getData()}
                    />
                    <Button
                        title="Logout"
                        onPress={ () => this.logoutAPI()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonstyle: {
        alignSelf: "flex-end"
    },
    viewstyle: {
        flex: 2,
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "flex-end"
    },
    viewstyleB: {
        flex: 2,
        backgroundColor: 'green',
        alignItems: "center",
        justifyContent: "flex-end"
    }

})

export default HomePage
