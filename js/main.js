(function($){
    $(function() {

        //form logic
        var validators = {
            name: /^[A-Za-zА-Яа-я\s\-]+$/,
            email: /^\w+\-?\.?\w+?@\w+\.\w+$/
        }
        
        var fields = $(".form_text_item");
        fields.on('keydown', function(event)  {
            if(event.keyCode === 13) {
                $(event.target).parent().next().find('input').focus();
                event.preventDefault();
            }
        });

        $('.submit').on('click', function(event)  {
            var result = true;
            for (var i = 0; i < fields.length; i++) {
                if (!(validators[fields[i].name].test(fields[i].value))) {
                    $(fields[i]).remove('correct');
                    $(fields[i]).addClass('wrong');
                    $(fields[i]).prev().addClass('label_wrong');
                    $(fields[i]).next().addClass('warning_show');
                    event.preventDefault();
                    return result = false;
                }
            }

            if ( !($("#checkbox").prop("checked")) ) {
                $("#checkbox").addClass('wrong');
                $("#checkbox").next().next().next().addClass('warning_show');
                return result = false;
            }

            if (result) { 
                var data = ($('form').serializeArray());
                $('input').val('');
                $("#checkbox").prop({'checked':false});
                $('#form_overlay').removeClass('hide');
                event.preventDefault();
            };

        })
        
        fields.on('change', function(event)  {

            for (var i = 0; i < fields.length; i++) {
                if ((validators[fields[i].name].test(fields[i].value))) {
                    $(fields[i]).removeClass('wrong');
                    $(fields[i]).addClass('correct');
                    $(fields[i]).prev().removeClass('label_wrong');
                    $(fields[i]).next().removeClass('warning_show');

                }
            }
        });

        $("#checkbox").on('change', function(event)  {
            $("#checkbox").remove('wrong');
            $("#checkbox").next().next().next().removeClass('warning_show');
        })

        //modal logic
        $('.overlay_clickable').on('click', function(event)  {
            $('.overlay').addClass('hide');
        })

        //block2 posts logic
        $('.icon_img').on('click', function(event)  {
            if ($(event.target.parentNode.parentNode.parentElement).hasClass('top')) {
                $(event.target.parentNode.parentNode.parentElement).removeClass('top');
            } else {
                $(event.target.parentNode.parentNode.parentElement).addClass('top');
            }
        })      

        //block3 list logic
        $('.list_item').on('click', function(event)  {
            $('#overlay').removeClass('hide');
        })
        
      }); 
})(jQuery);