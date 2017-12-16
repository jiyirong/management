$.ajax({
    url:'/infos',
    type:'GET',
    success:function(data){
        var str = '';
        for(var i=0;i<data.length;i++){

            str +='<tr><td>'+data[i].id+'</td><td>'+data[i].name+'</td><td>'+data[i].age+'</td><td>'+data[i].work+'</td><td>'+data[i].study+'</td></tr>'
        }
        $('tbody').html(str);
    }
})
$('.add').on('click',function(){

    $('.mark').show();

    $('.addinfo').on('click',function(){

        var username = $('.name').val();
        var userage = $('.age').val();
        var userwork = $('.work').val();
        var userstudy = $('.study').val();

        if(username != ''){
            $.ajax({

              url:'/add?name='+username+'&age='+userage+'&work='+userwork+'&study='+userstudy,
              type:'GET',
              success:function(data){

                if(data.code==0){

                    alert(data.msg);
                }
              }
           })
        }
        $('.mark').hide();
    })
})