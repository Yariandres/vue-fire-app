<script setup lang="ts">
import { ref } from 'vue';

import { useFirebaseAuth, useCurrentUser } from 'vuefire';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const userClient = ref<{ email: string; password: string }>({
  email: '',
  password: '',
});

const currentUser = useCurrentUser();
const auth = useFirebaseAuth();

async function createUser() {
  createUserWithEmailAndPassword(
    auth,
    userClient.value.email,
    userClient.value.password
  )
    .then(() => {
      console.log('You are signed in!');
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

async function logOutOfFirebase() {
  signOut(auth)
    .then(() => {
      console.log('logged out');
    })
    .catch((error) => {
      console.log(error);
    });
}

async function signInToFirebase() {
  signInWithEmailAndPassword(
    auth,
    userClient.value.email,
    userClient.value.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}
</script>

<template>
  <h3 v-if="currentUser?.email">Signed in as: {{ currentUser?.email }}</h3>
  <div v-else>
    <h1>Sign in</h1>
    <div class="form">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="userClient.email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="userClient.password" />
      </div>
    </div>
  </div>

  <button v-if="currentUser?.email" type="button" @click="logOutOfFirebase">
    Sign out
  </button>
  <div v-else>
    <button type="button" @click="signInToFirebase">Sign in</button>
    <button type="button" @click="createUser">Create Account</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
