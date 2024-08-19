import App from './App.vue';
import { createApp } from 'vue';
import { WebSocketService} from './services/websocket'
import ProtobufService from './services/proto_service';


WebSocketService.getInstance()
ProtobufService.getInstance().initialize("proto/message.proto")

createApp(App).mount('#app');
