
<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const { count, inc, dec } = useCounter()
</script>

<template>
  <div class="box">
    <img class="logo" src="/static/logo.png" />
    <div class="title">Hello <a href='https://github.com/dcloudio/uni-app' target='__blank' class="link">Uni App</a> and <a href='https://github.com/vueuse/vueuse' target='__blank' class="link">VueUse</a>!</div>

    <div class="count">
      <span>Counter: </span>
      <button @click="inc()" >+</button>
      <span>{{count}}</span>
      <button @click="dec()">-</button>
    </div>
  </div>
</template>

<style scoped>
.box {
  font-family: 'Noto Serif', serif;
  user-select: none;
  font-size: 38rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40rpx;
}

.logo {
  width: 500rpx;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rpx;
  font-size: 50rpx;
}

.link {
  color: #41b883;
  text-decoration: none;
  cursor: pointer;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rpx;
}
</style>
