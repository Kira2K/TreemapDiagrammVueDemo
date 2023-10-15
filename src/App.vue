<script setup lang="ts">
import { reactive,} from 'vue'
import {TreeMap} from 'vue-treemap-diagramm'
import type { TreeMapChildPreviewList } from "vue-treemap-diagramm/dist/TreeMap/index.d.ts"
import 'vue-treemap-diagramm/dist/style.css'
const mockedList:TreeMapChildPreviewList = [
  {
    title: 'nodeA',
    value: 720,
  },
  {
    title: 'nodeB',
    value: 480
  },
  {
    title: 'nodeC',
    value: 240
  },
  {
    title: 'node with long title',
    value: 170
  },
  {
    title: 'nodeE',
    value: 100
  }
]
const data1 =reactive(mockedList)
const data2 =reactive([mockedList[0],mockedList[2],mockedList[1]])
const data3 = data1.concat(mockedList[0],mockedList[1],mockedList[2])
const data4 = [{
    title: 'pink',
    value: 100,
    color: 'pink'
  },{
    title: 'green',
    value: 140,
    color: 'green',
  },{
    title: 'brown',
    value: 200,
    color: 'brown',
  },
  ...data3.concat(data2)
]
</script>

<template>

 <div class="container">
  <h2>Treemap DEMO</h2>
  <h4>Documentation: https://github.com/Kira2K/TreemapDiagrammVue</h4>


  <div class="row">
    <div class="column">
      <span class="label">Basic with enabled vertical title</span>
      <tree-map 
        :chartData="data2"
        :enableVerticalTitle="true"
        :width="360"
        :height="240">
      </tree-map>
    </div>
    <div class="column">
      <span class="label">Width == Height with disabled vertical title</span>
      <tree-map 
        :chartData="data1"
        :enableVerticalTitle="false"
        :width="240"
        :height="240">
      </tree-map>
    </div>
  </div>
  
  <div style="width: 100%;height: 100px;"></div>
  <div class="row">
    <div class="column">
      <span class="label">Long rectangle with enabled vertical title</span>
      <tree-map 
      :chartData="data3"
      :enableVerticalTitle="true"
      :width="240"
      :height="360">
      </tree-map>
    </div>
    <div class="column">
      <span class="label">Just a version with a lot of nodes and custom colors</span>
      <tree-map 
        :chartData="data4"
        :enableVerticalTitle="false"
        :width="360"
        :height="360">
      </tree-map>
    </div>
  </div>
</div>
  <!-- <RouterView /> -->
</template>

<style scoped>
.container {
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.row {
  display: flex;
  justify-content: space-around;
  padding: 50px
}
.column {
  display: flex;
  flex-direction: column;
 align-items: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
