import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
  },
  containerHead: {
    backgroundColor: '#0D0D0D',
    height: 173,        
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    marginTop: -27,  
    gap: 4,      
  },
  input: {
    backgroundColor: '#262626',
    color: '#F2F2F2',
    width: 271,
    height: 54,
    borderRadius: 6,
    padding: 16,  
    marginRight: 4,  
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: 52,
    width: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  buttonContent: {
    color: '#FFF',
    borderColor: '#FFF',    
    borderRadius: 50,
    borderWidth: 1,    
    width: 26,
    height: 26,
    textAlign: 'center',
  },
  menu: {
    width: 327,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomColor: '#262626',
    borderBottomWidth: 1
  },
  menuText: {
    flexDirection: 'row',    
    justifyContent: 'space-between',    
  },
  textBlue: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textPurple: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  counter: {
    marginLeft: 10,
    color: '#FFF',
    width: 25,
    backgroundColor: '#333333',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 999,
  },
  empty: {
    marginTop: 48,
    alignItems: 'center',    
  },
  textGrey: {
    color: '#808080',
    fontSize: 14
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 327,
    height: 75,
    borderRadius: 8,    
    backgroundColor: '#262626'
  },
  task: {
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: 'normal',
    width: 250,
  },
  taskCompleted: {
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: 'normal',
    width: 250,
    textDecorationLine: 'line-through',
  }
});