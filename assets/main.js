var _content = []; //临时存储li循环内容
var moreload1 = {
	_default:10, //默认显示图片个数
	_loading:10, //每次点击按钮后加载的个数
	init:function(){
		var lis = $(".moreload1 .hidden li");
		$(".moreload1 ul.list").html("");
		for(var n=0;n<moreload1._default;n++){
			lis.eq(n).appendTo(".moreload1 ul.list");
		}
		// $(".moreload1 ul.list img").each(function(){
		// 	$(this).attr('src',$(this).attr('realSrc'));
		// })
		for(var i=moreload1._default;i<lis.length;i++){
			_content.push(lis.eq(i));
		}
		$(".moreload1 .hidden").html("");
	},
	loadMore:function(){
		var mLis = $(".moreload1 ul.list li").length;
		for(var i =0;i<moreload1._loading;i++){
			var target = _content.shift();
			if(!target){
				$('.moreload1 .more').html("<p>All loaded...</p>");
				break;
			}
			$(".moreload1 ul.list").append(target);
			// $(".moreload1 ul.list img").eq(mLis+i).each(function(){
			// 	$(this).attr('src',$(this).attr('realSrc'));
			// });
		}
	}
}
moreload1.init();
