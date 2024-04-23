import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../../constants/Colors'
import { moderateScale, verticalScale } from '../../../../utils/Scale'
// import ScoreCard from '../../chapterreport/component/ScoreCard'
import { MESSAGES } from '../constant/Constants'
import useHome from '../hook/useHome'

function HomeDetailedScreen(){

  const {
    data,
  } = useHome();   
       



    return(
      <>
        <Text style={styles.title}>Home</Text>
      
      </>
    )
}

export default HomeDetailedScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold', 
    color: COLORS.PRIMARY, 
    marginVertical: verticalScale(10)
  }
})