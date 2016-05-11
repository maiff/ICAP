//导航变色
var _until={
	choose:$('.nav-home')
}
$('.nav-item').click(function(){
	var _t;
	if(_until.choose){
		_t=_until.choose.children('img').attr('src').slice(0,-8);
		_until.choose.children('img').attr('src',_t+'.png');
	}
	_until.choose=$(this);
	var oldSrc=$(this).children('img').attr('src').slice(0,-4);
	$(this).children('img').attr('src',oldSrc+'Blue.png');
	//console.log( oldSrc)
});


Q.reg('me',function(){
   		// $('body p').text('111')
	});
Q.reg('look',function(){
   		
	});

// .reg([
//   		['about',function(){
//     		M.innerHTML='我是卜卜口';
//   		}],
//   		['friend',function(){
//    			 M.innerHTML='我的朋友们都在这~';
//   		}]
//   	]);
	Q.init({
    	index:'me', /* 首页地址 */
    	pop:navchange=function(L){/* 每次有url变更时都会触发pop回调 */
    	/* L 为当前回调函数名称（目前仅支持关键字回调情况） */
    	//alert(L)
 

		}
	});