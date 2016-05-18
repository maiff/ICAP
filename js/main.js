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
					$('#yuyue'),$('#word-detail'),$('.online-test'),$('.spare'),$('.zhuanjiaquan'),$('#effect-task')];
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
    	var str='"#!'+L+'"';
    	
    	$('a[href='+str+']').click();
 

		}
	});

$('.jiazhang').click(function(){
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
	showOrNo([$('nav'),$('#peizhong')],
		[$('.zhuanjiaquan')]);
});

//返回
$('#return1').click(function(){
		disapperAll();
		showOrNo([$('#h-logo'),$('#time')],
			[$('#head')]);
		$('#h-title').text('发现');
		$('#head').removeClass('h-society');
   		showOrNo([],[$('#look-container'),$('nav'),$('#peizhong')]);
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
//滑动动画

//单选框点击
$('.choose-container img').click(function(){
		$(this).parent().children('img').attr('src','src/c-0.png');
		$(this).attr('src','src/c-1.png')
});


$('.task-last-img').click(function(){
	xiaoshi();
	showOrNo([$('#h-logo'),$('#time'),$('#e-book')],[$('#effect-task')]);
	$('#head').text('训练效果评估');
});

//粗大运动点击
$('.cudayundong').click(function(){
	
	showOrNo([$('#e-book-item-container'),$('#h-logo')],
		[$('#e-mask2')]
		);
	$('#h-title').text('粗大运动评估表')
	$('#save').css('display','inline-block')

})

$('#zishitijiao').click(function(){
	showOrNo([$('#e-mask2'),$('#save')],
		[$('#e-book-item-container'),$('#h-logo'),$('.tijiao')]);
	$('#h-title').text('电子病历本');
	$('.e-undone').text('完成');
	$('.e-undone').each(function(){
		$(this).removeClass('e-undone');
		$(this).addClass('e-done');
		$(this).parent().addClass('e-book-done');
	})
	$('.jiantou7').css('bottom','-10rem');
})

//快速预约
$('.zjzl-yy').click(function(){
	$('#return2').click();
	$('#return1').click();
	disapperAll();
	$('#head').addClass('h-society');
	$('#yuyue').css('display','block');
	$('#h-title').text('确认预约');
})



