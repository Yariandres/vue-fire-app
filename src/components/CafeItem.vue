<script setup lang="ts">
import { ref } from 'vue';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';

const db = useFirestore();

interface CaffeCollection {
  id?: string | undefined;
  description: string;
  favourite: boolean | null;
  location: string;
  name: string;
  price: number;
  rating: number;
}

defineProps<{
  collection: CaffeCollection;
}>();

const editCafe = ref<any>({
  description: '',
  favourite: null,
  location: '',
  name: '',
  price: 0,
  rating: 0,
});

const isEdit = ref(false);

async function handleDeleteCafe(id: string) {
  await deleteDoc(doc(db, 'cafes', id));
}

async function handleUpdateCafe(id: string) {
  const docRef = doc(db, 'cafes', id);
  await updateDoc(docRef, {
    ...editCafe.value,
  });
  isEdit.value = false;
}
</script>

<template>
  <div class="item">
    <div>
      <h2 v-if="!isEdit">{{ collection.name }}</h2>
      <input
        v-if="isEdit"
        type="text"
        :placeholder="collection.name"
        v-model="editCafe.name"
      />
    </div>

    <div>
      <p v-if="!isEdit">{{ collection.description }}</p>
      <input
        v-if="isEdit"
        type="text"
        :placeholder="collection.description"
        v-model="editCafe.description"
      />
    </div>

    <div>
      <p v-if="!isEdit">{{ collection.location }}</p>
      <input
        v-if="isEdit"
        type="text"
        :placeholder="collection.location"
        v-model="editCafe.location"
      />
    </div>

    <div>
      <p v-if="!isEdit">Coffee price: {{ collection.price }}$</p>
      <input v-if="isEdit" type="number" v-model="editCafe.price" />
    </div>

    <div>
      <p v-if="!isEdit">
        Favourite: {{ collection.favourite! ? 'Yes' : 'No' }}
      </p>

      <label v-if="isEdit" for="favourite">
        Favourite:
        <input type="checkbox" id="favourite" v-model="collection.favourite" />
      </label>
    </div>

    <div>
      <p v-if="!isEdit">Rating: {{ collection.rating }}</p>
      <label v-if="isEdit" for="rating">
        Rating
        <input type="number" id="rating" v-model="collection.rating" />
      </label>
    </div>

    <button @click="handleDeleteCafe(collection.id as string)">Delete</button>
    <button @click="isEdit = !isEdit">
      {{ isEdit === true ? 'Cancel' : 'Edit' }}
    </button>
    <button v-if="isEdit" @click="handleUpdateCafe(collection.id as string)">
      Update
    </button>
  </div>
</template>

<style scoped>
.item {
  width: 260px;
  border: 1px solid rgba(128, 128, 128, 0.167);
  border-radius: 15px;
  padding-inline: 16px;
  padding-block: 16px;
  box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
  -moz-box-shadow: 10px 10px 5px -6px rgba(230, 230, 230, 0.98);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

p {
  padding: 0;
  margin: 0;
}
</style>
