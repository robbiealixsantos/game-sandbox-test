$( document ).on('turbolinks:load', function() {
   $(function(){
    if($('body').is('.virtual-pet')){
     virtualPet();
    }
  });
});