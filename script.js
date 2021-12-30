jQuery('document').ready(function(){
	
	jQuery('#all').on('click',function(){
	var b = jQuery('#b').val();
  if('b<3')
  { alert(" Don't knowing.");}
  else if('b<7'){
	  alert("Hearing.");
  }else if('b<11'){
	alert("So so.");
  }
	});
});