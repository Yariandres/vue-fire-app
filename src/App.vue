<script setup lang="ts">
import CafeCollection from './components/CafeCollection.vue';
import NewCafe from './components/NewCafe.vue';
import SignIn from './components/SignIn.vue';
</script>

<template>
  <div class="container">
    <div class="left">
      <SignIn />
      <Suspense>
        <NewCafe />
      </Suspense>
    </div>

    <div class="rigth">
      <Suspense>
        <CafeCollection />
      </Suspense>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  gap: 32px;
  height: 100dvh;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 32px;
}
</style>
