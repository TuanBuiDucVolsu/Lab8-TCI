$('#terms_and_conditions').click(function(){
    //If the checkbox is checked.
    if($(this).is(':checked')){
        //Включите кнопку отправки.
        $('#submit_button').attr("disabled", false);
    } else{
        //Если это не отмечено, отключите кнопку
        $('#submit_button').attr("disabled", true);
    }
});