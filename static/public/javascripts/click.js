$('.login-wrap').eq(0).on('click',function(){
		$('label').eq(1).removeClass('tran').css('color','hsla(0,0%,100%,.8)');
		$('label').eq(0).addClass('tran').css('color','#00bcd4');
		$('.hr').eq(0).addClass('line');
		$('.hr').eq(1).removeClass('line');
		$('.hr').eq(0).css('borderBottom','2px solid #00bcd4');
		$('.new-hr').hide();
	})
	$('.login-wrap').eq(1).on('click',function(){
		$('label').eq(0).removeClass('tran').css('color','hsla(0,0%,100%,.8)');
		$('.hr').eq(0).removeClass('line');
		$('label').eq(1).addClass('tran').css('color','#00bcd4');
		$('.hr').eq(1).addClass('line');
	})
    $('.login-wrap').eq(0).on('click',function(){

    	$('label').eq(0).addClass('tran');
    })
    $('.login-btn button').on('click',function(e){
    	e.preventDefault();
        //console.log($('.user').val());
    	if($('.user').val()==''){

    		$('.hr').eq(0).css('borderBottom','2px solid #f00');
    		$('.new-hr').show();
    	}
    	else{
    		$('.new-hr').hide();
    		
    		$('.login-wrap').eq(0).on('click',function(){
    			$('label').eq(1).removeClass('tran').css('color','hsla(0,0%,100%,.8)');
    			$('label').eq(0).addClass('tran').css('color','#00bcd4');
    			$('.hr').eq(0).addClass('line');
    			$('.hr').eq(1).removeClass('line');
    			$('.hr').eq(0).css('borderBottom','2px solid #00bcd4');
    			$('.new-hr').hide();
    		})
    		$('.login-wrap').eq(1).on('click',function(){
    			/*$('label').eq(0).addClass('tran').css('color','#00bcd4');
    			$('.hr').eq(0).removeClass('line');*/
    			/*$('label').eq(1).addClass('tran').css('color','#00bcd4');
    			$('.hr').eq(1).addClass('line');*/
    			if($('.user').val()!=''){

    				$('label').eq(0).addClass('tran').css('color','#00bcd4')
    			}
    		}) 
    	}


    })
	$('button').on('click',function(){
		var user = $('.user').val();
		var userpwd = $('.userpwd').val();
		if($('.user').val() != ''){

			$.ajax({

				url:'/loginparser?name='+user+'&pwd='+userpwd,
				type:'GET',
				success:function(data){

					if(data.code==0){
						alert(data.msg);
						window.location.href = '/';
					}
					else{

						alert(data.msg);
					}
				}
			})

		}
		
	})