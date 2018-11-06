<template>
    <div class="page-cart">
        <el-row>
            <el-col v-if="1 || cart.length" :span="24" class="m-cart"><list></list></el-col>
            <el-col v-else class="empty">购物车为空ss</el-col>
        </el-row>
    </div>

</template>

<script>
import List from '@/components/cart/list.vue'
export default {
    data(){
        return {
            cart: []
        }
    },
    components: {
        List
    }
}
</script>

<style lang="scss">
  @import "@/assets/css/cart/index.scss";
</style>