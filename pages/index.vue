<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="19">
        <e-life></e-life>
      </el-col>
    </el-row>
    <el-row :span="24">
      <Artistic></Artistic>
    </el-row>
  </div>
</template>

<script>

import Emenu from '@/components/index/menu.vue'
import ELife from '@/components/index/life.vue'
import Artistic from '@/components/index/artistic.vue'
export default {
  components: {
    Emenu,
    ELife,
    Artistic
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>



