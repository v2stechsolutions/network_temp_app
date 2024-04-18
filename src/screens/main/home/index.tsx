import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../../../common/Header'
import { COLORS } from '../../../constants/Colors'
import { moderateScale, verticalScale } from '../../../utils/Scale'

import { MESSAGES } from './constant/Constants'

import { Divider } from 'react-native-paper'

const Home = () => {

  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <Header title={MESSAGES.HEADER_TITLE} />
      
    </View>
  )
}

export default Home;