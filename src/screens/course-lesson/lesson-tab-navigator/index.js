import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LessonsTab from '../components/lessons-tab';
import TestsTab from '../components/tests-tab';
import DiscussTab from '../components/discuss-tab';
import styles from './styles';
const Tab = createMaterialTopTabNavigator();
const LessonTabNavigator = ({ lessons }) => {
  return (
    <Tab.Navigator
      initialRouteName='Lessons Tab'
      tabBarOptions={{
        activeTintColor: '#3C3A36',
        labelStyle: styles.label,
        style: styles.tab_bar,
      }}
    >
      <Tab.Screen
        name="Lessons Tab"
        component={LessonsTab}
        options={{
          tabBarLabel: 'Lessons',
        }}
      />
      <Tab.Screen
        name="Tests Tab"
        component={TestsTab}
        initialParams={{ lessons }}
        options={{
          tabBarLabel: 'Tests',
        }}
      />
      <Tab.Screen
        name="Discuss Tab"
        component={DiscussTab}
        options={{
          tabBarLabel: 'Discuss',
        }}
      />
    </Tab.Navigator>
  )
}
export default LessonTabNavigator