
import { postaxios } from './axios'

function getDay ( date ){
    return new Promise((resolve,reject)=>{
        postaxios({
            url:'/api/calendar/day',
            data:{date},
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

function getMonth ( date ){
    return new Promise((resolve,reject)=>{
        postaxios({
            url:'/api/calendar/month',
            data:{"year-month": date},
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

function getYear ( date ){
    return new Promise((resolve,reject)=>{
        postaxios({
            url:'/api/calendar/year',
            data:{"year": date},
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

export {
    getDay,
    getMonth,
    getYear
}