import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 145,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  orderHeaderContainer: {
    flex: 1,
  },
  orderItemDate: {
   
    fontSize: 14,
 
  },
  orderBody: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderItemTotal: {
  
    fontSize: 14,
  
  },
  orderItemId: {
   
    fontSize: 14,
   
  },
});