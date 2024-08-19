import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import eventManager from '../../services/events';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('star', 'star.png');
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');
    }

    create ()
    {
        
        this.add.image(512, 384, 'background');
        this.add.image(512, 350, 'logo').setDepth(100);
        this.add.text(512, 490, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
        
        EventBus.emit('current-scene-ready', this);

        // 监听 dataManager 发出的事件，假设 eventName 是一个数字 id
        eventManager.on('1001', (data: any) => { // '1' 是 messageId 的一个示例
            this.handleDataUpdate(data);
        });

    }

    private handleDataUpdate(data: any) {
        // 处理 dataManager 发来的数据

        
        console.log('Received data from dataManager:', JSON.stringify(data));

        // 示例：假设 data 包含一个星星的位置，添加一个星星到场景
        if (data.starPosition) {
            this.add.image(data.starPosition.x, data.starPosition.y, 'star');
        }
    }
}
