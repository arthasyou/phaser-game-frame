import  eventManager  from './events';

interface PlayerData {
    [key: string]: any; // 用于存储玩家数据的任意键值对
}

interface GameState {
    players: { [playerId: string]: PlayerData };
    gameStatus: 'waiting' | 'playing' | 'finished';
}

class DataManager {
    private state: GameState;

    constructor() {
        this.state = {
            players: {},
            gameStatus: 'waiting', // waiting, playing, finished
        };
    }

    set(key: keyof GameState, value: any): void {
        this.state[key] = value;
        eventManager.emit(`dataChanged:${key}`, value);
    }

    get<T extends keyof GameState>(key: T): GameState[T] {
        return this.state[key];
    }

    updatePlayer(playerId: string, data: Partial<PlayerData>): void {
        if (!this.state.players[playerId]) {
            this.state.players[playerId] = {};
        }
        this.state.players[playerId] = { ...this.state.players[playerId], ...data };
        eventManager.emit('dataChanged:players', this.state.players);
    }

    getPlayer(playerId: string): PlayerData | undefined {
        return this.state.players[playerId];
    }

    reset(): void {
        this.state = {
            players: {},
            gameStatus: 'waiting',
        };
        eventManager.emit('dataReset');
    }
}

export const dataManager = new DataManager();
