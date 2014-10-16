// JavaScript Document
(function hoverTeam(){
	var team = document.getElementsByClassName('team-item');

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
})();