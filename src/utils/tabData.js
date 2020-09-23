import { getIconDate } from './tabUtils'


export default [
    {
        IconText: getIconDate("day"),
        tabText:'当天',
        path:"/"
    },
    {
        IconText:getIconDate("month"),
        tabText:'近期',
        path:"/month"
    },
    {
        IconText:getIconDate("year"),
        tabText:'当年',
        path:"/year"
    }
]