// JavaScript Document
function FormValidation() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var company = document.getElementById("company").value;
	var zipcode = document.getElementById("zipcode").value;
	var country = document.getElementById("country").value;
	
	if ($('#name').val() == '') { $('#name').css('border-color', 'red'); }
		else { $('#name').css('border-color', ''); }
	
	if ($('#email').val() == '') { $('#email').css('border-color', 'red'); }
		else { $('#email').css('border-color', ''); }
		
	if ($('#company').val() == '') { $('#company').css('border-color', 'red'); }
		else { $('#company').css('border-color', ''); }
	
	if ($('#zipcode').val() == '') { $('#zipcode').css('border-color', 'red'); }
		else { $('#zipcode').css('border-color', ''); }
	
	if ($('#country').val() == 'none') { $('#country').css('border-color', 'red'); }
		else { $('#country').css('border-color', ''); }
		
	
}

 $(document).ready(function () {
var checkbox = document.getElementById('chk0_Slide__Rule__Request'); 
var delivery_div = document.getElementById('delivery');
var delivery1_div = document.getElementById('delivery1');
checkbox.onclick = function() {
    console.log(this);
   if(this.checked) {
     delivery_div.style['display'] = 'block';
	 delivery1_div.style['display'] = 'block';
	 $('input[name=address1').prop('required',true).css('border-color', 'red');
     $('input[name=city]').prop('required',true).css('border-color', 'red');
	 $('select[name=state]').prop('required',true).css('border-color', 'red');
	 
   } 
   else {
     delivery_div.style['display'] = 'none';
	 delivery1_div.style['display'] = 'none';
	 $('input[name=address1').prop('required',false).css('border-color', '');
     $('input[name=city]').prop('required',false).css('border-color', '');
	 $('select[name=state]').prop('required',false).css('border-color', '');
   }
};
});

