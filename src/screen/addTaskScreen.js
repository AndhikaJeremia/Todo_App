import React from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native'
import { Input, CheckBox, Button } from 'react-native-elements'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DatePicker from 'react-native-date-picker'
import { useDispatch } from 'react-redux'
import { addTodo, chekLocalStorage } from '../actions'
const AddTaskScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [planInput, setPlanInput] = React.useState('')
    const [noteInput, setNoteInput] = React.useState(null)
    const [date, setDate] = React.useState(new Date())
    const [cheked, setcheked] = React.useState(0)
    const [visible, setVisible] = React.useState(false)
    const [cateExpand, setCateExpand] = React.useState(false)
    let newdate = date.toString().split(' ')
    let strdate = ''
    let strtime = newdate[4]
    for (let a = 0; a < 4; a++) {
        strdate += ' ' + newdate[a]
    }

    const btnCreate = () => {
        let tempData = {
            plan: planInput,
            date: strdate,
            time: strtime,
            category: cheked,
            note: noteInput
        }
        dispatch(addTodo(tempData))
        dispatch(chekLocalStorage())
        navigation.goBack()
    }

    return (
        <ScrollView style={{display:'flex'}}>
            <View style={{ padding: 20 }}>
                <View style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', flexBasis: 310, textAlign: 'center' }}>New Task</Text>
                    <Icon name='times' solid={true} style={{ fontSize: 30 }} onPress={() => navigation.goBack()} />
                </View>
                <Input label='What Are You Planning ?' style={{ fontSize: 25 }} labelStyle={{ fontSize: 20 }} multiline={true} onChangeText={(value) => setPlanInput(value)} />
                <Pressable style={{ marginLeft: 10 }} onPress={() => setVisible(true)}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name='calendar' solid={true} style={{ fontSize: 30 }} />
                        <Text style={{ fontSize: 20 }}> {strdate + ' ' + strtime} </Text>
                    </View>
                </Pressable>
                <Pressable style={{ marginLeft: 10, marginTop: 10 }} onPress={() => setCateExpand(true)}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name='tag' solid={true} style={{ fontSize: 30 }} />
                        <Text style={{ fontSize: 20 }}>{cheked === 1 ? ' Work' : cheked === 2 ? ' Study' : cheked === 3 ? ' Shop' : cheked === 4 ? ' Travel' : ' No Category'}</Text>
                    </View>
                </Pressable>
                <Input style={{ fontSize: 25 }} placeholder='Add Note' leftIcon={<Icon name='sticky-note' solid={true} style={{ fontSize: 30 }} />} onChangeText={(value) => setNoteInput(value)} multiline={cheked === 3} />
                <Modal isVisible={visible} onBackdropPress={() => setVisible(false)}>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}>Pick Date</Text>
                        <DatePicker date={date} onDateChange={setDate} />
                    </View>
                </Modal>
                <Modal isVisible={cateExpand} onBackdropPress={() => setCateExpand(false)}>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}>Pick Category</Text>
                        <CheckBox
                            title='No Category'
                            checked={cheked === 0}
                            onPress={() => setcheked(0)}
                        />
                        <CheckBox
                            title='Work'
                            checked={cheked === 1}
                            onPress={() => setcheked(1)}
                        />
                        <CheckBox
                            title='Study'
                            checked={cheked === 2}
                            onPress={() => setcheked(2)}
                        />
                        <CheckBox
                            title='Shop'
                            checked={cheked === 3}
                            onPress={() => setcheked(3)}
                        />
                        <CheckBox
                            title='Travel'
                            checked={cheked === 4}
                            onPress={() => setcheked(4)}
                        />
                    </View>
                </Modal>
            </View>
            <Button title='Create' onPress={btnCreate} />
        </ScrollView>
    )
}

export default AddTaskScreen