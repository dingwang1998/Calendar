import axios from 'axios'
import qs from 'qs'
import { JUHE_KEY } from '../utils/dataUtils'

function postaxios(option){
    axios({
        url:option.url,
        method:'POST',
        header:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        data:qs.stringify({
            ...option.data,
            key: JUHE_KEY
        })
    }).then(value=>{
        option.success(value.data)
    })
    .catch(reason=>{
        option.error(reason);
    })
}

function getaxios(option){
    axios(option.url + '&key=' + JUHE_KEY)
    .then(value=>{
        option.success(value.data)
    })
    .catch((err)=>{
        option.error(err)
    })
}

export{
    postaxios,
    getaxios
}