<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFirestore } from 'vuefire';
import { collection, addDoc } from 'firebase/firestore';

const db = useFirestore();

const formData = ref({
  description: '',
  favourite: '',
  location: '',
  name: '',
  price: '',
  rating: '',
});

async function addCafe() {
  await addDoc(collection(db, 'cafes'), {
    ...formData.value,
  });
  formData.value.description = '';
  formData.value.favourite = '';
  formData.value.location = '';
  formData.value.name = '';
  formData.value.price = '';
  formData.value.rating = '';
}

const isDisabled = computed(() => {
  if (
    formData.value.description === '' ||
    formData.value.location === '' ||
    formData.value.favourite === '' ||
    formData.value.name === '' ||
    formData.value.price === '' ||
    formData.value.rating === ''
  ) {
    return true;
  } else {
    false;
  }
});
</script>

<template>
  <form @submit.prevent="addCafe">
    <div class="form">
      <input v-model="formData.name" type="text" placeholder="Name" required />
      <input
        v-model="formData.description"
        type="text"
        placeholder="Description"
      />

      <input
        v-model="formData.location"
        type="text"
        placeholder="Location"
        required
      />

      <input
        v-model="formData.price"
        type="number"
        min="1"
        max="10"
        placeholder="Price"
      />

      <input
        v-model="formData.rating"
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        required
      />

      <label for="favourite">
        favourite
        <input
          v-model="formData.favourite"
          type="checkbox"
          id="favourite"
          required
        />
      </label>
      <button type="submit" :disabled="isDisabled">Add</button>
    </div>
  </form>
  <pre>{{ formData }}</pre>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
