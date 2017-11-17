<template>
  <div id="app">
   
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
  <div class="demo-input-suffix">
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input>
  </div>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" disabled></el-input-number>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'app',
   data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        input21:'',
        input2:'',
         num1: 1
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleChange(value){
        console.log(value)
      }
    }
}
</script>

<style>
 #app{
  width:1860px;
  margin: 30px auto;
 }
</style>
