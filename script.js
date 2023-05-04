///SCENE 1
class Intro extends Phaser.Scene {
    constructor() {
        super('Intro');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('titleText', 'titleText.png');
        this.load.audio('intro', ['intro.wav']);
    }
    create(){      

        ///Snare Drumroll Intro
        let intro = this.sound.add('intro',
        {
            delay: 1
        });
        intro.play();
        ///Logo
        this.imageObject = this.add.image( 
            400,
            250,
            'titleText',
        )
        ///Scale
        this.imageObject.setScale(.001);
        ///ZoomIn Animation
        this.tweens.add({ 
            targets: this.imageObject,
            scale: .5,
            duration: 5000,
            ease: 'Linear',
        });
        ///Continue Text
        this.textObject = this.add.text(
            280,
            450,
            "Press [SPACE] to continue",
            {
                font: "20px Cambria",
                color: "#ffffff",
            }
        
        );
        this.textObject.setAlpha(0);
        ///Text fade-in
        this.tweens.add({ 
            targets: this.textObject,
            delay: 5000,
            alpha: 1,
            duration: 5000,
            ease: 'Linear',
        });    
        const FKey = this.input.keyboard.addKey('F');

        FKey.on('down', function(){
            if (this.scale.isFullscreen){
                    this.scale.stopFullscreen();
                }
                else {
                    this.scale.startFullscreen();
                }
        }, this);

        // fade to black
        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.intro.stop();
        })
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('PreRoll')
        })
    }
            
    update(){}
}

///SCENE 2
class PreRoll extends Phaser.Scene {
    constructor(){
        super('PreRoll');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('cloud1', 'cloud.png');
        this.load.audio('wind', ['wind.wav']);

    }

    create(){
        ///Wind sfx
        this.wind = this.sound.add('wind', {volume: 0.15})
        this.wind.loop = true;
        this.wind.play();

        ///Airplane graphic
        this.plane = this.add.graphics();
        this.plane.fillStyle(0x595959, 1);
        this.plane.fillTriangle(250, 50, 150, 50, 150, 75);
        this.plane.fillStyle(0xffffff, 1);
        this.plane.fillTriangle(250, 50, 150, 30, 125, 50);

        ///Cloud1
        this.cloud1 = this.add.image( 
            900,
            175,
            'cloud1',
        )
        this.cloud1.setScale(.25);

        ///Cloud2
        this.cloud2 = this.add.image( 
            900,
            330,
            'cloud1',
        )
        this.cloud2.setScale(.30);

        ///Text
        this.socrates1 = this.add.text(
            270,
            400,
            '"If there is one true fact of life,\n it is that paper airplanes are sick AF"\n-Socrates',
            {
                font: "italic 20px Cambria",
                color: "#ffffff",
                align: 'center',
            }
        )
        this.socrates1.setAlpha(0);

        ///Animations
        this.tweens.add({ //init
            targets: this.plane,
            x: -300,
            y: 200,
            duration: 0,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //1st movement
            targets: this.plane,
            delay: 1000, 
            x: 250,
            duration: 4000,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //quote
            targets: this.socrates1,
            delay: 3000, 
            alpha: 1,
            duration: 4000,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //cloud1
            targets: this.cloud1,
            delay: 5000, 
            x: -200,
            duration: 9000,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //cloud2
            targets: this.cloud2,
            delay: 6000, 
            x: -200,
            duration: 7000,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //1st movement
            targets: this.plane,
            delay: 13000, 
            x: 1000,
            duration: 4000,
            ease: 'linear',
            repeat: 0,
        })
        /// Fade to black TIMED
        setTimeout(() => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.wind.stop();
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('PreRoll2')
            })
        }, 17000);
        // fade to black OVERRIDE
        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.wind.stop();
        })
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('PreRoll2')
        })
    }
}

///SCENE 3
class PreRoll2 extends Phaser.Scene {
    constructor(){
        super('PreRoll2');
    }
    preload(){}

    create(){
        ///BG
        let background = this.add.graphics();
        background.fillStyle(0x2ea6d1, 1);
        background.fillRect(0, 0, 800, 600);
        
        let street = this.add.graphics();
        street.fillStyle(0x000000);
        street.fillRect(0, 400, 800, 200);
        
        let lines = this.add.graphics();
        lines.fillStyle(0xfbf204);
        lines.fillRect(0, 500, 800, 5);

        ///Wind sfx
        this.wind = this.sound.add('wind', {volume: 0.15})
        this.wind.loop = true;
        this.wind.play();

        ///Text
        this.socrates2 = this.add.text(
            180,
            50,
            '“I didn\'\'t say that. Wait, why did that drink say \'XXX\' on i-"\n-Socrates after being poisoned',
            {
                font: "italic 20px Cambria",
                color: "#ffffff",
                align: 'center',
            }
        )
        this.socrates2.setAlpha(0);

        ///Airplane graphic
        this.plane = this.add.graphics();
        this.plane.fillStyle(0x595959, 1);
        this.plane.fillTriangle(250, 50, 150, 50, 150, 75);
        this.plane.fillStyle(0xffffff, 1);
        this.plane.fillTriangle(250, 50, 150, 30, 125, 50);

        ///Animations
        this.tweens.add({ //init
            targets: this.plane,
            x: -300,
            y: 200,
            duration: 0,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //1st movement
            targets: this.plane,
            delay: 1000, 
            x: 1000,
            duration: 10000,
            ease: 'linear',
            repeat: 0,
        })
        this.tweens.add({ //quote
            targets: this.socrates2,
            delay: 2000, 
            alpha: 1,
            duration: 4000,
            ease: 'linear',
            repeat: 0,
        })

        /// Fade to black
         setTimeout(() => {
             this.cameras.main.fadeOut(1000, 0, 0, 0);
             this.wind.stop();
             this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                 this.scene.start('Menu')
             })
         }, 11000);
         // fade to black OVERRIDE
        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.wind.stop();
        })
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('Menu')
        })
    }   
}

///SCENE 4
class Menu extends Phaser.Scene {
    constructor(){
        super('Menu');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('cloud2', 'CartoonCloud.png');
    }

    create(){
        ///BG
        let background = this.add.graphics();
        background.fillStyle(0x2ea6d1, 1);
        background.fillRect(0, 0, 800, 600);

        ///Cloud2
        this.cloud2 = this.add.image( 
            150,
            175,
            'cloud2',
        )
        this.cloud2.setScale(.15);
        this.cloud3 = this.add.image( 
            725,
            175,
            'cloud2',
        )
        this.cloud3.setScale(.15);
        
        ///Airplane graphic
        this.plane = this.add.graphics();
        this.plane.fillStyle(0x595959, 1);
        this.plane.fillTriangle(250, 50, 150, 50, 150, 75);
        this.plane.fillStyle(0xffffff, 1);
        this.plane.fillTriangle(250, 50, 150, 30, 125, 50);

        ///Text
        this.menuText = this.add.text(
            280,
            150,
            'PAPER AIRPLANES',
            {
                font: "italic 40px Cambria",
                color: "#ffffff",
                align: 'center',
            }
        )
        this.menuText = this.add.text(
            380,
            400,
            'START?',
            {
                font: "italic 33px Cambria",
                color: "#ffffff",
                align: 'center',
            }
        )

        ///Animations
        this.tweens.add({ //init
            targets: this.plane,
            x: 250,
            y: 250,
            duration: 0,
            ease: 'linear',
            repeat: 0,
        })
    }
}



let config = {
    type: Phaser.WEBGL,
    autoCenter: true,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Intro, PreRoll, PreRoll2, Menu],
    audio: {
        disableWebAudio: true
    }
}
let game = new Phaser.Game(config);