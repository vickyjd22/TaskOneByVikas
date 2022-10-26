import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    position:'relative',
    bottom:50,
    marginTop:20,
    backgroundColor: "skyblue",
    width: "70%",
    height: 45,
    alignItems: "flex-start",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn:
  {
    position:'relative',
    top:20,
    marginTop:10,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a73e8",
  },

  registerBtn:
  {
    position:'relative',
    top:20,
    marginTop:10,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    alignSelf:'center'
  },

  textColor:{
    color:'white',
    fontSize:12,
    fontWeight:'bold'
  },

  buttons: {
    flex: 1,
    position: "relative",
    top: '60%'
  },

  button: {
    marginTop: 10
  }
});
