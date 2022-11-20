<template>
  <div class='swt'>
  <el-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <el-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <el-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
    </div>
</template>

<script>

import { ElSwitch } from 'element-plus'
export default {
  name: 'MySwich',
  data(){
    return{
      value:true,
    }
  },
  components: { ElSwitch  },
}
</script>

<style scoped>
.swt{
  text-align: center;
}
</style>
