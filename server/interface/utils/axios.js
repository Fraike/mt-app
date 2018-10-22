import axios from 'axios'

//创建实例
const instance = axios.create({
    //判断当前环境下的地址和端口
    baseURL: `http://${process.env.HOST||'localhost'}:${process.env.PORT||'3000'}`,
    timeout: 1000,
    headers: {

    }
})

export default instance