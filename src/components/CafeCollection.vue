<script setup lang="ts">
import CafeItem from './CafeItem.vue';
import { collection } from 'firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';
const db = useFirestore();

interface CaffeCollection {
  description: string;
  favourite: boolean | null;
  location: string;
  name: string;
  price: number;
  rating: number;
}

const caffeCollection = useCollection<CaffeCollection>(collection(db, 'cafes'));
</script>

<template>
  <div class="items">
    <CafeItem
      v-for="(collection, index) in caffeCollection"
      :key="index"
      :collection="collection"
    />
  </div>
</template>

<style scoped>
.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
