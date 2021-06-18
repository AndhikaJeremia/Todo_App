import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import {chekLocalStorage} from '../actions'

const ListScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(chekLocalStorage())
    },[dataNumberTask])
    const {dataNumberTask} = useSelector((state) => {
        return{
            dataNumberTask: state.toDoReducer.numberTask
        }
    })
    return (
        <View style={{ padding: 20 }}>
            <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Lists</Text>
                <Icon name='user' solid={true} style={{ fontSize: 30 }} onPress={() => navigation.navigate('ProfileScreen')} />
            </View>
            <View style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', flexDirection: 'row' }}>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:5, numberTask:dataNumberTask.all})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='clipboard-list' style={styles.IconList} color='#0984e3' />
                        <Text style={styles.TaskText}>ALL</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.all): ''} Tasks</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:1, numberTask:dataNumberTask.work})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='briefcase' style={styles.IconList} color='#fdcb6e' />
                        <Text style={styles.TaskText}>Work</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.work): ''} Tasks</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:2, numberTask:dataNumberTask.study})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='book' style={styles.IconList} color='#636e72' />
                        <Text style={styles.TaskText}>Study</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.study): ''} Tasks</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:3, numberTask:dataNumberTask.shop})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='shopping-cart' style={styles.IconList} color='#55efc4' />
                        <Text style={styles.TaskText}>Shop</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.shop): ''} Tasks</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:4, numberTask:dataNumberTask.travel})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='plane' style={styles.IconList} color='#00b894' />
                        <Text style={styles.TaskText}>Travel</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.travel): ''} Tasks</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TaskScreen',{cate:0, numberTask:dataNumberTask.other})}>
                    <View style={styles.ContainBoxes}>
                        <Icon name='list' style={styles.IconList} color='#B1B3CF' />
                        <Text style={styles.TaskText}>Other</Text>
                        <Text style={styles.countTask}>{dataNumberTask ? parseInt(dataNumberTask.other): ''} Tasks</Text>
                    </View>
                </Pressable>
            </View>
            <FAB
                style={styles.fab}
                large
                icon="plus"
                onPress={() => navigation.navigate('AddTaskScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ContainBoxes: {
        height: 170,
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        display: 'flex',
        borderWidth: 2,
        borderColor: '#A7ABB2'
    },
    IconList: {
        fontSize: 40,
        marginLeft: 20,
        marginTop: 20
    },
    TaskText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20
    },
    countTask: {
        fontSize: 20,
        marginLeft: 20
    },
    fab: {
        position: 'absolute',
        marginRight: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#6274AD'
    },
})

export default ListScreen