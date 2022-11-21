class Beam extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        var x = scene.player.x;
        var y = scene.player.y;

        super(scene, x, y, "beam");
        scene.add.existing(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

        scene.projectiles.add(this);
    }

    update() {
        if (this.y < 32) {
            this.destroy();
        }
    }
}