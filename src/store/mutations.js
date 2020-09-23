

const date = new Date();
let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

export default {
    setHeaderTitle (state, routerName){
        switch(routerName){
            case 'day': 
                state.HeaderTitle = '当天信息'
                state.placeholder =  `格式: ${year}${month}${day} (${year}年${month}月${day}日)`
                state.maxlength = 8
                break;
            case 'month': 
                state.HeaderTitle = '近期假期'
                state.placeholder =  `格式: ${year}${month} (${year}年${month}月)`
                state.maxlength = 6
                break;
            case 'year': 
                state.HeaderTitle = '当年假期'
                state.placeholder =  `格式: ${year} (${year}年)`
                state.maxlength = 4
                break;
            default:
                state.HeaderTitle = '当天信息'
                state.placeholder =  `格式: ${year}${month}${day} (${year}年${month}月${day}日)`
                state.maxlength = 8
            break;
        }
    },
    setErrorCode (state, errorCode) {
        state.errorCode = errorCode;
    },
    setData (state, payload) {
        const { field, data } = payload;

        switch (field) {
          case 'day':
            state.dayData = data;
            break;
          case 'month':
            state.monthData = data;
            break;
          case 'year':
            state.yearData = data;
            break;
          default:
            break;
        }
      },
      setField (state, field) {
        state.field = field;
      }
}