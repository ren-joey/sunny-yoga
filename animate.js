(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"animate_atlas_", frames: [[0,0,2047,300],[3820,0,78,81],[3980,0,76,75],[3900,0,78,77],[3128,0,342,400],[2570,0,556,352],[3472,0,346,270],[2049,0,519,413]]}
];


// symbols:



(lib.bg_empty = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.real_01 = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖於LOGO = function() {
	this.spriteSheet = ss["animate_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_right, new cjs.Rectangle(0,0,342,400), null);


(lib.tree_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flash0ai_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_left, new cjs.Rectangle(0,0,556,352), null);


(lib.real = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.real_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346,270);


(lib.pose_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw+KnQgOgBgNgIQgbgQAGggQAOg9BDgbQAzgVAbgbQAkglBKg2IAFgFQANggAmgXIBBgoQAYgSA8gmQANgJAdgKQAdgKAMgIQAmgXBHg0QA+gsBKhMIB8iCQApgqA4ggQAjgUAlgrQBMhcBugbQANgDAGgGQAHgHAEgMQAQg6AKgcQARguAVgjQAPgZANgMQATgRAbgGIAygIQAegFATgHQAHgDACACQAWAMAbgJQAPgFAegNQAdgJAVABQAZACAVARIAfAaQASAPALANQAQAVAcATIA0AeIAKAFQAHACAEgFQAIgGgGgPQgCgGgDgQQgCgPgEgHQgJgPARgJIArgWIAIgDQAFgBABgCQAKgWARgCQAMgCAXAKQAGACAHgDQAZgLAlAGIA9AJQAPABAJAMQAlAvANAaQAWAsgFAsQgCAUgKAUQgGALgRAYQgXAggZANQgeAOglgIQgUgFgPAPQgPAOAAAWQgBBIAIArQAKA/gCAuQgCAuAJA5IATBnQADAMACAaQABAOgLAHQgEACgRAFQgRAFgJANQgGAKgGAUQgLAqgKA7IgPBmQgIAsAXAgQAWAgA0AXQAPAHAgAIQAfAIAQAIIAMAFQAGADgBAHQgBAMgSACIhMAGQgigCgvADIhLAFIgmABQgXgBgIgJQgHgKAHgVQAUhEAChfQABg3gDhtQAAgMgFgQIgJgaQgMgoAAhHIgBgNQgBgHgEgFQgHgKgGAAQgHgBgHALQg0BOgYAnQgJAOgKADQgKADgQgHIhIggQgugUgZgOQgTgKgQgEQgSgFgUACQhcAKhxgaQg0gMgbgUQgXgSghAHQiCAchYBCIhzBVIhyBWIhZBBQg1AnggAgQgTATgfAXIg0AnQgIAGgGgBQgGgBgGgHIgYgZQgPgPgHgLQgKgQgTAIIhdAsQg4AagnAOQgTAHgDANQgFAXgaAUQggAZgHAMQgGALgPAAIgBAAgANXmRQgQALgEANQgFARgBAcIgEA/QgEAkgJAbQgKAcAgAAQANAAAEgGQAFgGgDgNQgThUBChAIAPgOQAHgKgDgKQgDgKgMgGQgPgEgHgDIgGgBQgJAAgMAIgAFGodQgEACgNAPQgFAGgFAOQgFAOgFAGQgPATAKALQAHAGAIgEIAOgJIAqghQAZgVAUgHQALgDgDgLQgDgKgLADQgJACgNgBIgUgCIgEAAQgQAAgGADg");
	this.shape.setTransform(113.6,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227.3,135.8);


(lib.pose_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABhMXIghgEQgTgCgNgEQgYgHghgDIg6gDQgdgCgHgHQgGgHABgcQACgqgJg4IgThhIgFgYQgDgWgJgIQgJgIgXAAIgUgBQgaAAACgcQAHhBADhhIAFiiQADg5gDhmQgChxABgwQABgigSgUQgSgUgjgDQgOgCgSgGIgfgLQhpgnhogGIhlgEQg8gDgpgHQhMgNgjgMQgPgFgHAAQgqgCgBgnQgBgMgGgGQgGgFgMgDQhPgRhtAPQguAFgdgMQgggOgdAVQgLAIgGgEQgEgDgCgMQgFgcAVgZQAUgYAegBQAPgBAcACQAaABARgFQAKgDANAGIATAOQATAPAbAAQAOABAhgGQAvgKAVABQAfAAAPgWQAGgJAJgCQAGgCAMACQAvAJBdAOQASADAYAIIAoANIAqAOQAYAIAUAAQC3ACBpgKIBPgIQAtgDAhADQAMABAwAKQAlAHAYgBQAFAAACACQAPARAVABQAQACAYgJIAHgBQAFAAABgBQAMgQAfgMQAkgOALgLQApglBAAAQAvAAAigeQAigeAHgvQAEgcAWgYIAsgmQAdgYAtAJQAnAIAkAeQAZAUAHAgQAEAYgFAmIgDANQgDAHABAFQACAbgEAOQgGAUgTAOQgMAIAEAOQAFANAPADIBfARQA2AIArgKQAbgGAjADQAUACAqAIQA6AKBcgGQANgBAIgHQASgQAegJQASgGAjgIQASgFgGATQgEANAGAFQAFAFANAAIAoAAQAWABAIAOQAGANgHAVQgGARgKAFQgIAEgRgDQgHgBgEAEQgEAFADAIQAFAMgFAEQgEAEgKgEQgRgGgxgEQgqgEgXgOQgGgEgJAAIgRADQh/AhhmAAQgdAAg4gJQg4gKgdAAQgKAAgXgDIghgDQgbAAgigFIg8gLQgdgGgXARQgNAJgXAdQgIAKgJATIgQAeQgeAwg4AFQgrAFgcASQgMAGgaAGQgbAGgMAGQgbAOgpAGQgvAFgXAEQgLADgGAHQgFAGgCANQgLBIgGAjQgLA8gPAsQgEANAAASIABAeQAAA4gJAbQgDAJACALIAEAUQAOBKgFBbQgDBDAAAoQABA7AIAwQAHAqAqAqQAqArAlACQAIAAAKAIIAQAMQAHAEgFAHQgEAGgIAAIgEAAg");
	this.shape.setTransform(132.3,79.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.6,158.3);


(lib.pose_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANMPbIgugDQgagCgTgFQgXgFglADQguAEgNgBQg0gEARgqQAJgVADgbIACgxQACgkAAhIQAAgNgGgVQgIgZgBgKQgDgagIgkIgPg+QgCgKgIgDQgFgCgLAAIg9ACQghACgbAIQhWAbhqgIQgTgCgXAIIgoAOQgZAHgjAVIg4AhQgdAPglAOIhFAZQgPAFghAQQgdAOgSAFQgfAIgwATQg6AXgUAHQhTAYgpAPQgIADgYAFQgUAEgLAGQgNAGgLgUQgRgegKgFQgLgEggALQgrAQgcAMQgWAJgIATQgHATAKAWIAHAQQASA1AxALQglARgzgFQgVgBgSgRQgMgLgOgXQgagqgUgTQgZgZAbgcQAagYAmgKQAYgHAfgTIA1gfIAFgEIAFgEQAVgEASgOQAMgLARgWQAJgLAVgHIAlgJQASgGA+gOQAxgLAdgNIAHgCQAtAEA1gaQAegOA7ghQAugUAzgjQAOgJAGgHQAIgKACgNIACgEQALgLAXglQAUgfARgMQAegTASghQAMgUAPgtQAFgOgHgVIgRghIgdg2QgRgegSgUQgDgDgBgGIgBgKQgDgSgLACQgNADADASQAKBTAABUIAAADIAAASQgBAKgKABQgJACgFgJIgIgRQgthoAOiFQACgQAAgRQAAgXgMgQQgMgRgWgCQghgDgVgUQgSgQgOghQgSgrARgzQARg0ApgXQAMgHAUADQAYADAIgBQARgDAdAIQAgAJANgBQAJAAANAMQAQAPAFADQATAKAKgFQALgFgBgVQAAgQAJgcQAKgdgBgQIACgaQACgRgCgKQgEgfAGgmQADgTAMgvQAJgpAFhPQAAgGAGgNQALgYgMgjQgLghAAgYQgBgfAQgaQAEgHAAgJIAAgQQABgOAEgGQAGgHAOAAQAPgBAGAGQAGAFAAAOQAAARAGABQAVAEAHAVQAEAYAGAKQAEAIgBAFQgGANgIArQgGAlgPASQgJAMgCAUIAAAjIACBtQAAA/gHAtQgOBOgFCHQgBAWgHAeIgMA1QgHAcAHATQAHATAXAPIApAbQAYAQAPAQQAUAUAPAtQAOAmABArQACAkgIAuQgEAVAAAhIAAA3QgBAUAWgBIBZgDQAngCA4ABIBeACQATAAAaAHIAtALQAPADAKAQQAGAKAHAWQAMAmANBDIANA4QAHAhADAXQABAJgEAFQgDAEgKADQgoAJgLAPQgJAMgEAlIgKBeQgEAlAJAYQALAdAfARIAxAdQAdAPAZADQAVABgCAOQgBAIgIABIgFAAIgJAAgAg6iGQgFADABAHQAFAZAVAHQAHACACgGIACgKQAAgbgWgDIgEgBQgEAAgDADg");
	this.shape.setTransform(86.7,98.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.5,197.5);


(lib.pose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Az5MWQgNgBgEgIQgEgIAKgJQARgPAqgxQAjgpAagTIArgaQAZgPAOgOQAIgKArgmQAggeAQgXQASgbAmgeIA/gyQATgQAegRIAzgeQBAgnA2g8QAXgaAfgpIA0hFQBIhdBFgtQBAgpAig0QAVgfAhgWQAagRApgQQBVggAhgPQA/geAugiQBEgzBNgVIA1gQQAfgKAVgFQBEgPA5gqQAHgGAGAAQAUACAggJQAkgJAOgBQALAAAOgJQASgLAFgCQAXgIAIgBQAxgFA7gTIBngnQAUgHAbgSIAtgdQAUgMAdgLIAygRIC2hAQAQgGAWgBIAmgBQAPAAgBASQACAPAAAHQgBANgNADIguARQgcAJgXgGQgbgHgeAPQgIAEgqAbQhWA4heA4QgUAMgnAOQgrAPgRAJIhBAfQgMAGABAJQAAANAPABQAMACARAIQAVALAHACQAUAHAMAVQAEAIALAeQAgBchCBTQgMAQgXALQgMAHgdAKQgLAEgPgIQgWgNgDgBQgZgHgNAIQgMAJgCAZQgGA8AgBPQAjBZgMBHQgIAsAOAmQALAgAAAfQAAAOgLAIQgKAGgOABQgSABgIAJQgGAIgEARQgUBxAHBkQADAhASAYQAQAVAeARQBAAkArAKQAXAEAHAEQAQAJgDAUQgDASgQACIgdgBIhPABIAAABIhUAAQgTAAgIgDQgOgFgFgQQgCgFgHgCIgOgCIgmgFQgigGAJgfQARg7gBhVQAAgUgDgNQgZhfgEiGQgBgLgJghQgHgcADgSQABgHgHgDQgFgCgIAAQgXABgwgNQgNgDgRACIgdAFQhaAQgrAEQhLAGg8gLIg/gLQgmgGgZgIQg9gTguAFQhlALhRBHQgbAYhuBXQhAA0iCBvQgXATg7A3QgLAKgJABQgKACgLgLQgIgHgNgHIgWgOQgRgLgVALIg6AcQgiARgXANQgcAQgOAQQgSAVAAAdQAAAKgGAGQgGAHgKAAQgRABgPARQgUAXgeAHQgMADgPAAQgOAAgRgDgAIUjYQgNAGgFAOIgEAaIACAjIABAIQAAAFAEACQAIAEAKgKIA1g2QAIgIgBgHQgBgGgLgHQgOgJgKgDIgJgBQgJAAgJAFg");
	this.shape.setTransform(129.2,79.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.4,158.6);


(lib.logi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.點陣圖於LOGO();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logi, new cjs.Rectangle(0,0,519,413), null);


(lib.flower_in_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,81);


(lib.flower_in_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,75);


(lib.flower_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,77);


(lib.bg_empty_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg_empty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2047,300);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.logi();
	this.instance.parent = this;
	this.instance.setTransform(35.3,52.4,0.324,0.324,0,0,0,259.4,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AXXFRQgLgEgKgJIAPgRQAGAGAJAEQAIADAIAAQAKAAAFgDQAGgEAAgHQAAgFgDgCQgCgDgEgCIgKgFIgRgHQgGgDgGgEQgGgEgEgHQgEgGAAgKQAAgKAGgIQAGgIAJgFQAKgFANAAQALAAAKAEQAKAEAIAIIgNAQQgFgFgHgDQgGgCgIAAQgJAAgEADQgFAEAAAGQAAAEACADIAIAFIAJAEIARAHQAMAFAGAIQAHAIAAANQAAALgFAIQgGAJgKAFQgKAFgPAAQgNAAgMgFgAVkFQQgLgGgGgNQgGgNAAgVIAAhFIAZAAIAABHQAAAOADAHQADAIAFADQAGAEAHgBQAHABAGgEQAFgDAEgIQACgHAAgOIAAhHIAYAAIAABFQAAAVgFANQgGANgLAGQgKAGgQAAQgPAAgLgGgATgFOQgNgIgHgOQgHgPAAgUQAAgVAHgOQAHgPANgHQAMgIARAAQARAAAMAIQANAHAHAPQAHAOAAAVQAAAUgHAPQgHAOgNAIQgMAIgRAAQgRAAgMgIgATnD1QgIALgBAVQABANADAKQAEAKAHAFQAHAFAJAAQAJAAAHgFQAHgFAEgKQADgKAAgNQAAgVgIgLQgIgLgOAAQgOAAgIALgAElFPQgNgIgIgOQgIgOAAgVQAAgVAIgPQAIgOANgIQAOgIARAAQAJAAAHACIANAGIAKAIIgOAQQgEgEgGgDQgGgDgIAAQgLAAgIAFQgIAFgEAKQgFAJAAAOQAAAUAKAMQAJALATAAIAIgBIAHgDIAAgZIgWAAIAAgUIAsAAIAAA4QgGAGgLAFQgKAEgNAAQgSAAgNgHgAi3FPQgNgIgIgOQgIgOAAgVQAAgVAIgPQAIgOAOgIQAOgIAQAAQAJAAAIACQAHADAFADQAGAEAEAEIgNAQQgFgEgGgDQgFgDgJAAQgKAAgIAFQgIAFgFAKQgEAJAAAOQAAAUAJAMQAJALATAAIAJgBIAHgDIAAgZIgXAAIAAgUIAtAAIAAA4QgHAGgKAFQgKAEgOAAQgRAAgOgHgAk8FOQgMgIgIgOQgHgPAAgUQAAgVAHgOQAIgPAMgHQANgIARAAQAQAAANAIQAMAHAHAPQAHAOABAVQgBAUgHAPQgHAOgMAIQgNAIgQAAQgRAAgNgIgAk1D1QgIALAAAVQAAANAEAKQAEAKAGAFQAHAFAKAAQAJAAAHg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");
	this.shape.setTransform(238.4,48.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-48.7,-14.4,455.1,133.8), null);


(lib.flower03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flower_in("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39,38.5,1,1,0,0,0,39,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},19).to({rotation:345,y:38.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,77);


(lib.flower02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flower_in_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38,37.5,1,1,0,0,0,38,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},19).to({rotation:345},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,75);


(lib.flower01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.flower_in_03("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39,40.6,0.556,0.556,0,0,0,39,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90},14).to({rotation:0,y:40.7},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.4,18,43.4,45);


// stage content:
(lib.animate = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flower3
	this.instance = new lib.flower03();
	this.instance.parent = this;
	this.instance.setTransform(263.5,126.4,1,1,0,0,0,39,38.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({guide:{path:[263.6,126.4,281.3,151.1,303.5,171.6,332.3,198.2,363.2,214,374.3,219.6,387.2,220.8,393.1,221.4,399.1,222,401.1,222,403.1,222,447.7,231.4,482,208.4,502.2,194.9,517.7,173.2,532.5,152.6,553.1,140,586.1,124.1,619.2,108.1,677.2,108.1,735.2,108.1,753.2,114.1,771.2,120,773.7,120,776.2,120,776.2,120,776.2,120]},alpha:0.102},33).to({_off:true},1).wait(25).to({_off:false,x:263.5,y:126.4,alpha:1},0).to({guide:{path:[263.6,126.4,281.3,151.1,303.5,171.6,332.3,198.2,363.2,214,374.3,219.6,387.2,220.8,393.1,221.4,399.1,222,401.1,222,403.1,222,447.7,231.4,482,208.4,502.2,194.9,517.7,173.2,532.5,152.6,553.1,140,586.1,124.1,619.2,108.1,677.2,108.1,735.2,108.1,753.2,114.1,771.2,120,773.7,120,776.2,120,776.2,120,776.2,120]},alpha:0.102},32).to({_off:true},1).wait(39).to({_off:false,x:263.5,y:126.4,alpha:1},0).to({guide:{path:[263.6,126.4,281.3,151.1,303.5,171.6,332.3,198.2,363.2,214,374.3,219.6,387.2,220.8,393.1,221.4,399.1,222,401.1,222,403.1,222,447.7,231.4,482,208.4,502.2,194.9,517.7,173.2,532.5,152.6,553.1,140,586.1,124.1,619.2,108.1,677.2,108.1,735.2,108.1,753.2,114.1,771.2,120,773.7,120,776.2,120,776.2,120,776.2,120]},alpha:0.102},33).to({_off:true},1).wait(25).to({_off:false,x:263.5,y:126.4,alpha:1},0).to({guide:{path:[263.6,126.4,281.3,151.1,303.5,171.6,332.3,198.2,363.2,214,374.3,219.6,387.2,220.8,393.1,221.4,399.1,222,401.1,222,403.1,222,447.7,231.4,482,208.4,502.2,194.9,517.7,173.2,532.5,152.6,553.1,140,586.1,124.1,619.2,108.1,677.2,108.1,735.2,108.1,753.2,114.1,771.2,120,773.7,120,776.2,120,776.2,120,776.2,120]},alpha:0.102},32).to({_off:true},1).wait(2));

	// flower2
	this.instance_1 = new lib.flower02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(449.4,105.2,1,1,0,0,0,38,37.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({guide:{path:[449.4,105.3,469.8,123.2,490.1,141.1,561.1,156.1,632.1,171.1,679.3,198.2,726.4,225.3]},alpha:0.102},39).to({_off:true},1).wait(30).to({_off:false,x:449.4,y:105.2,alpha:1},0).to({guide:{path:[449.4,105.3,469.8,123.2,490.1,141.1,561.1,156.1,632.1,171.1,679.3,198.2,726.4,225.3]},alpha:0.102},33).to({_off:true},1).wait(27).to({_off:false,x:449.4,y:105.2,alpha:1},0).to({guide:{path:[449.4,105.3,469.8,123.2,490.1,141.1,561.1,156.1,632.1,171.1,679.3,198.2,726.4,225.3]},alpha:0.102},39).to({_off:true},1).wait(30).to({_off:false,x:449.4,y:105.2,alpha:1},0).to({guide:{path:[449.4,105.3,469.8,123.2,490.1,141.1,561.1,156.1,632.1,171.1,679.3,198.2,726.4,225.3]},alpha:0.102},33).to({_off:true},1).wait(7));

	// flower1
	this.instance_2 = new lib.flower01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.1,129.2,1,1,0,0,0,39,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[380,129.2,383,153.6,386,178.1,432.6,197.6,479.1,217.1,547.9,209.1,616.6,201.1]},alpha:0.102},43).to({_off:true},1).wait(41).to({_off:false,x:380.1,y:129.2,alpha:1},0).to({guide:{path:[380,129.2,383,153.6,386,178.1,432.6,197.6,479.1,217.1,547.9,209.1,616.6,201.1]},alpha:0.102},31).to({_off:true},1).wait(14).to({_off:false,x:380.1,y:129.2,alpha:1},0).to({guide:{path:[380,129.2,383,153.6,386,178.1,432.6,197.6,479.1,217.1,547.9,209.1,616.6,201.1]},alpha:0.102},43).to({_off:true},1).wait(41).to({_off:false,x:380.1,y:129.2,alpha:1},0).to({guide:{path:[380,129.2,383,153.6,386,178.1,432.6,197.6,479.1,217.1,547.9,209.1,616.6,201.1]},alpha:0.102},31).to({_off:true},1).wait(12));

	// tree_right
	this.instance_3 = new lib.tree_right();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1907.7,98.7,0.75,0.75,-15,0,0,171.1,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(260));

	// tree_left
	this.instance_4 = new lib.tree_left();
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.8,87.8,0.842,0.842,0,0,0,277.9,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(260));

	// text
	this.instance_5 = new lib.text();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1126.3,144,1,1,0,0,0,238.1,48.5);
	this.instance_5.alpha = 0.102;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78).to({_off:false},0).to({alpha:1},21).wait(161));

	// real
	this.instance_6 = new lib.real("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1504.2,143,1,1,0,0,0,173,135);
	this.instance_6.alpha = 0.102;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).to({x:608,alpha:1},16).wait(191));

	// 圖層 9
	this.instance_7 = new lib.pose_4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1348.4,159.5,1,1,0,0,0,113.6,67.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).to({regX:113.7,regY:68,scaleX:1.59,scaleY:1.59,x:1348.6,y:159.7,alpha:0.102},17).to({_off:true},1).wait(212));

	// pose4
	this.instance_8 = new lib.pose_4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1133.4,159.5,1,1,0,0,0,113.6,67.9);
	this.instance_8.alpha = 0.102;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({x:1348.4,alpha:1},10).wait(24).to({startPosition:0},0).to({alpha:0.102},6).to({_off:true},1).wait(199));

	// 圖層 8
	this.instance_9 = new lib.pose_3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1146.5,148.3,1,1,0,0,0,132.3,79.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({_off:false},0).to({regY:79.2,scaleX:1.26,scaleY:1.26,y:148.4,alpha:0.102},6).wait(1).to({regY:79.1,scaleX:1,scaleY:1,y:148.3,alpha:1},0).to({regY:79.2,scaleX:1.5,scaleY:1.5,y:148.4,alpha:0.102},17).to({_off:true},1).wait(212));

	// pose3
	this.instance_10 = new lib.pose_3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(967.7,166.8,1,0.766,0,0,0,132.3,79.1);
	this.instance_10.alpha = 0.102;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).to({scaleY:1,x:1146.5,y:148.3,alpha:1},10).wait(31).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({alpha:0.102},6).to({_off:true},1).wait(196));

	// pose2
	this.instance_11 = new lib.pose_2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(941.1,128.7,1,1,0,0,0,86.7,98.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,y:128.8,alpha:0.102},7).to({_off:true},1).wait(6).to({_off:false,scaleX:1,scaleY:1,y:128.7,alpha:1},0).to({regY:98.6,scaleX:1.61,scaleY:1.61,y:128.6,alpha:0.102},17).to({_off:true},1).wait(212));

	// pose2
	this.instance_12 = new lib.pose_2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(777.1,155.2,1,0.732,0,0,0,86.7,98.7);
	this.instance_12.alpha = 0.102;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).to({scaleY:1,x:941.1,y:128.7,alpha:1},9).wait(38).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({alpha:0.102},6).to({_off:true},1).wait(193));

	// pose1
	this.instance_13 = new lib.pose_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(725.2,148.2,1,1,0,0,0,129.2,79.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({regY:79.4,scaleX:1.17,scaleY:1.17,x:729.7,y:145.5,alpha:0.102},7).to({_off:true},1).wait(12).to({_off:false,regY:79.3,scaleX:1,scaleY:1,x:725.2,y:148.2,alpha:1},0).to({regY:79.4,scaleX:1.46,scaleY:1.46,x:729.8,y:145.5,alpha:0.102},17).to({_off:true},1).wait(212));

	// pose1
	this.instance_14 = new lib.pose_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(549.2,148.2,1,1,0,0,0,129.2,79.3);
	this.instance_14.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:725.2,alpha:1},10).wait(44).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({alpha:0.102},6).to({_off:true},1).wait(190));

	// bg
	this.instance_15 = new lib.bg_empty_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1023.5,150,1,1,0,0,0,1023.5,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(986.2,70.5,2107.6,379.5);
// library properties:
lib.properties = {
	width: 2047,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/animate_atlas_.png?1497496662790", id:"animate_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;