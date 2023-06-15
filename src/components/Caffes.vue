<template>
  <h1>HEllo</h1>
</template>

<script setup lang="ts">
import { collection, query, getDocs } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
const db = useFirestore();

const q = query(collection(db, 'cafes'));

const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, ' => ', doc.data());
});
</script>
