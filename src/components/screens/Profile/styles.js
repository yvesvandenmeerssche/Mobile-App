import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f1f3'
  },
  titleConatiner: {
      width:'100%',
  },
  text: {
    color: '#000'
  },
  cardBox: {
    backgroundColor: '#da7b60',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 15
  },
  walletAddres: {
    color: '#fff',
    fontFamily: 'FuturaStd-Light',
    fontSize: 11.5,
    margin: 20,
    marginTop: 10,
    marginBottom: 30
  },
  logo: {
      width: 80,
      height: 55,
      borderRadius: 10,
      marginLeft: 10
  },
  logoBackground: {
      position: 'absolute',
      bottom: -5,
      left: -33,
      opacity: 0.1,
      width: '60%',
      height: '60%'
  },
  balanceLabel: {
      fontSize: 10,
      color: '#fff',
      marginLeft: 20,
      fontFamily: 'FuturaStd-Light'
  },
  balanceText: {
      fontSize: 18.5,
      color: '#fff',
      marginLeft: 20,
      fontFamily: 'FuturaStd-Medium'
  },
  addMore: {
      position: 'absolute',
      bottom: 15,
      right: 20,
      width: 43,
      height: 43,
      borderRadius: 50,
      backgroundColor: '#213742',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  addMorePlus: {
      color: '#fff',
      fontSize: 16
  },
  copyBox: {
      backgroundColor: '#fff',
      marginLeft: 40,
      marginRight: 40,
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
  },
  copyText: {
      fontFamily: 'FuturaStd-Light',
      fontSize: 13,
      color: '#000'
  },
  navItem: {
      borderBottomWidth: 0.5,
      borderColor: '#e2e4e3',
      padding: 10,
      paddingBottom: 20,
      paddingTop: 20,
      marginLeft: 10,
      marginRight: 10,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
  },
  navIcon: {
    width: 20,
    height: 23
  },
  navItemText: {
    fontFamily: 'FuturaStd-Light',
    fontSize: 17,
  },
  navCurrency: {
      color: '#da7b60',
      fontFamily: 'FuturaStd-Light',
      fontSize: 18
  }
});

export default styles;
