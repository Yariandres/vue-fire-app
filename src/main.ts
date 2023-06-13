import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase';

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
	modules: [],
});

app.mount('#app');

