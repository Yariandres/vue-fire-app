<script setup lang="ts">
import CafeCollection from './components/CafeCollection.vue';
import NewCafe from './components/NewCafe.vue';
</script>

<template>
  <div class="container">
    <div class="left">
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
}
</style>
