//导航变色
	//消失出现
var showOrNo=function(){
	var arg1=arguments[0],arg2=arguments[1];
	for(var i=0,len1=arg1.length;i<len1;i++){
		arg1[i].css('display','none');
	}
	for(var j=0,len2=arg2.length;j<len2;j++){
		arg2[j].css('display','block');
	}
}
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
Q.reg('book',function(){
   		showOrNo([$('#me')],[$('#head'),$('#e-mask')])
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




	//showOrNo([$('#head'),$('#e-book')],[$('#me')])

