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

var floorTexture = PIXI.Texture.fromImage("floor2.png");
var floorSprite = new PIXI.Sprite(floorTexture);
floorSprite.anchor.x = 0;
floorSprite.anchor.y = 0;
floorSprite.position.x = 0;
floorSprite.position.y = 130;
stage.addChild(floorSprite);

var optionsBarSprite = new PIXI.Sprite.fromImage("optionsBar.png");
optionsBarSprite.anchor.x = 0;
optionsBarSprite.anchor.y = 1;
optionsBarSprite.position.x = 0;
optionsBarSprite.position.y = 400;
stage.addChild(optionsBarSprite);

var swordIcon = new PIXI.Sprite.fromImage("swordIcon.png");
swordIcon.anchor.x = 0.5;
swordIcon.anchor.y = 0.5;
swordIcon.position.x = 50;
swordIcon.position.y = -60;
swordIcon.interactive = true;
optionsBarSprite.addChild(swordIcon);

var wandIcon = new PIXI.Sprite.fromImage("wandIcon.png");
wandIcon.anchor.x = 0.5;
wandIcon.anchor.y = 0.5;
wandIcon.position.x = 50;
wandIcon.position.y = -30;
wandIcon.interactive = true;
optionsBarSprite.addChild(wandIcon);

var wandContainer = new PIXI.Container();
wandContainer.interactive = true;
wandContainer.visible = false;

var waterIcon = new PIXI.Sprite.fromImage("waterSprite.png");
waterIcon.interactive = true;
waterIcon.anchor.x = 0.5;
waterIcon.anchor.y = 0.5;
waterIcon.position.x = 45;
waterIcon.position.y = -16;

wandContainer.addChild(waterIcon);

var fireIcon = new PIXI.Sprite.fromImage("fireSprite.png");
fireIcon.interactive = true;
fireIcon.anchor.x = 0.5;
fireIcon.anchor.y = 0.5;
fireIcon.position.x = 45;
fireIcon.position.y = 9;

wandContainer.addChild(fireIcon);

var hero = new PIXI.Sprite.fromImage("hero.png");
hero.anchor.x = 0.5;
hero.anchor.y = 0.5;
hero.position.x = 130;
hero.position.y = 250;
hero.health = 250;
hero.attackType = "null";
hero.enemy = "null";
stage.addChild(hero);

wandIcon.addChild(wandContainer);


//
var monsterContainer = new PIXI.Container();
monsterContainer.numMonsters = 3;
stage.addChild(monsterContainer);



//Generate the body of the 'Eye Monster'
var evilEyeBody = new PIXI.Sprite.fromImage("EyeMonster-Body.png"); 
evilEyeBody.interactive = true;
evilEyeBody.anchor.x = 0.5;
evilEyeBody.anchor.y = 0.5;
evilEyeBody.position.x = 400;
evilEyeBody.position.y = 280;
evilEyeBody.health = 100;
monsterContainer.one = true;
monsterContainer.addChild(evilEyeBody);

//Generate the Eye of the 'Eye Monster' seperately so that the eye can be animated later.
var evilEye = new PIXI.Sprite.fromImage("EyeMonster-Eye.png");
evilEye.anchor.x = 0.5;
evilEye.anchor.y = 0.5;
evilEye.position.x = 0;
evilEye.position.y = -4;
evilEyeBody.addChild(evilEye);

var evilHead = new PIXI.Sprite.fromImage("HeadMonster-50px_Green.png");
evilHead.interactive = true;
evilHead.anchor.x = 0;
evilHead.anchor.y = 0;
evilHead.position.x = 400;
evilHead.position.y = 180;
evilHead.health = 100;
monsterContainer.two = true;
monsterContainer.addChild(evilHead);

var evilWheel = new PIXI.Sprite.fromImage("WheelRuin-50px.png");
evilWheel.interactive = true;
evilWheel.anchor.x = 0.5;
evilWheel.anchor.y = 0.5;
evilWheel.position.x = 500;
evilWheel.position.y = 250;
evilWheel.health = 100;
monsterContainer.three = true;
monsterContainer.addChild(evilWheel);

//Attack Icon Mouse Handlers
function mouseHandlerSwordIcon(e) {
	wandContainer.visible = false;
	monsterContainer.interactive = true;
	hero.attackType = "sword";
}

function mouseHandlerWandIcon(e) {
	wandContainer.visible = true;
}
function mouseHandlerFireIcon(e) {
	hero.attackType = "fire";
}

function mouseHandlerWaterIcon(e) {
	hero.attackType = "water";
}

//Attack Icon listeners
wandIcon.on('mousedown', mouseHandlerWandIcon);
swordIcon.on('mousedown', mouseHandlerSwordIcon);
fireIcon.on('mousedown', mouseHandlerFireIcon);
waterIcon.on('mousedown', mouseHandlerWaterIcon);


function attack(){
	animateHero('+');
	setTimeout(function(){ animateHero("-"); }, 250);
	if(hero.attackType == "sword"){
		if(hero.enemy == evilWheel){
			evilWheel.health -= 5;
			//window.alert(evilWheel.health);
		}else if(hero.enemy == evilHead){
			evilHead.health -= 45;
			//window.alert(evilHead.health);
		}else{		//hero.enemy == evilEye;
			evilEyeBody.health -= 10;
			//window.alert(evilEyeBody.health);
		}
	}else if(hero.attackType == "fire"){
		if (hero.enemy == evilWheel){
			evilWheel.health -= 45;
			//window.alert(evilWheel.health);
		}else if(hero.enemy == evilHead){
			evilHead.health -= 15;
			//window.alert(evilHead.health);
		}else{//hero.enemy == evilEye;
			evilEyeBody.health += 20;
			//window.alert(evilEyeBody.health);
		}
	}else{//hero.attackType == water;
		if(hero.enemy == evilWheel){
			evilWheel.health -= 10;
			//window.alert(evilWheel.health);
		}else if(hero.enemy == evilHead){
			evilHead.health += 20;
			//window.alert(evilHead.health);
		}else{		//hero.enemy == evilEye;
			evilEyeBody.health = -45;
			//window.alert(evilEyeBody.health);
		}
	}
	window.alert("Eye Slug: "+evilEyeBody.health + " Evil Wheel: "+evilWheel.health+" Flying Head: "+ evilHead.health);
	if(evilEyeBody.health <= 0 && monsterContainer.one == true){
		monsterContainer.numMonsters -= 1;
		monsterContainer.one = false;
		evilEyeBody.destroy();
		monsterContainer.removeChild(evilEyeBody);
	}
	if(evilHead.health <= 0 && monsterContainer.two == true){
		monsterContainer.numMonsters -= 1;
		monsterContainer.two = false;
		evilHead.destroy();
		monsterContainer.removeChild(evilHead);
	}
	if(evilWheel.health <= 0 && monsterContainer.three == true){
		monsterContainer.numMonsters -= 1;
		if(monsterContainer.numMonsters == 0){
			stage.destroy();
			window.alert("You have won!");
			return;
		}
		monsterContainer.three = false;
		evilWheel.destroy();
		monsterContainer.removeChild(evilWheel);
	}
	if(monsterContainer.numMonsters <= 0){
		window.alert("You have won!");
		stage.destroy();
		
	}else{
		hero.health -= 7*monsterContainer.numMonsters;
		if(hero.health <= 0){
			window.alert("You have lost!");
			stage.destroy();
		}
	}
	window.alert("Your Health: "+hero.health);
}



function mouseHandlerEye(e) {
	hero.enemy = evilEyeBody;
	if(hero.attackType != "null"){
		attack();
	}
	
}
function mouseHandlerHead(e) {
	hero.enemy = evilHead;
	if(hero.attackType != "null"){
		attack();
	}
}
function mouseHandlerWheel(e) {
	hero.enemy = evilWheel;
	if(hero.attackType != "null"){
		attack();
	}
}

//Monster Sprite Mouse Handlers
evilEyeBody.on('mousedown', mouseHandlerEye);
evilHead.on('mousedown', mouseHandlerHead);
evilWheel.on('mousedown', mouseHandlerWheel);


//Sprite Animations
function animateHero(direction) {
	if(direction == "+"){
		hero.position.x += 10;
		renderer.render(stage);
	}else{
		hero.position.x -= 10;
		renderer.render(stage);
	}
	
}

function animate() {
	if(monsterContainer.three == false){
		return;	//An attemp to figure out where the program was crashing
	}
	requestAnimationFrame(animate);
	evilWheel.rotation += 0.01;
	renderer.render(stage);
	
}
animate();

