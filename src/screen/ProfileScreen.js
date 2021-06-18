import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { dataUser } from '../actions'
import Icon from 'react-native-vector-icons/FontAwesome5'


const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(dataUser())
    }, [])
    const { data } = useSelector((state) => {
        return {
            data: state.userProfile.data_user
        }
    })
    let newdate
    if (data.dob) {
        newdate = data.dob.date.split('T')
        console.log(newdate[0])
        newdate = newdate[0]
    }
    return (
        <View style={{ padding: 20 }}>
            <Icon name='chevron-left' solid={true} style={{ fontSize: 30 }} onPress={() => navigation.goBack()} />
            <View style={{ marginTop: 10, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Avatar size='xlarge' rounded={true} source={{ uri: data.picture ? data.picture.medium : 'https://i.stack.imgur.com/y9DpT.jpg' }} />
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginLeft: 20
                    }}>{data.name ? data.name.title + ' ' + data.name.first : ''}</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginLeft: 20
                    }}>{data.dob ? data.dob.age : ''} Years old</Text>
                </View>
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20
            }}>Full name : {data.name ? data.name.first + ' ' + data.name.last : ''}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20
            }}>Born : {data.dob ? newdate : ''}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20
            }}>Location : {data.location ? data.location.street.name + ' Number ' + data.location.street.number + ' ' + data.location.city + ' ' + data.location.state + ' ' + data.location.country : ''}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20
            }}>Email : {data ? data.email : ''}</Text>
        </View>
    )
}

export default ProfileScreen