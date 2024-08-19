import App from './App.vue';
import { createApp } from 'vue';
import { WebSocketService} from './services/websocket'

WebSocketService.getInstance()

createApp(App).mount('#app');
