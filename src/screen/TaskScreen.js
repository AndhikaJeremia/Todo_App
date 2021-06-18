import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { detailTodo, moveToDone, chekLocalStorage, getDoneData } from '../actions'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Modal from 'react-native-modal'

const TaskScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false)
    const [idx, setIdx] = React.useState(null)
    React.useEffect(() => {
        dispatch(detailTodo(route.params.cate))
        dispatch(getDoneData())
    }, [data, dataDone])

    const { data, dataDone } = useSelector((state) => {
        return {
            data: state.toDoReducer.detailTodo,
            dataDone: state.toDoReducer.doneTask
        }
    })

    console.log(dataDone)

    const btnLongPress = (index) => {
        if (!visible) {
            setIdx(index)
            console.log(index)
        }
        setVisible(prev => !prev)
    }
    const btnDone = (index, category) => {
        dispatch(moveToDone(index, category))
        dispatch(chekLocalStorage())
    }

    const DoneComponent = () => {
        return (
            dataDone.map((item, index) => {
                return (
                    <View key={index}>

                        <View style={styles.borderTask}>
                            <Text style={styles.TaskText}>{item.plan}</Text>
                            <Text style={styles.TaskText}>{item.date}</Text>
                            <Text style={styles.TaskText}>{item.category === 1 ? ' Work' : item.category === 2 ? ' Study' : item.category === 3 ? ' Shop' : item.category === 4 ? ' Travel' : ' No Category'}</Text>
                        </View>

                    </View>
                )
            }
            )

        )
    }

    return (
        <View>
            <View style={{ backgroundColor: '#183BF9' }}>
                <View style={{ padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon name='chevron-left' color='#ffffff' solid={true} style={{ fontSize: 30 }} onPress={() => navigation.goBack()} />
                    <Icon name='ellipsis-v' color='#ffffff' solid={true} style={{ fontSize: 30 }} onPress={() => navigation.goBack()} />
                </View>
                <Icon style={{
                    fontSize: 50,
                    marginLeft: 60,
                    marginTop: 20
                }} color='white'
                    name={route.params.cate === 5 ? 'clipboard-list' : route.params.cate === 4 ? 'plane' : route.params.cate === 3 ? 'shopping-cart' : route.params.cate === 2 ? 'book' : route.params.cate ? 'briefcase' : 'list'} />
                <Text style={{
                    fontSize: 50,
                    marginLeft: 50,
                    marginTop: 20,
                    color: 'white',
                    fontWeight: 'bold'
                }}>{route.params.cate === 5 ? 'All' : route.params.cate === 4 ? 'Travel' : route.params.cate === 3 ? 'Shop' : route.params.cate === 2 ? 'Study' : route.params.cate ? 'Work' : 'Other'}</Text>
                <Text style={{
                    fontSize: 30,
                    marginLeft: 50,
                    marginTop: 10,
                    marginBottom: 10,
                    color: 'white',
                    fontWeight: 'bold'
                }}>{route.params.numberTask} Tasks</Text>
            </View>
            <ScrollView style={{ height: 440 }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold'
                }}>Your Task : </Text>
                {data ? data.map((item, index) => {
                    return (
                        <View key={index}>
                            <Pressable key={index} onLongPress={() => btnLongPress(index)} onPress={() => btnDone(index, item.category)}>
                                <View style={styles.borderTask}>
                                    <Text style={styles.TaskText}>{item.plan}</Text>
                                    <Text style={styles.TaskText}>{item.date}</Text>
                                    <Text style={styles.TaskText}>{item.category === 1 ? ' Work' : item.category === 2 ? ' Study' : item.category === 3 ? ' Shop' : item.category === 4 ? ' Travel' : ' No Category'}</Text>
                                </View>
                            </Pressable>
                        </View>
                    )
                }) : ''}
                {route.params.cate === 5 ?
                    <View>
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            fontWeight: 'bold'
                        }}>Done : </Text>
                        <DoneComponent />
                    </View>
                    :
                    <></>
                }
            </ScrollView>
            <Modal isVisible={visible} onBackdropPress={() => btnLongPress()}>
                <View style={{ backgroundColor: '#ffffff' }}>
                    <Text style={{ fontSize: 30, marginLeft: 20, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}>Note</Text>
                    <ScrollView style={{ height: 400 }}>
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            fontWeight: 'bold'
                        }}>{idx ? data[parseInt(idx)].note : ''}</Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    TaskText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 20
    },
    borderTask: {
        borderWidth: 2,
        borderColor: '#A7ABB2'
    }
})

export default TaskScreen