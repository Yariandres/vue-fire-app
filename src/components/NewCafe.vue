<script setup lang="ts">
import { useFirestore } from 'vuefire';
import { collection, addDoc } from 'firebase/firestore';
const db = useFirestore();

async function addCafe() {
  const newDoc = await addDoc(collection(db, 'cafes'), {
    description: 'Town big coffee shop for addicts',
    favourite: false,
    location: 'Japan',
    name: 'Downtown Cafe',
    price: 2,
    rating: 1,
  });

  console.log(newDoc);
}

const handleSubmit = () => {
  console.log('submit');
};
</script>

<template>
  <form @submit="handleSubmit">
    <div class="form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Location" />
      <input type="number" placeholder="Price" />
      <input type="number" placeholder="Rating" />
      <label for="favourite">
        favourite
        <input type="checkbox" id="favourite" />
      </label>
      <button type="submit" @click="addCafe">Add New cafe</button>
    </div>
  </form>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
