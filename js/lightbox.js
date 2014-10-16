/*lightbox效果*/
(function lightbox(){
	var doc = document,
		imgs = doc.getElementsByClassName('overlay'),
		previousBtn = doc.querySelector('.lightbox-previous'),
		nextBtn = doc.querySelector('.lightbox-next'),
		closeBtn = doc.querySelector('.lightbox-close');

	if (imgs) {
		for (var i = 0,len = imgs.length; i < len; i++) {
			imgs[i].addEventListener("click",function(event){
				var target = event.currentTarget,
					img = target.querySelector('a'),
					src = img.getAttribute('href'),
					lightbox = document.getElementById('lightbox');

					event.preventDefault();
					addClass('body','blurred');
					lightbox.querySelector('img').setAttribute('src',src);
					lightbox.style.display = 'block';
					resizeImage();
			});
		};
	};

	if (closeBtn) {
		closeBtn.addEventListener('click',function(event){
			event.preventDefault();
			closeLightBox();
			return false;
		});
	};

	window.addEventListener('resize',function(){
		if (!doc.querySelector('#lightbox img')) {
			return false;
		};
		resizeImage();
	});

	if (nextBtn) {
		nextBtn.addEventListener('click',function(event){
			event.preventDefault();
			var currentIndex = getCurrentIndex();
			if(iBase.flag){
				return false;
			}
			iBase.flag = true;
			if (currentIndex >= imgs.length - 1) {
				imgs[0].click();
			} else{
				imgs[currentIndex + 1].click();
			};
		});
	};

	if (previousBtn) {
		previousBtn.addEventListener('click',function(event){
			event.preventDefault();
			var currentIndex = getCurrentIndex();
			if (iBase.flag) {
				return false;
			} 
			iBase.flag = true;
			if (currentIndex <= 0) {
				imgs[imgs.length - 1].click();
			} else{
				imgs[currentIndex - 1].click();
			};
		});
	};

})();

/*关闭lightbox*/
var closeLightBox = function(){
	var lightbox = document.getElementById('lightbox');
	lightbox.style.display = 'none';
	removeClass('body','blurred');
};

/*根据窗口大小调整图片位置*/
var resizeImage = function(){
	var img = document.querySelector('#lightbox img'),
		wWidth = window.innerWidth,
		wHeight = window.innerHeight,
		iHeight = img.height,
		iWidth = img.width;

	img.style.left = (wWidth - iHeight) / 2 + 'px';
	img.style.top = (wHeight - iHeight) / 2 + 'px';
	iBase.flag = false;
};

var getCurrentIndex = function(){
	var doc = document,
		overlay = doc.querySelectorAll('.overlay a'),
		img = doc.querySelector('#lightbox img'),
		imgList = [],
		currentIndex;

		for (var i = 0,len = overlay.length; i < len; i++) {
			if(overlay[i].getAttribute('href') == img.getAttribute('src')){
				currentIndex = i;
				break;
			} else {
				console.log('没有查到对应的元素！');
			}
		};
		return currentIndex;
};