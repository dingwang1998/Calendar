import {
    getDay,
    getMonth,
    getYear
}from './request'


import {formatChsDate,mapForChsDate } from '@/utils/tabUtils'

export default async (store,field, date)=>{
    let data = null
    switch(field){
        case 'day':
            data = await getDay(date)
            break;
        case 'month':
            data = await getMonth(date)
            break;
        case 'year':
            data = await getYear(date)
            break;
        default:
            break;
    }
    
    //不管成功与否 都需要更新errorCode的状态
    if (data.error_code !== 0) {
        store.commit('setErrorCode', data.error_code)
        return;
    }else {
        store.commit('setErrorCode', data.error_code)
    }

    let res = null;

    switch (field) {
        case 'day':
          res = data.result.data;
          res.date = formatChsDate(res.date, 'day');
          res['year-month'] = formatChsDate(res['year-month'], 'month');
          break;
        case 'month':
          res = data.result.data.holiday_array;
          res = mapForChsDate(res, 'festival');
          break;
        case 'year':
          res = data.result.data.holiday_list;
          res = mapForChsDate(res, 'startday');
    }

    store.commit("setData",{
        field,
        data:res
    })
}