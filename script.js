$(document).ready(function () {

    $('#list-item').html(localStorage.getItem('list'));

    $('.add-items')
        .on('submit', function (event) {
            event.preventDefault();
            var item = $('#todo-list-item').val();

            if (item != ' ') {
                var upitem = item.toUpperCase();
                $('ul').append('<li><input type="checkbox">'+upitem+'<a class="remove">X</a></li>');
                $('#todo-list-item').val(' ');
                localStorage.setItem('list',$('#list-item').html());
            }
        })

    $('.clear')
        .on('click', function(){
            $('#list-item').html('');
            localStorage.removeItem('list');
        })

    $(document)
        .on('click','.remove', function () {
            $(this).parent().remove();
            localStorage.setItem('list',$('#list-item').html());
        })

        .on('click','input[type="checkbox"]', function () {
            $(this).parent().toggleClass('completed');
            if( $(this).attr('checked') ) {
                $(this).attr('checked', false);
            }else{
                $(this).attr('checked', true);
            }
            localStorage.setItem('list','#list-item');
        })


});