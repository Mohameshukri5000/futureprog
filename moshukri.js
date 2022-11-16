$(function() {
    var d, x, y, selected;
    $('.button, .close-list-item').on('click', function(e) {
  
      var $this = $('.button, .close-list-item');
      if($this.find('.is-selected').length === 0) {
        $this.prepend('<span class="is-selected"></span>');
      }
      
      selected = $this.find('.is-selected');
      selected.removeClass('animate');
  
      if(!selected.height() && !selected.width()) {
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        selected.css({height: d, width: d});
      }   
      
      x = e.pageX - $this.offset().left - selected.width()/2;
      y = e.pageY - $this.offset().top - selected.height()/2;
  
      selected.css({top: 0+'px', left: 0+'px'}).addClass('animate');
      
      $this.addClass('expanded-button');
      $('.first-list-item, .list-item').hide();
      $('.list-item').show();
    });
  
    $('.close-list-item').on('click', function(e){
       e.stopPropagation();
       $('.expanded-button').removeClass('expanded-button');
       $('.list-item').hide();
      $('.first-list-item').show();
    });
    
  });
  $(document).ready(function(){
    $('.btn').click(function() {$('#id').fadeIn(400,function(){$('.avatar').animate({opacity:'1'},1000,function(){$('.cont').animate({opacity:'1',padding:'16px'},400,function() {$(window).scroll(function () {if ($(document).scrollTop () > 45){$('.logbtn').animate({width : '50%'},300);}});});});});});
       
   $('.cancel, .close').click(function (){$('#id').fadeOut(400);});  
       var logbox = document.getElementById('id')
        $(window).click(function(event) {
        if (event.target == logbox) {
           $('p , #id').fadeOut(400);
       }
     });
     $('.forgot').click(function() {$('p').show();});
      $('input').on('focus blur', function (e) {
        var $this = $(this),
            label = $this.prev('label');
        if(e.type === 'focus'){
            if ($this.val() === ''){label.addClass('active');}
             }
            else if (e.type === 'blur' ){if ($this.val() === ''){label.removeClass('active');}else{label.addClass('active');}   }
   
    });
   
   });
  //  const body = document.querySelector('body');
  //  const toggle = document.getElementById('toggle');
  //  toggle.onclick = function() {
  //    toggle.classList.toggle('active');
  //    body.classList.toggle('active');
  //  }
  var f= "mainpag.html";
  function zemo()
{
    

        open(f)
    }