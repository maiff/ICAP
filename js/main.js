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
};

var disapperAll=function(){
	var all_module=[$('#e-book'),$('#society-container')
					,$('#look-container'),$('#me'),
					$('#word-detail'),$('.online-test'),$('.spare'),$('.zhuanjiaquan')];
	for(var i=0,len=all_module.length;i<len;i++){
		all_module[i].css('display','none');
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
   		disapperAll();
   		showOrNo([$('#head')],[$('#me')]);
   		
	});
Q.reg('society',function(){
		disapperAll();
		showOrNo([$('#h-logo'),$('#time')],
			[$('#head')]);
		$('#h-title').text('社区');
		$('#head').addClass('h-society');
   		showOrNo([],[$('#society-container')]);
	});
Q.reg('look',function(){
		disapperAll();
		showOrNo([$('#h-logo'),$('#time')],
			[$('#head')]);
		$('#h-title').text('发现');
		$('#head').removeClass('h-society');
   		showOrNo([],[$('#look-container')]);
	});
Q.reg('book',function(){
		disapperAll();
		$('#head').removeClass('h-society');
		$('#h-title').text('电子病历本');
		showOrNo([],[$('#h-logo'),$('#time')]);
   		showOrNo([],[$('#head'),$('#e-book')]);
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
    	//$('a[href=#!'+L+'] img').attr('src=')
 

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


//点击进入文章细节
$('#click-test').click(function(){
	disapperAll();
	showOrNo([$('#head')],[$('#word-detail')]);
});
$('#word-detail').click(function(){
	showOrNo([$('#word-detail')],[$('#head'),$('#society-container')])
})

	//showOrNo([$('#head'),$('#e-book')],[$('#me')])

//disapperAll();

//点击进入在线评测
$('.l-three').click(function(){
	disapperAll();
	showOrNo([],
		[$('.spare'),$('.online-test')])
	$('#head').addClass('h-society');
});

//进入专家圈
$('.l-first').click(function(){
	disapperAll();
	$('#h-title').text('专家圈');
	showOrNo([$('nav')],
		[$('.zhuanjiaquan')]);
});

//返回
$('#return1').click(function(){
		disapperAll();
		showOrNo([$('#h-logo'),$('#time')],
			[$('#head')]);
		$('#h-title').text('发现');
		$('#head').removeClass('h-society');
   		showOrNo([],[$('#look-container'),$('nav')]);
})


//点击专家头像
$('.zj-logo').click(function(){
	disapperAll();
	showOrNo([$('#zjq-logo'),$('.zhuanjiaquan')],
			[$('#zhuanjiaziliao')]);
	$('#h-title').text('专家资料');
});

//返回
$('#return2').click(function(){
	$('#h-title').text('专家圈');
	showOrNo([$('#zhuanjiaziliao')],
		[$('.zhuanjiaquan')]);
})
//disapperAll();
$('.cudayundong').click(function(){
	$("#task-container").css('display','block');
	$("#task-container").animate({top:'0'},'slow');

})

var xiaoshi=function(){
	$("#task-container").animate({top:'100%'},'slow',function(){
		$(this).css('display','none')
	});	
}
$(".task-jiantou").click(xiaoshi);
var test_t=document.getElementById('task-container');
touches(test_t,'swipedown',xiaoshi);
 function touches(obj,direction,fun){  
            //obj:ID对象  
            //direction:swipeleft,swiperight,swipetop,swipedown,singleTap,touchstart,touchmove,touchend  
            //          划左，    划右，     划上，   划下，    点击，    开始触摸， 触摸移动， 触摸结束  
            //fun:回调函数  
            var defaults = {x: 5,y: 5,ox:0,oy:0,nx:0,ny:0};  
            direction=direction.toLowerCase();  
            //配置：划的范围在5X5像素内当点击处理  
            obj.addEventListener("touchstart",function() {  
                defaults.ox = event.targetTouches[0].pageX;  
                defaults.oy = event.targetTouches[0].pageY;  
                defaults.nx = defaults.ox;  
                defaults.ny = defaults.oy;  
                if(direction.indexOf("touchstart")!=-1)fun();  
            }, false);  
            obj.addEventListener("touchmove",function() {  
                event.preventDefault();  
                defaults.nx = event.targetTouches[0].pageX;  
                defaults.ny = event.targetTouches[0].pageY;  
                if(direction.indexOf("touchmove")!=-1)fun();  
            }, false);  
            obj.addEventListener("touchend",function() {  
                var changeY = defaults.oy - defaults.ny;  
                var changeX = defaults.ox - defaults.nx;  
                if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>defaults.y){  
                    //左右事件  
                    if(changeX > 0) {  
                        if(direction.indexOf("swipeleft")!=-1)fun();  
                    }else{  
                        if(direction.indexOf("swiperight")!=-1)fun();  
                    }  
                }else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>defaults.x){  
                    //上下事件  
                    if(changeY > 0) {  
                        if(direction.indexOf("swipetop")!=-1)fun();  
                    }else{  
                        if(direction.indexOf("swipedown")!=-1)fun();  
                    }  
                }else{  
                    //点击事件  
                    if(direction.indexOf("singleTap")!=-1)fun();  
                }  
                if(direction.indexOf("touchend")!=-1)fun();  
            }, false);  
        }  