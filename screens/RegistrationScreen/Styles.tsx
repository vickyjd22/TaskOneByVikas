import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    position: 'relative',
    bottom: 50,
    marginTop: 20,
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
  registerBtn:
  {
    position: 'relative',
    top: 20,
    marginTop: 10,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },

  textColor: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  controls: {
    flex: 1,

  },

  control: {
    marginTop: 10
  },


  button: {
    position: 'relative',
    top: 50,
    alignSelf: 'center'
  },

  error: {
    position: 'absolute',
    top: 10,
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});