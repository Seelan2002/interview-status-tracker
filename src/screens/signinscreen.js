import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
const SignInScreen = () => {
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    //const [msg, setMsg] = useState({error: null, color: "green"})//
    
    const {height} = useWindowDimensions();
    const MyStack = useNavigation();

    const onSignInPressed = () => {    
    
        if(Username == ""){
            alert("Please Enter Username")
            return true
        }
        else if(Password == ""){
            alert("Please Enter Password")
            return true
        }
        else if(Username.length > 7){
            alert("Username is Allowed Maximum 7 Characters")
            return true
        }
        else if(Password.length < 8){
            alert("Password Should be an 8 Characters")
            return true
        }

        
    
    };
    
    

    const onForgotPasswordPressed = () => {
        //console.warn('Forgot Password');//
        MyStack.navigate('Forgot Password');
    };

    
    
    return(
<View style={styles.root}>
    <Image 
    source={Logo} 
    style={[styles.Logo, {height: height * 0.3}]} 
    resizeMode="contain" 
    />

    <CustomInput 
    placeholder="Username" 
    value={Username} 
    setValue={setUsername} 
    />
    <CustomInput
    placeholder="Password"
    value={Password} 
    setValue={setPassword} 
    secureTextEntry
    />

    <SignInButton 
    text="Log In" 
    onPress={onSignInPressed} 
    />
    
    <ForgotButton 
    text="Forgot Password?" 
    onPress={onForgotPasswordPressed}
    />
</View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    Logo: {
        width: '100%',
        maxWidth: 200,
        maxHeight: 150,
    },
});

export default SignInScreen;