import axios from 'axios'

export const dataUser = () => {
    return async(dispatch) => {
        try{
            const res = await axios.get('https://randomuser.me/api/')
            console.log(res.data.results[0])
            dispatch({
                type: 'GETDATA',
                payload: res.data.results[0]
            })
        }
        catch(err){
            console.log(err, 'data user err')
        }
    }
}