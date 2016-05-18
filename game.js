var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(600,400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var backWallSprite = new PIXI.Sprite.fromImage("backWall.png");
backWallSprite.anchor.x = 0;
backWallSprite.anchor.y = 0;
backWallSprite.position.x = 0;
backWallSprite.position.y = 0;
stage.addChild(backWallSprite);

var optionsBarSprite = new PIXI.Sprite.fromImage("optionsBar.png");
optionsBarSprite.anchor.x = 0;
optionsBarSprite.anchor.y = 1;
optionsBarSprite.position.x = 0;
optionsBarSprite.position.y = 400;
stage.addChild(optionsBarSprite);

var floorTexture = PIXI.Texture.fromImage("floor2.png");
var floorSprite = new PIXI.Sprite(floorTexture);
floorSprite.anchor.x = 0;
floorSprite.anchor.y = 0;
floorSprite.position.x = 0;
floorSprite.position.y = 130;
stage.addChild(floorSprite);


var heroSprite = new PIXI.Sprite.fromImage("hero.png");
heroSprite.anchor.x = 0.5;
heroSprite.anchor.y = 0.5;
heroSprite.position.x = 130;
heroSprite.position.y = 250;
stage.addChild(heroSprite);



var evilEyeSpritebody = new PIXI.Sprite.fromImage("EyeMonster-Body.png"); 
evilEyeSpritebody.anchor.x = 0.5;
evilEyeSpritebody.anchor.y = 0.5;
evilEyeSpritebody.position.x = 400;
evilEyeSpritebody.position.y = 280;
stage.addChild(evilEyeSpritebody);

var evilEyeSpriteeye = new PIXI.Sprite.fromImage("EyeMonster-Eye.png");
evilEyeSpriteeye.anchor.x = 0.5;
evilEyeSpriteeye.anchor.y = 0.5;
evilEyeSpriteeye.position.x = 0;
evilEyeSpriteeye.position.y = -4;
evilEyeSpritebody.addChild(evilEyeSpriteeye);

var evilHeadSprite = new PIXI.Sprite.fromImage("HeadMonster-50px_Green.png");
evilHeadSprite.anchor.x = 0;
evilHeadSprite.anchor.y = 0;
evilHeadSprite.position.x = 400;
evilHeadSprite.position.y = 180;
stage.addChild(evilHeadSprite);

var evilWheelSprite = new PIXI.Sprite.fromImage("WheelRuin-50px.png");
evilWheelSprite.anchor.x = 0.5;
evilWheelSprite.anchor.y = 0.5;
evilWheelSprite.position.x = 500;
evilWheelSprite.position.y = 250;
stage.addChild(evilWheelSprite);








function animate() {
	requestAnimationFrame(animate);
	evilWheelSprite.rotation += 0.01;
	
	renderer.render(stage);
	
}

animate();