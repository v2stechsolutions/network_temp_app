import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Platform,
  Pressable,
} from 'react-native';
import {COLORS} from '../../../../constants/Colors';
import {moderateScale, verticalScale} from '../../../../utils/Scale';
import {Notification, NotificationType} from '../models';
import {
  one2one_icon,
  event_icon,
  reference_icon,
  chapter_meet_icon,
} from '../../../../../assets/images';

const fetchNotificationTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'Chapter Meeting':
      return chapter_meet_icon
    case "Event": 
      return event_icon

    case "One to One Meeting": 
      return one2one_icon

    case "Reference": 
      return reference_icon;

    case 'Done Deal': 
    // TODO: change it after getting icon for Done Deal
      return chapter_meet_icon

    default: 
      return null
  }

}


const handleNotificationNavigation = (type: any) => {
  console.log("item pressed", type)
}

const NotificationListView = ({ notificationItem }: { notificationItem: Notification }): JSX.Element => {
  // Destructure notificationItem to access its properties
  const { title, body } = notificationItem;
  // console.log("type", notificationItem)
  
  return (
    <Pressable style={[styles.notificationItem, shadowStyle]} onPress={() => handleNotificationNavigation(body.type)}>
      <Image source={fetchNotificationTypeIcon(body.type)} style={styles.notificationIconType}/>
      <Text style={styles.messageText}>{body.message}</Text>
    </Pressable>
  );
};


const NotificationsView = ({ notificationData }: { notificationData: Notification[] }) => {
  return (
    <View style={styles.notificationContainer}>
      <FlatList
      data={notificationData}
      renderItem={ ({item}) => <NotificationListView notificationItem={item}/>}
      />
    </View>
  );
}

export default NotificationsView;

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1
  },
  notificationItem: {
    flexDirection: "row",
    marginVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15
  },
  notificationIconType: {
    width: moderateScale(60),
    height: moderateScale(60),
    resizeMode:'contain'
  },
  messageText: {
    fontSize: moderateScale(16),
    flex: 1, // Allow the text to take up all available space
  }
});


const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  android: {
    elevation: 5,
  },
});