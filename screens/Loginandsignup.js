import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Alert, Modal,KeyboardAvoidingView,ScrollView} from 'react-native';
import SantaAnimation from '../components/SantaAnimation';
// import db from '../config'

export default class Loginandsignup  extends React.Component{
    constructor(){
       super();
       this.state={
           Email : '',
           pass:'',
           ModalVisible:'false',
           password:'',
           confirmpassword:'',
           emailaddress:'',
           address :'',
           phoneno:'',
           firstName:'',
           lastname:'',
       }
    }
    userLogin=(EmailId,password) => {
   firebase.auth().signInWithEmailAndPassword(EmailId,password)
   .then(()=>{
     return Alert.alert("login Successful");
   })
   .catch((error)=> { 
     var errorCode = error.code;
      var errorMessage = error.message;
       return Alert.alert(errorMessage)
   })
    }

    userSignup=(EmailId,password) => {
        firebase.auth().createUserWithEmailAndPassword(EmailId,password)
        .then((responce)=>{
          return Alert.alert("Sign up Successful");
        })
        .catch(function(error) { 
          var errorCode = error.code;
           var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }
 ShowModal = () => {
  return (
<Modal
  animationType='fade'
  transparent={true}
  visible={this.state.ModalVisible}>
  <View style={styles.modalContainer}>
<scrollView style={{width:'100%'}}>
<KeyboardAvoidingView style={styles.KeyboardAvoidingView}> 
<Text style={styles.modalTitle}> Registration</Text>
<View>
<TextInput
  style = {styles.formTextInput}
  placeholder={"First Name"}
  onChangeText={(text)=>{
  this.setState({firstName: text})
}} />
<TextInput
  style = {styles.formTextInput}
  placeholder={"Last Name"}
  onChangeText={(text)=>{
  this.setState({lastname: text})
}} />
<TextInput
  style = {styles.formTextInput}
  keyboardType={"numeric"}
  placeholder={"Phone Number"}
  onChangeText={(text)=>{
  this.setState({phoneno: text})
}} />
<TextInput
  style = {styles.formTextInput}
  placeholder={"Address"}
  multiline={true}
  onChangeText={(text)=>{
  this.setState({address: text})
}} />
<TextInput
  style = {styles.formTextInput}
  keyboardType={"email-address"}
  placeholder={"Email Id"}
  onChangeText={(text)=>{
  this.setState({emailaddress: text})
}} />
<TextInput
  style = {styles.formTextInput}
  secureTextEntry = {true}
  placeholder={"enter password"}
  onChangeText={(text)=>{
  this.setState({password: text})
}} />
<TextInput
  style = {styles.formTextInput}
  secureTextEntry = {true}
  placeholder={"Confirm password"}
  onChangeText={(text)=>{
  this.setState({confirmpassword: text})
}} />
</View>
<View>
<TouchableOpacity
  style = {styles.registerButton}
  // onPress={()=>{this.userSignup(this.state.email, this.state.pass)}} 
  >
  <Text style={styles.registerButtonText}>Register</Text>
</TouchableOpacity>
<TouchableOpacity
  style = {styles.cancelButton}
  // onPress={()=>{}} 
  >
  <Text style={styles.registerButtonText}>Cancel</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>
</scrollView>
  </View>
</Modal>
   )
}
    render (){
    return (
      <View style={styles.container}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        {/* <SantaAnimation/> */}
        <Text>Book Santa</Text>
        </View>
        {this.ShowModal}
        <TextInput
          style = {styles.loginBox}
          placeholder="abcd@example.com"
          keyboardType = "email-address"
          onChangeText={(text)=>{
            this.setState({email: text})
        }}
        />
        <TextInput
          style = {styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter password"
          onChangeText={(text)=>{
            this.setState({pass: text})
        }}
        />
          <TouchableOpacity
            style = {styles.loginbtn}
             onPress={()=>{this.userLogin(this.state.email, this.state.pass)}}
             >
            <Text style={{textAlign: 'center'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
                    style = {styles.loginbtn}
                     onPress={()=>{this.ShowModal}} 
                    >
                    <Text style={{textAlign: 'center'}}>Sign up</Text>
         </TouchableOpacity>
      </View>
    );
    }
  }
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },
 loginbtn:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})