<template>
    <div class="m-geo">
        <i class="el-icon-location"/>{{$store.state.geo.position.city}}
        <nuxt-link 
        class="changeCity" 
        to="/changeCity"
        >切换城市</nuxt-link>
        [深圳 田径 上海]
    </div>
</template>

<script>
export default {

}
</script>

<style lang='css'>

</style>