// Original by Chris Campbell, www.particletree.com, Created April 27, 2005, Modified June 27, 2005
// Modified by Jens-Uwe Korff, www.CreativeSpirits.de, April-August 2006

// NOTE: This is still experimental!

/* To use:
	- form needs 'id' tag set
	- syntax for 'label' tag: <label for="company_name" id="lblCompany" class="validate">Company name:</label>

*/


window.onload = attachFormHandlers;

// sUrl contains the page which will be processing all of the information. It is important to make sure validationtype is ajax:
var sUrl = "formvalidation.php?validationtype=ajax&val=";
// Number of errors is set to none to begin with
var gErrors = 0;
// Original label colour (no input error):
var labelColour = '#999999';
// Error colour for label:
var errorLabelColour = '#ff0000';

// Record debug messages (will be output through 'alert' command):
var debugLog = '';

var debug = false;

/*
	Attach onblur and onsubmit events to input fields and submit button
	-------------------------------------------------------------------
*/
function attachFormHandlers()
{
	var form = document.getElementById(ajaxFormName);

	if (document.getElementsByTagName)	// Make sure were on a newer browser
	{
		var objInput = form.getElementsByTagName('input');
		for (var iCounter=0; iCounter<objInput.length; iCounter++)
		{
			switch (objInput[iCounter].type) {
				case 'text':
					objInput[iCounter].setAttribute('autocomplete', 'off'); // Workaround of FF bug
					// Attach the onblur to each text field:
					if (window.XMLHttpRequest) { // W3C-compatible browser
//						objInput[iCounter].onblur = function(){return validateMe(this);} // Overwrites 'onblur' handler!
						objInput[iCounter].addEventListener('blur',function () {return validateMe(this);},false); // Adds handler to 'onblur' event
					} else { // Non-compliant MS browser
						if ( !objInput[iCounter].onblur ) {
							objInput[iCounter].onblur = function(){return validateMe(this);}
						} else {
							// Do nothing. Preserve existing handler, assuming it is more important.
						}
					}
			} // switch
		} // for
	} // if
						//  Take setFormSubmit out of here...or is it valid for ALL forms??
	form.onsubmit = function(){setFormSubmit(form.name);return validate();} //attach validate() to the form
}

/*
	'validateMe' is the function called with onblur each time the user leaves the input box.
	Passed into it is the value entered, the rules (which you could create your own), and 
	the id of the area the results will show in.
	-----------------------------------------------------------------------------------------
*/
function validateMe(objInput) {

	if (debug) debugLog = debugLog + '\n- validateMe for '+objInput.name;

	sVal = objInput.value; // Get value of input field
	
	sRules          = objInput.className.split(' '); // Get all the rules from the input box' classes
	sRequired       = sRules[1]; // Determines if field is required or not
	sTypeCheck      = sRules[2]; // Typecheck is the validation rule (e.g. email, phone, date)
	sResponseTarget = sRules[3]; // The target which will receive the server's response

	var xmlhttp = getHTTPObject();
	//xmlhttp.caller = sRules[3]; // This would be much nicer than passing sResponseTarget to the server
	                              // and back to here, but IE doesn't support this approach.
								  
	// Send the type check and value to the php page to be validated.
	// Encode sVal to allow for special characters also:
	xmlhttp.open("GET", sUrl + escape(sVal) + "&sRequired=" + (sRequired) + "&sTypeCheck=" + sTypeCheck + "&Target=" + sResponseTarget + "&rand=" + Math.random(), true);
	xmlhttp.send(null);

//	if (debug) debugLog = debugLog + '\n- xmlhttp.send sent';
	if (debug) alert(debugLog);
}


/*
	'validate' is called by the submit button.
	------------------------------------------
*/
function validate() {
	var labels = document.getElementsByTagName('label');

	if (debug) debugLog = debugLog + '\n- Calling validate()';

	for (i=0; i<labels.length; i++) // Loop through all the <label> elements
	{
		if ( labels[i].className == 'validation-ok' ) {
//labels[i].innerHTML = labels[i].innerHTML + '3a';
			labels[i].style.color = labelColour; // Reset label color
		} else {
//labels[i].innerHTML = labels[i].innerHTML + '3b';
			if ( labels[i].className == 'validate' ) {
//labels[i].innerHTML = labels[i].innerHTML + '3c';
				// Class name has *not* been changed to 'validation-ok' => validation failed => deal with it:
				gErrors = gErrors + 1; // The error count increases by 1
				labels[i].style.color = errorLabelColour; // Change label colour to error colour
				
				// Now we want to trigger this input field's blur() event to make the error image (triangle) appear:
				inputField = labels[i].attributes['for'].value; // Get input field name (must be in 'for' attribute of 'label' tag)
				document.getElementById(ajaxFormName).elements[inputField].setAttribute('autocomplete', 'off'); // Workaround of FF bug
				document.getElementById(ajaxFormName).elements[inputField].focus();
				if (debug) debugLog = debugLog + '\n- Calling '+inputField+'.blur()';
				document.getElementById(ajaxFormName).elements[inputField].blur();
				if (debug) debugLog = debugLog + '\n- .blur() completed.';
			}
		}
	}

	if (gErrors > 0)
	{
		// If there are any errors output a message:
		alert ("Please make sure all fields are properly completed.\nErrors are marked in red.");
		gErrors = 0; // Reset errors to 0

		if (debug) alert(debugLog);
		
		return false;
	}
	else return true;
//else {alert('all ok - terminating in debug mode.');return false;}

}


function getHTTPObject() {
	var xmlhttp;
	/*@cc_on
	@if (@_jscript_version >= 5)
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xmlhttp = false;
      }
    }
  @else
  xmlhttp = false;
  @end @*/
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		try 
		{
			xmlhttp = new XMLHttpRequest();
		} catch (e) {
		xmlhttp = false;
		}
	}
	
	xmlhttp.onreadystatechange = function() {
		// If the process is completed (4) and status is OK (200), decide to do with the returned data:
		if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200))
		{
			sResults = xmlhttp.responseText.split(","); // Results is now whatever the feedback ("echo") from the php page was

			//var gShow = xmlhttp.caller;
			var gShow = sResults[0];

			if (debug) debugLog = debugLog + '\n- state change for : '+sResults[0]; // With FF we could replace sResults[0] with xmlhttp.caller... :-(
			if (debug) debugLog = debugLog + ', id: '+document.getElementById(gShow).id+': sResults[1]: '+sResults[1];

			labelContent = document.getElementById(gShow).innerHTML; // Save current label's content
			
			if ( sResults[1] == 'ok' ) {
				document.getElementById(gShow).style.color = labelColour; // Reset label color
				// If label contains <img> tag, remove it:
				if ( labelContent.indexOf('<') != -1 ) {
//					labelContent = labelContent.substr(0, labelContent.indexOf(' <')); // Option 1: Image appended to label content
					labelContent = labelContent.substr(labelContent.indexOf('> ')+1, labelContent.length); // Option 2: Image prepended to label content
				}
				sResults[1]='';
				document.getElementById(gShow).className='validation-ok';
	
//document.getElementById(gShow).innerHTML = document.getElementById(gShow).innerHTML + '2a';
			} else {
				document.getElementById(gShow).style.color = errorLabelColour; // Change to error label colour
				if ( labelContent.indexOf('<') != -1 ) {
					sResults[1] = ''; // if label already has image, don't add another time
				}
				document.getElementById(gShow).className='validate';
//document.getElementById(gShow).innerHTML = document.getElementById(gShow).innerHTML + '2b';
			}
//			document.getElementById(gShow).innerHTML = labelContent + ' ' + sResults[0]; // Option 1: Image appended to label content
			document.getElementById(gShow).innerHTML = sResults[1] + ' ' + labelContent; // Option 2: Image prepended to label content
//document.getElementById(gShow).innerHTML = sResults[1] + ' ' + document.getElementById(gShow).innerHTML;
		}
	}
	return xmlhttp;
}
