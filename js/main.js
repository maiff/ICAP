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
   		showOrNo([$('#head'),$('#look-container'),$('#e-mask'),$('#e-book-item-container')],
   			[$('#me')]);
   		
	});
Q.reg('look',function(){
		showOrNo([$('#h-logo'),$('#time')],
			[$('#head')]);
		$('#h-title').text('发现');

   		showOrNo([$('#me'),$('#e-mask'),$('#e-book-item-container')],
   			[$('#look-container')]);
	});
Q.reg('book',function(){
		$('#h-title').text('电子病历本');
		showOrNo([],[$('#h-logo'),$('#time')]);
   		showOrNo([$('#me'),$('#look-container'),$('#e-book-item-container')],
   			[$('#head'),$('#e-mask')]);
   		var date=new Date();
   		var str=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
   		$('#time').text(str);
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

$('.confirm').click(function(){
	showOrNo([$('#e-mask')],
			[$('#e-book-item-container')]
		)
});
$('.cancel').click(function(){
	showOrNo([$('#e-mask')],
			[$('#e-book-item-container')]
		)
})



	//showOrNo([$('#head'),$('#e-book')],[$('#me')])

