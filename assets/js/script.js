function ajaxFunction(){
 var ajaxRequest;  // The variable that makes Ajax possible!

 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }
}

function contact(){
    var data = $("#contact_me").serialize();
    $.ajax({
      type:'POST', dataType: 'json', url: 'contact_me.php', data:data,
      //  beforeSend:      function(){        $("#signin").html('Signing in...');},
      success:
      function(response)
      {
        $('.form-message').html(msg.data);
        $('.form-message').show();
        resetForm($("#contact_me"));


    }});
    return false;

}

function resetForm($form) {

        $form.find(
                'input:text, input:password, input, input:file, select, textarea'
            )
            .val('');

        $form.find('input:radio, input:checkbox')
            .removeAttr('checked')
            .removeAttr('selected');
  $form.find('button[type=submit]')
            .attr("disabled", "disabled");

    }
