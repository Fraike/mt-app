<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in $store.state.home.menu" :key="index" @mouseenter="enter">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
            <template v-for="(item,idx) in curDetail.child" >
                <h4 :key="idx">{{item.title}}</h4>
                <span v-for="item in item.child" :key="item">{{item}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kind: '',
            menu: [
                {
                    type: 'food',
                    name: '美食',
                    child: [
                        {
                            title: '美食',
                            child: [
                                '代金卷',
                                '天戴乃',
                                '烧烤'
                            ]
                        }
                    ]
                },
                {
                    type: 'takeout',
                    name: '外卖',
                    child: [
                        {
                            title: '外卖',
                            child: [
                                '外卖',
                                '天戴乃',
                                '烧烤'
                            ]
                        }
                    ]
                    
                },
                {
                    type: 'hotel',
                    name: '酒店',
                    child: [
                        {
                            title: '酒店星级',
                            child: [
                                '经济',
                                '高档',
                                '你懂的'
                            ]
                        }
                    ]
                },
                {
                    type: 'food',
                    name: '美食'
                }
            ]
        }
    },
    computed: {
        curDetail: function() {
            return this.$store.state.home.menu.filter((item) => item.type===this.kind)[0]
        }
    },
    methods: {
        mouseleave: function() {
            let self = this;
            self._timer = setTimeout(() => {
                self.kind = ''
            }, 150);
        },
        enter: function(e) {
            this.kind = e.target.querySelector('i').className
        },
        sover: function() {
            clearTimeout(this._timer)
        },
        sout: function() {
            this.kind = ''
        }
    }
}
</script>

<style lang='css'>

</style>