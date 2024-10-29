function nightDayHandler(self){
	// var target = document.querySelector('body');
	// // querySelectorAll은 노드 리스트를 반환한다. querySelctor는 노드를 반환한다. 이 노드는 객체 변수이다. 이 노드 안에는 프로퍼티들이 존재한다.
	// var alist = document.querySelectorAll('a');
	if (self.value === 'button using this keyword') {
		self.value = 'button using this keyword clicked';
		body.setBackgroundColor('black');
		body.setColor('white');
		links.setColor(alist, 'white');
	} else {
		self.value = 'button using this keyword';
		body.setBackgroundColor('white');
		body.setColor('black');
		links.setColor(alist, 'black');
	}
}


var target = document.querySelector('body');
var body = {
	setColor: function(color) {
		target.style.color = color;
	},
	setBackgroundColor: function(color) {
		target.style.backgroundColor = color;
	}
}

var alist = document.querySelectorAll('a');
var links = {
	setColor : function (alist, color) {
		for (var i = 0; i < alist.length; i++) {
			alist[i].style.color = color;
		}
	}
}

// var body = {
// 	setColor: function(color) {
// 		document.querySelector('body').style.color = color;
// 	},
// 	setBackgroundColor: function(color) {
// 		document.querySelector('body').style.backgroundColor = color;
// 	}
// }

// var links = {
// 	setColor : function (color) {
// 		for (var i = 0; i < document.querySelectorAll('a').length; i++) {
// 			document.querySelectorAll('a')[i].style.color = color;
// 		}
// 	}
// }