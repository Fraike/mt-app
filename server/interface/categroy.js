import Router from 'koa-router';
import axios from './utils/axios';


let router = new Router({
    prefix: '/categroy'
})

const sign = 'e7a80781c5db67b4ac94feec1a06037e'

router.get('/crumbs',async (ctx)=>{
    let {status,data:{areas,types}} = await axios.get('http://cp-tools.cn/categroy/crumbs',{
        params: {
            city: ctx.query.city.replace('市','') || '天津',
            sign
        }
    })
    ctx.body = {
        areas: status === 200 ? areas:[],
        types: status === 200? types: []
    }
})

export default router