$(function() {
	window.addEventListener('load', function() {
		if( !localStorage.getItem('start') ) {
			localStorage.setItem('start', 'on');
			setTimeout(function(){$('.start').fadeIn(100);},0); //ロゴ含め背景をフェードイン！
			setTimeout(function(){$('.start-content-imgs img, .start-content5').fadeIn(2200);},500); //ロゴをフェードイン!
			setTimeout(function(){$('.start').fadeOut(1500);},3000); //ロゴ含め背景をフェードアウト！
		}
		// テスト用
		// this.localStorage.clear();
	}, false);
});