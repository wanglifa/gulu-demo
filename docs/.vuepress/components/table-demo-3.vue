<template>
  <div style="padding-top: 16px;">
    <h2>带边框的表格</h2>
    <div class="demo-box">
      <div class="top">
<lf-table :columns="columns" :data-source="dataSource" bordered>
</lf-table>
      </div>
      <lf-collaspe>
        <p slot="one">默认情况下，Table组件是不具有竖直方向的边框的，如果需要，可以使用<code>bordered</code>属性，它接受一个<code>Boolean</code>，设置为<code>true</code>即可启用。</p>
        <code slot="two">{{content}}</code>
      </lf-collaspe>
    </div>
  </div>
</template>
<script>
  import LfTable from '../../../src/table1.vue'
  import Icon from '../../../src/icon.vue'
  import Collaspe from './collspse-demo.vue'
  export default {
    components: {
      'lf-icon': Icon,
      'lf-collaspe': Collaspe,
      LfTable
    },
    data () {
      return {
        content:
`
<lf-table :columns="columns" :data-source="dataSource" bordered>
</lf-table>

<script>
export default{
    data(){
        return {
                    columns: [
                      {text: '姓名', field: 'name', width: 200},
                      {text: '分数', field: 'score', width: 200},
                      {text: '年龄', field: 'age'}
                    ],
                    dataSource: [
                      {id: 1, name: '发发', score: 100, age:18},
                      {id: 2, name: '琳琳', score: 99, age: 16},
                      {id: 3, name: '西西', score: 99, age: 20},
                      {id: 4, name: '泳儿', score: 99, age: 21},
                      {id: 5, name: '美美', score: 99, age: 22},
                      {id: 6, name: '阿宇', score: 99, age: 26},
                    ],
        }
    }
}
<script>
 `.replace(/^ {10}/gm, '').trim(),
        columns: [
            {text: '姓名', field: 'name',width: 200},
            {text: '分数', field: 'score',width: 200},
          {text: '年龄', field: 'age'}
        ],
        dataSource: [
          {id: 1, name: '发发', score: 100, age:18},
          {id: 2, name: '琳琳', score: 99, age: 16},
          {id: 3, name: '西西', score: 99, age: 20},
          {id: 4, name: '泳儿', score: 99, age: 21},
          {id: 5, name: '美美', score: 99, age: 22},
          {id: 6, name: '阿宇', score: 99, age: 26},
        ],

      }
    }
  }
</script>
<style scoped lang="scss">

   .demo-box{
     border: solid 1px #ebebeb;
     border-radius: 3px;
     transition: .2s;
     .top{
       padding: 24px;
     }
   }
   .box{
     width: 100%;
     height: 300px;
     background: gray;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>