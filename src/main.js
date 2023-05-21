import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador desde tu archivo router.js
import '../src/assets/styles/main.sass'; // No necesitas importar los otros archivos sass aquí
import '@fortawesome/fontawesome-free/css/all.css';




createApp(App).use(router).mount('#app');

