// JavaScript Document
//浏览器适配
var iBase = {
	flag:false,
	setOpacity:function(ele,opacity){
		if (ele.style.opacity != undefined) {
			ele.style.opacity = opacity / 100;
		} else {
			ele.style.filter = "alpha(opacity=" + opacity +")";
		}
	}
}
/*检验Claas*/
function hasClass (element,className) {
	var reg = new RegExp('(\\s|^)' + className +'(\\s|$)');
	return reg.test(element.className);
}
/*添加Claas*/
function addClass (element,className) {
	if (!hasClass(element,className)){
		element.className += " "+className;
	};
}
/*移除Claas*/
function removeClass (element,className) {
	if (hasClass(element,className)){
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		element.className = element.className.replace(reg,' ');
	}
}

/* jQuery fadeIn效果*/
function fadeIn(element,speed,opacity){
	speed = speed || 20;
	opacity = opacity || 100;

	element.style.display = 'block';
	iBase.setOpacity(element,0);

	var startOpa = 0;
	(function(){
		iBase.setOpacity(element,startOpa);
		startOpa += 5;
		if (startOpa <= opacity) {
			setTimeout(arguments.callee,speed)
		} else if (startOpa > opacity) {
			element.style.display = 'block';
		}
	})();
}
/* jQuery fadeOut效果*/
function fadeOut(element,speed,opacity){
	speed = speed || 20;
	opacity = opacity || 0;

	var startOpa = 100;
	(function(){
		iBase.setOpacity(element,startOpa);
		startOpa -= 5;
		if (startOpa >= opacity) {
			setTimeout(arguments.callee,speed);
		} else if (startOpa < 0) {
			element.style.display = 'none';
		}
	})();
}

/*绑定鼠标点击事件实现换页效果*/
(function changePage () {
	var doc = document,
		list = doc.getElementById('page-change'),
		page_link_1 = doc.getElementById('page_link_1'),
		page_link_2 = doc.getElementById('page_link_2'),
		page_link_3 = doc.getElementById('page_link_3'),
		page1 = doc.getElementById('page1'),
		page2 = doc.getElementById('page2'),
		page3 = doc.getElementById('page3');

	if (list) {
		list.addEventListener("click",function(event) {
			var target = event.target;
			switch(target.id){
				case "page_link_1":
					removeClass(page_link_2,"active");
					removeClass(page_link_3,"active");
					addClass(page_link_1,"active");
					fadeOut(page2);
					fadeOut(page3);
					fadeIn(page1);
					break;
				case "page_link_2":
					removeClass(page_link_1,"active");
					removeClass(page_link_3,"active");
					addClass(page_link_2,"active");
					fadeOut(page1);
					fadeOut(page3);
					fadeIn(page2);
					break;
				case "page_link_3":
					removeClass(page_link_1,"active");
					removeClass(page_link_2,"active");
					addClass(page_link_3,"active");
					fadeOut(page1);
					fadeOut(page2);
					fadeIn(page3);
					break;
			}
		});
	}	
})();
/*绑定鼠标事件实现hover效果*/
(function hoverGallery () {
	var item = document.getElementsByClassName('gallery-item');

	if (item) {
		for (var i = 0,len = item.length; i < len; i++) {
			item[i].addEventListener("mouseover",function(event){
				var target = event.currentTarget,
					overlay = target.querySelector('.overlay');
					overlay.style.display = 'block';
			});
			item[i].addEventListener("mouseout",function(event){
				var target = event.currentTarget,
					overlay = target.querySelector('.overlay');
					overlay.style.display = 'none';
			});
		};
	};
})();


(function hoverTeam(){
	var team = document.getElementsByClassName('team-item');

	if (team) {
		for (var i = 0,len = team.length; i < len; i++) {
			team[i].addEventListener("mouseover",function(event){
				var target = event.currentTarget,
					overlay = target.querySelector('.overlay');
					overlay.style.display = 'block';
			});
			team[i].addEventListener("mouseout",function(event){
				var target = event.currentTarget,
					overlay = target.querySelector('.overlay');
					overlay.style.display = 'none';
			});
		};
	};
})();

(function hoverService(){
	var services = document.getElementsByClassName('services-item'),
		description = document.querySelector('.content-description');

	if (services && description) {
		for (var i = 0,len = services.length; i < len; i++) {
			services[i].addEventListener("mouseover",function(event){
				var target = event.currentTarget,
					overlay = target.querySelector('.hexagon-in2'),
					content = '<p>' + overlay.getAttribute('data-content') + '</p>';

					description.innerHTML = content;				
			});
			services[i].addEventListener("mouseout",function(event){
				description.innerHTML = '';
			});
		};
	};
})();

