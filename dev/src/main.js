enchant();

var core;

// クマスプライト
var Bear = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.call(this, 32, 32);
		this.x = x;
		this.y = y;
		this.image = core.assets['images/chara1.png'];
	}
});

window.onload = function() {
	core = new Core(320, 320);
	core.fps = 24;
	core.touched = false;
	core.preload([
		'images/chara1.png'
	]);

	core.onload = function() {
		core.currentScene.backgroundColor = 'rgb(239, 228, 202)';

		spriteGroup = new Group();
		core.currentScene.addChild(spriteGroup);

		// 歩くクマ１の表示
		var bear1 = new Bear(160-16, 64);
		bear1.on('enterframe', function(e) {
			var walker = e.target;
			walker.x += 4;
			walker.frame = Math.floor(walker.age % 3);
			if (walker.x >= 320) {
				this.clearEventListener();
			}
		})
		spriteGroup.addChild(bear1);

		// 歩くクマ２の表示
		var bear2 = new Bear(160-16, 224);
		bear2.scaleX = -1;
		bear2.on('enterframe', function(e) {
			var walker = e.target;
			walker.x -= 4;
			walker.frame = Math.floor(walker.age % 3);
			if (walker.x < 0) {
				this.clearEventListener();
			}
		})
		spriteGroup.addChild(bear2);

		var label1 = new Label();
		label1.x = 0;
		label1.y = 0;
		label1.text = '左端が画面外へ出たときに止まるということはクマは見えなくなります';
		core.currentScene.addChild(label1);
		
		var label2 = new Label();
		label2.x = 0;
		label2.y = 160;
		label2.text = '左端が画面外へ出たときに止まるということはクマはまだ見えています';
		core.currentScene.addChild(label2);

	};

	core.debug();
//	core.start();
};
