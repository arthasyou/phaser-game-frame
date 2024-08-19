import config from '../../public/config.json';

export class WebSocketService {
    private static instance: WebSocketService;
    private socket: WebSocket;
   

    // 私有构造函数，防止直接通过 new 创建实例
    private constructor() {
        const url = config.socket_url;
        this.socket = new WebSocket(url);
        this.initialize();
    }

    // 获取单例实例的静态方法
    public static getInstance(): WebSocketService {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    private initialize() {
        this.socket.onopen = () => {
            console.log('Connected to WebSocket server');
            this.send('Hello Server!');
        };

        this.socket.onmessage = (event) => {
            console.log(`Message from server: ${event.data}`);
            // 处理接收到的消息
        };

        this.socket.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    public send(message: string) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not open. Ready state:', this.socket.readyState);
        }
    }

    public close() {
        this.socket.close();
    }

    // 这里可以添加更多功能，例如事件订阅、自动重连等
}

// WebSocketService.getInstance()