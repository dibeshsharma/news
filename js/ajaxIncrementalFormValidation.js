
//function to validate fields
function validateField(oEvent) {
    oEvent = oEvent || window.event;
    var formElement = oEvent.target || oEvent.srcElement;

	// Get name of the form to which this element belongs:
	var oForm = getParentForm(formElement);

	var oXmlHttp = zXmlHttp.createRequest();
	
	// Get form element's classes and extract the one which represents the validation rule.
	// (scheme: "validation-hereIsTheRule"). Need to extract from possible other classes:
	var sClassName = formElement.className;
	var iValidationClassStart = sClassName.indexOf('validate-');
	var iValidationClassEnd   = ( sClassName.indexOf(' ') > 0 ) ? sClassName.indexOf(' ') : sClassName.length;
	var sValidation = sClassName.substr(iValidationClassStart, iValidationClassEnd);
	
	// Add form element's name and validation rule to url:
	var sURL = 	"ajaxValidateForm.php?formElement=" + formElement.name + "&value=" + encodeURIComponent(formElement.value);
	sURL += '&validation=' + sValidation;
	var boolIsFormValid = false;

    oXmlHttp.open("get", sURL, true);
    oXmlHttp.onreadystatechange = function () {
        if (oXmlHttp.readyState == 4) {
            if (oXmlHttp.status == 200) {
                var arrInfo = oXmlHttp.responseText.split("||");
				var sImage = '<img src="images/exclamation.jpg" width="20" height"20" title="' + arrInfo[1] + '" />';
				var oLabel = document.getElementById('lbl'+formElement.name.substr(3));
				sLabelText = resetLabelText(oLabel);
								
                if (!eval(arrInfo[0])) {
					oLabel.innerHTML  = sLabelText + sImage;
                    formElement.valid = false;                    
                } else {
					oLabel.innerHTML  = sLabelText;
                    formElement.valid = true;
                }
                
				// Enable or disable all Ajax submit buttons on this form:
				boolIsFormValid = isFormValid(oForm);
				toggleSubmitButtons(oForm, !boolIsFormValid);
            } else {
                alert("An error occurred while trying to contact the server:"+oXmlHttp.status+', '+oXmlHttp.responseText);
            }
        }
    };
    oXmlHttp.send(null);
};

function resetLabelText(oLabel) {
// Resets the label's text to what it was before the error image was added.
if ( !oLabel) { alert('Missing label for field which should be validated.'); }
	sLabelText = oLabel.innerHTML.toUpperCase();	// Better be safe. IE adds dynamically generated tags in upper case!
	iImagePos  = sLabelText.indexOf('<IMG');
	if ( iImagePos != -1 ) {
		return oLabel.innerHTML.substr(0, iImagePos);
	} else {
		return oLabel.innerHTML;
	}
}

function getParentForm(oElement) {
	while ( oElement.nodeName != 'FORM' ) {
		oElement = oElement.parentNode;
	}
//	return oElement.getAttribute('name'); // returns just the name
	return oElement;
}

function toggleSubmitButtons(oForm, boolDisabled) {
	for ( var j=0; j < oForm.elements.length; j++ ) {
		if ( oForm.elements[j].id.substring(0, 11) == 'ajaxSubmit_' ) {
			oForm.elements[j].disabled = boolDisabled;
		}
	}
}

function isFormValid(oForm) {
//    var frmMain = document.forms[0];
    var boolValid = true;
    for (var i=0; i < oForm.elements.length; i++) {        
        if (typeof oForm.elements[i].valid == "boolean") {
//alert(oForm.elements[i].name+':'+oForm.elements[i].valid);
            boolValid = boolValid && oForm.elements[i].valid;
        }
    }
    
    return boolValid;
}

function makeFormValid(oForm) {
// Sets all form elements which have the custom property 'valid' defined to 'true'.
// Used to make entire form valid initially e.g. when loaded with database values.
    for (var i=0; i < oForm.elements.length; i++) {        
        if (typeof oForm.elements[i].valid == "boolean") {
            oForm.elements[i].valid = 'true';
        }
    }
}

// Attach function to 'onload' or 'load' event for window.
// This is necessary because the document might already have a load event.
// ----------------------------------------------------------------------------------
if (window.addEventListener) {	// W3C-compatible browser
	window.addEventListener('load', setEventHandlers, false);
} else { 						// Non-compliant MS browser
	window.attachEvent('onload', setEventHandlers);
}

//if Ajax is enabled, disable the submit button and assign event handlers
//window.onload = function () {
function setEventHandlers() {
    if (zXmlHttp.isSupported()) {
		// Check which form should be AJAX-enabled. These forms have a name like 'ajax_xxx':
		for ( var i=0; i < document.forms.length; i++ ) {
//alert ('testing form '+document.forms[i].name);
			if ( document.forms[i].name.substr(0, 5) == 'ajax_' ) {
				oTheForm = document.forms[i];
				// Get all form elements which need validation.
				// These have a class starting with 'validation-' associated with them:
				for ( var j=0; j < oTheForm.elements.length; j++ ) {
//alert ('testing element '+oTheForm.elements[j].name);
					aAllElementClasses = oTheForm.elements[j].className.split(' ');
					// Check if validation class is present:
					for ( var k=0; k < aAllElementClasses.length; k++ ) {
//alert ('testing class '+aAllElementClasses[k]+' : '+aAllElementClasses[k].substring(0, 9)+' == validate-');
						if ( aAllElementClasses[k].substring(0, 9) == 'validate-' ) {
//alert('assigning to '+document.getElementById(oTheForm.elements[j].name).name);
							var formElement = document.getElementById(oTheForm.elements[j].name);
							formElement.onchange = validateField;
							if ( aAllElementClasses[k].substring(9, 18) == 'required-' ) {
								formElement.valid    = false; // Default for required fields: invalid
							} else {
								formElement.valid    = true;  // Default for optional fields: valid (since initially they're empty)
							}
							// Reset label's text (in case this function is called somewhen after the initial page load):
							oLabel = document.getElementById('lbl'+oTheForm.elements[j].name.substr(3));
							oLabel.innerHTML = resetLabelText(oLabel);
//alert('valid for '+oTheForm.elements[j].name + ' is '+formElement.valid);
						}
					} // for (element classes)
				} // for (form elements)
				toggleSubmitButtons(oTheForm, true);	// Default: Disable all submit buttons
			} // if ajax
		} // for (forms)
    }
};
