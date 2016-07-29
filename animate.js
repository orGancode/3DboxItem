$(function(){
    var containerT=$('.contain').offset().top || document.getElementsByClassName('contain')[0].offsetTop;
    var containerH=document.getElementsByClassName('contain')[0].offsetHeight;
    var uplimit =document.getElementsByTagName('div')[1].offsetTop;
    var downlimit=containerH+containerT;
    //alert(uplimit+"|"+downlimit);
    function init(){
      $('span').each(function(){
        var $this=$(this);//var m=$this.get(0)转成dom对象
        var spanTop=$this.get(0).getBoundingClientRect().top;
        if(spanTop < uplimit || spanTop > downlimit)//
          $(this).attr('class',"hidden");
       
      });
    }
    init();

    var span_timer=setInterval(function(){
      //getBoundingCspanentRect().top——js方法获取元素到浏览器顶部距离，offsetTop方法是定值
      var span0_top=document.getElementsByTagName('span')[0].getBoundingClientRect().top;
      setTimeout(function(){
        var u_d=document.getElementsByTagName('span')[0].getBoundingClientRect().top-span0_top;
        if(u_d!=0) {scrolll(u_d);}
      },10);
    },10);

    function scrolll(agr){
      if(agr < 0){//down
              $('span[class="hidden"]').each(function(){
                    var $this=$(this);
                    var spanTop=$this.get(0).getBoundingClientRect().top;
                    if(spanTop<downlimit)
                       $(this).addClass('downscroll').removeClass('hidden');
                });
                $('span').each(function(){
                    var $this=$(this);
                    var spanTop=$this.get(0).getBoundingClientRect().top;
                    if(spanTop<=uplimit) $(this).attr('class','hidden');
                });
          }
      if(agr > 0){
              $('span[class="hidden"]').each(function(){
                  var $this=$(this);
                  var spanTop=$this.get(0).getBoundingClientRect().top;
                  if(spanTop>uplimit)
                      $(this).addClass('upscroll').removeClass('hidden');
              });
              $('span').each(function(){
                  var $this=$(this);
                  var spanTop=$this.get(0).getBoundingClientRect().top;
                  if(spanTop>=downlimit) $(this).attr('class','hidden');
              });
          }
    }

  })