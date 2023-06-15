<script setup lang="ts">
import { collection } from 'firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';
const db = useFirestore();

interface CaffeCollection {
  description: string;
  favourite: boolean;
  location: string;
  name: string;
  price: number;
  rating: number;
}
const caffeCollection = useCollection<CaffeCollection>(collection(db, 'cafes'));

const handleDelete = () => {
  console.log('delete');
};

const handleEdit = () => {
  console.log('edit');
};
</script>

<template>
  <div class="items">
    <div
      class="item"
      v-for="(collection, index) in caffeCollection"
      :key="index"
    >
      <div>
        <h2>{{ collection.name }}</h2>
        <p>{{ collection.description }}</p>
        <p>{{ collection.location }}</p>
        <p>Coffee price: {{ collection.price }}$</p>
        <p>Rating: {{ collection.rating }}</p>
        <button @click="handleDelete">Delete</button>
        <button @click="handleEdit">Edit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  justify-content: space-between;
}

.item {
  border: 1px solid rgba(128, 128, 128, 0.075);
  border-radius: 15px;
  padding-inline: 16px;
  padding-block: 16px;
  box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
  -moz-box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
}
</style>
