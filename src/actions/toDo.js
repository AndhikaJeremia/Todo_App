import AsyncStorage from "@react-native-async-storage/async-storage";

export const chekLocalStorage = () => {
    return async (dispatch) => {
        try {
            let localStorage = await AsyncStorage.getItem('todo')
            if (localStorage === null) {
                const tempData = {
                    All: {
                        other: { data: [] },
                        work: { data: [] },
                        study: { data: [] },
                        shop: { data: [] },
                        travel: { data: [] },
                        done: { data: [] }
                    }
                }
                await AsyncStorage.setItem('todo', JSON.stringify(tempData))
            }
            let reGetlocalStorage = await AsyncStorage.getItem('todo')
            let valueStorage = JSON.parse(reGetlocalStorage).All
            let numberTask = {
                all: parseInt(valueStorage.other.data.length) + parseInt(valueStorage.work.data.length) + parseInt(valueStorage.study.data.length) + parseInt(valueStorage.shop.data.length) + parseInt(valueStorage.travel.data.length),
                other: parseInt(valueStorage.other.data.length),
                work: parseInt(valueStorage.work.data.length),
                study: parseInt(valueStorage.study.data.length),
                shop: parseInt(valueStorage.shop.data.length),
                travel: parseInt(valueStorage.travel.data.length)
            }
            dispatch({
                type: 'NUMBERTASK',
                payload: numberTask
            })
        }
        catch (err) {
            console.log('error checkLocalStorage', err)
        }

    }
}

export const addTodo = (body) => {
    return async (dispatch) => {
        try {
            let localStorage = await AsyncStorage.getItem('todo')
            let All = JSON.parse(localStorage).All
            if (body.category === 1) {
                All.work.data.push(body)
                let Data = { All }
                Data = JSON.stringify(Data)
                await AsyncStorage.setItem('todo', Data)
            }
            else if (body.category === 2) {
                All.study.data.push(body)
                let Data = { All }
                Data = JSON.stringify(Data)
                await AsyncStorage.setItem('todo', Data)
            }
            else if (body.category === 3) {
                All.shop.data.push(body)
                let Data = { All }
                Data = JSON.stringify(Data)
                await AsyncStorage.setItem('todo', Data)
            }
            else if (body.category === 4) {
                All.travel.data.push(body)
                let Data = { All }
                Data = JSON.stringify(Data)
                await AsyncStorage.setItem('todo', Data)
            }
            else if (body.category === 0) {
                All.other.data.push(body)
                let Data = { All }
                Data = JSON.stringify(Data)
                await AsyncStorage.setItem('todo', Data)
            }
        }
        catch (err) {
            console.log(err, 'err addtodo')
        }
    }
}

export const detailTodo = (params) => {
    return async (dispatch) => {
        try {
            let localStorage = await AsyncStorage.getItem('todo')
            let All = JSON.parse(localStorage).All
            if (params === 5) {
                let data = []
                for await (let item of All.work.data) {
                    data.push(item)
                }
                for await (let item of All.study.data) {
                    data.push(item)
                }
                for await (let item of All.shop.data) {
                    data.push(item)
                }
                for await (let item of All.travel.data) {
                    data.push(item)
                }
                for await (let item of All.other.data) {
                    data.push(item)
                }
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: data
                })
            }
            if (params === 1) {
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: All.work.data
                })
            }
            if (params === 2) {
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: All.study.data
                })
            }
            if (params === 3) {
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: All.shop.data
                })
            }
            if (params === 4) {
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: All.travel.data
                })
            }
            if (params === 0) {
                dispatch({
                    type: 'GETDETAILTODO',
                    payload: All.other.data
                })
            }
        }
        catch (err) {
            console.log('detail Todo err', err)
        }
    }
}

export const moveToDone = (index, category) => {
    return async (dispatch) => {
        try {
            let localStorage = await AsyncStorage.getItem('todo')
            let All = JSON.parse(localStorage).All
            console.log(All)
            let dataslice = []
            if (category === 1) {
                dataslice = All.work.data.slice(index, parseInt(index) + 1)
                All.work.data.splice(index, 1)
                dataslice = dataslice[0]
                All.done.data.push(dataslice)
                let newdata = { All }
                newdata = JSON.stringify(newdata)
                await AsyncStorage.setItem('todo', newdata)
                let reGetlocalStorage = await AsyncStorage.getItem('todo')
                let valueStorage = JSON.parse(reGetlocalStorage).All

                dispatch({
                    type: 'GETDETAILTODO',
                    payload: valueStorage.work.data
                })
            }
            if (category === 2) {
                dataslice = All.study.data.slice(index, parseInt(index) + 1)
                All.study.data.splice(index, 1)
                dataslice = dataslice[0]
                All.done.data.push(dataslice)
                let newdata = { All }
                newdata = JSON.stringify(newdata)
                await AsyncStorage.setItem('todo', newdata)
                let reGetlocalStorage = await AsyncStorage.getItem('todo')
                let valueStorage = JSON.parse(reGetlocalStorage).All

                dispatch({
                    type: 'GETDETAILTODO',
                    payload: valueStorage.study.data
                })
            }
            if (category === 3) {
                dataslice = All.shop.data.slice(index, parseInt(index) + 1)
                All.shop.data.splice(index, 1)
                dataslice = dataslice[0]
                All.done.data.push(dataslice)
                let newdata = { All }
                newdata = JSON.stringify(newdata)
                await AsyncStorage.setItem('todo', newdata)
                let reGetlocalStorage = await AsyncStorage.getItem('todo')
                let valueStorage = JSON.parse(reGetlocalStorage).All

                dispatch({
                    type: 'GETDETAILTODO',
                    payload: valueStorage.shop.data
                })
            }
            if (category === 4) {
                dataslice = All.travel.data.slice(index, parseInt(index) + 1)
                All.travel.data.splice(index, 1)
                dataslice = dataslice[0]
                All.done.data.push(dataslice)
                let newdata = { All }
                newdata = JSON.stringify(newdata)
                await AsyncStorage.setItem('todo', newdata)
                let reGetlocalStorage = await AsyncStorage.getItem('todo')
                let valueStorage = JSON.parse(reGetlocalStorage).All

                dispatch({
                    type: 'GETDETAILTODO',
                    payload: valueStorage.travel.data
                })
            }
            if (category === 0) {
                dataslice = All.other.data.slice(index, parseInt(index) + 1)
                All.other.data.splice(index, 1)
                dataslice = dataslice[0]
                All.done.data.push(dataslice)
                let newdata = { All }
                newdata = JSON.stringify(newdata)
                await AsyncStorage.setItem('todo', newdata)
                let reGetlocalStorage = await AsyncStorage.getItem('todo')
                let valueStorage = JSON.parse(reGetlocalStorage).All

                dispatch({
                    type: 'GETDETAILTODO',
                    payload: valueStorage.other.data
                })
            }
        }
        catch (err) {
            console.log(err, 'moveToDone Err')
        }
    }
}

export const getDoneData = () => {
    return async(dispatch) => {
        try{
            let localStorage = await AsyncStorage.getItem('todo')
            let All = JSON.parse(localStorage).All
            dispatch({
                type: 'DONETASK',
                payload: All.done.data
            })
        }
        catch(err){
            console.log("getDoneData", err)
        }
    }
}