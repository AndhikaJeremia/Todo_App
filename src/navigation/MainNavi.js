import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screen/ListScreen'
import TaskScreen from '../screen/TaskScreen'
import AddTaskScreen from '../screen/addTaskScreen'
import ProfileScreen from '../screen/ProfileScreen'

const MainNavi = () => {
    const stack = createStackNavigator()
    return (
        <stack.Navigator headerMode={false}>
            <stack.Screen name='ListScreen' component={ListScreen}/>
            <stack.Screen name='TaskScreen' component={TaskScreen} />
            <stack.Screen name='AddTaskScreen' component={AddTaskScreen} />
            <stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </stack.Navigator>
    )
}

export default MainNavi