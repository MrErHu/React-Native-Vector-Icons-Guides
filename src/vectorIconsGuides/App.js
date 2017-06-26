import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Iconfont from './component/Iconfont'
import Icon from 'react-native-vector-icons/FontAwesome'

class App extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={style.container}>
                <Iconfont name="Github" size={30} color="#8a8c8e"/>
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
                </Icon.Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    }
})


export default App