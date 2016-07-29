$(function(){
		var containerT=$('.container').offset().top || document.getElementsByClassName('container')[0].offsetTop;
		var containerH=document.getElementsByClassName('container')[0].offsetHeight;
		var uplimit =containerT-document.getElementsByTagName('li')[0].clientHeight;
		var downlimit=containerH+containerT;
		
		function init(){
			$('li').each(function(){
				var $this=$(this);//var m=$this.get(0)转成dom对象
				var liTop=$this.get(0).getBoundingClientRect().top;
				if(liTop < uplimit || liTop > downlimit)//
					$(this).attr('class',"hidden");
			});
		}
		init();

		var ul_timer=setInterval(function(){
			//getBoundingClientRect().top——js方法获取元素到浏览器顶部距离，offsetTop方法是定值
			var ul_top=document.getElementsByTagName('ul')[0].getBoundingClientRect().top;

			setTimeout(function(){
				var u_d=document.getElementsByTagName('ul')[0].getBoundingClientRect().top-ul_top;
				if(u_d!=0) {scrolll(u_d);}
			},10);
		},10);

		function scrolll(agr){
			if(agr>0)
				{
					$('.container').removeClass('contaiNer').addClass('contaiMer');
					$('li[class="hidden"]').each(function(){
						var $this=$(this);
						var liTop=$this.get(0).getBoundingClientRect().top;
						if(liTop>=uplimit)
						$(this).addClass('shang').removeClass('hidden');
					});

					$('li').each(function(){
						var $this=$(this);
						var liTop=$this.get(0).getBoundingClientRect().top;
						if(liTop>=downlimit) $(this).attr('class','hidden');
					});
				}

			if(agr<0)//down 
			{
				$('.container').removeClass('contaiMer').addClass('contaiNer');
				$('li[class="hidden"]').each(function(){
					var $this=$(this);
					var liTop=$this.get(0).getBoundingClientRect().top;
					if(liTop<=downlimit)
					$(this).addClass('xia').removeClass('hidden');
				});

				$('li').each(function(){
					var $this=$(this);
					var liTop = $this.get(0).getBoundingClientRect().top;
					if(liTop <= uplimit) $(this).attr('class','hidden');
				});
			}
		}

	})