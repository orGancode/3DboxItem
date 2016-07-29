$(function(){
		//console.log($('li').eq(0).offset().top);//72
		//console.log($('li').eq(1).offset().top);//152
		var uplimit =$('.container').offset().top
					+parseInt($('.container').css("border-width"))
					+parseInt($('.container').css("padding-top"))
					+parseInt($(".container ul").css("padding-top"))
					-$('li').height();
		var downlimit=$('.container').offset().top
					 +$('.container').height()
					 +parseInt($('.container').css("border-width"))
					 +parseInt($('.container').css("padding-top"))
					 +parseInt($(".container ul").css("padding-top"));
		//init all item
		function init(){
			$('li').each(function(){
				if($(this).offset().top < uplimit || $(this).offset().top > downlimit)
					$(this).attr('class',"hidden");
			});
		}
		init();


		//defined a timer to be a listener,watching the ul topoffset
		var ul_timer=setInterval(function(){
			var ul_top=$('.container ul').offset().top;

			setTimeout(function(){
				var u_d=$('.container ul').offset().top-ul_top;
				if(u_d!=0) scrolll(u_d);
			},10);
		},10);


		//when topoffset changed use this function
		function scrolll(agr){
			if(agr>0)//up,scroll up or up key
				{
					$('.container').removeClass('contaiNer').addClass('contaiMer');
					$('li[class="hidden"]').each(function(){
						if($(this).offset().top>=uplimit)
							$(this).addClass('shang').removeClass('hidden');
					});

					$('li').each(function(){
						if($(this).offset().top>=downlimit) $(this).attr('class','hidden');
					});
				}

			if(agr<0)//down
				{
					$('.container').removeClass('contaiMer').addClass('contaiNer');
					$('li[class="hidden"]').each(function(){
						if($(this).offset().top<=downlimit)
							$(this).addClass('xia').removeClass('hidden');
					});

					$('li').each(function(){
						if($(this).offset().top<=uplimit) $(this).attr('class','hidden');
					});
				}
		}

	})