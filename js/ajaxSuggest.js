// Attach function to button's 'onkeyup' event.
// This is necessary because the button might already have such an event.
// ----------------------------------------------------------------------------------
function setSuggestHandlers(sFieldId) {
    if (zXmlHttp.isSupported()) {
		var oField = document.getElementById(sFieldId);
		
		if (oField.addEventListener) {	// W3C-compatible browser
			oField.autocomplete = 'off'; // Workaround of FF bug
			oField.addEventListener('keyup', suggestEntries, false);
			oField.addEventListener('blur', resetResultDiv, false);
		} else { 						// Non-compliant MS browser
			oField.attachEvent('keyup', suggestEntries);
			oField.attachEvent('blur', resetResultDiv);
		}
	} // if
}

// Improvement: prepend all variables with 'sugg_' to make them unique even in larger JS environments:
var arrBuffer = new Array();
var sOldTextFieldValue = null;
var iKeyCode = null;
var iSelectedEntry = 0;
var oDiv = null;
var iTimeoutId = null;
var oXmlHttp_suggest = null;

function suggestEntries(oEvent) {
    oEvent = oEvent || window.event;
    var txtField = oEvent.target || oEvent.srcElement;
	iKeyCode = oEvent.keyCode;
//alert(iKeyCode);
	
	// If text field is empty, hide result div and return:
	if ( txtField.value == '' ) {
		hideResultDiv();
		return;
	}
	if ( txtField.value == sOldTextFieldValue ) {
		showResults(arrBuffer);
		return;
	}

	if ( iTimeoutId != null ) {
		clearTimeout(iTimeoutId);
		iTimeoutId = null;
	}
	
	if ( !oXmlHttp_suggest ) {
		oXmlHttp_suggest = zXmlHttp.createRequest();
	} else if ( oXmlHttp_suggest.readyState != 0 ) {
		oXmlHttp_suggest.abort();
	}
	
	var sTableName = '';
	var sFieldName = '';
	switch ( txtField.id ) {
		case 'txtProgram':
			sTableName = 'rate_card_program';
			sFieldName = 'program_name';
			break;
		case 'txtDuration':
			sTableName = 'duration';
			sFieldName = 'duration';
			break;
		default:
			alert('Unknown field submitted to ajaxSuggest.js.');
			throw new Error ('Unknown field submitted to ajaxSuggest.js.');
	} // switch
	
	var sURL = 'ajaxSuggestEntries.php?table='+sTableName+'&field='+sFieldName+'&textFieldName='+txtField.name+'&textFieldValue='+txtField.value;
    oXmlHttp_suggest.open("get", sURL, true);

	oXmlHttp_suggest.onreadystatechange = function () {
		// Workaround of bug in FF: 'Component returned failure code: 0x80040111':
		if (oXmlHttp_suggest.readyState == 4 && oXmlHttp_suggest.responseText) {
//alert(oXmlHttp_suggest.responseText);
			// The response comes as JavaScript code => evaluate it (calls showResults with an array as parameter):
			eval(oXmlHttp_suggest.responseText);
        }
    };

	iTimeoutId = setTimeout(
		function() { oXmlHttp_suggest.send(null); }
		, 500
	);

};

function showResults(arrInfo) {
// Called when php code returns search results for auto-suggest field
// Shows results and attaches new <div> to current row in table
	if ( (arrInfo[1] == '') || (arrInfo.length < 2) ) {
		// If empty result came back, hide div and return:
		hideResultDiv();
		arrBuffer = new Array();
		return;
	}
	
	var sTextfieldId = arrInfo[0];
	var sResultDivContent = '';
	var oTextfield = document.getElementById(sTextfieldId);

	arrBuffer = arrInfo;	// Buffer result array
	sOldTextFieldValue = oTextfield.value;

	// Add result div to textfield:
	if ( oDiv == null ) {
		oDiv = document.createElement('div');
		oDiv.className = 'resultDiv';
		var sCellId = oTextfield.parentNode.id
		var oCell = document.getElementById(sCellId);
		oCell.appendChild(oDiv);
	}
	
	// Show all results in div:
	createListEntry(oDiv, arrInfo, sTextfieldId);

	// Position div next to text field:
	iX = findPosX(oTextfield);
	iY = findPosY(oTextfield);
//alert('x:'+iX+', y:'+iY);
	oDiv.style.left = iX+'px';
	oDiv.style.top = (iY+21)+'px';
	oDiv.style.width = 'auto';
	oDiv.style.minWidth = '130px';
//throw new Error ("selected entry: "+iSelectedEntry+'('+arrInfo.length+')');
}

function createListEntry(oDiv, arrInfo, sTextfieldId) {
	/* Creates <div> with <span> for each entry found and assigns mouse event handlers
	   to the <div> to prepare for highlighting entries
	   Structure:
	   		<div class="resultDiv">
				<div><span>result 1</span></div>     <--- these divs get the mouse handlers
				<div><span>result 2</span></div>
				...
			</div>
	*/
	while ( oDiv.childNodes.length > 0 ) {
		oDiv.removeChild(oDiv.childNodes[0]);
	}
	for ( i=1; i < arrInfo.length; i++ ) {
		var oEntryDiv = document.createElement("DIV");
		oEntryDiv.onmousedown=handlerOnMouseDown;
		oEntryDiv.onmouseover=handlerOnMouseOver;
		oEntryDiv.onmouseout=handlerOnMouseOut;
		var oSpan=document.createElement("SPAN");
		oSpan.innerHTML = arrInfo[i]; // the text for the suggested result...
		oEntryDiv.appendChild(oSpan);
		oDiv.appendChild(oEntryDiv);
	} // for
	switch ( iKeyCode ) {
		case 8: // Backspace
			iSelectedEntry = 0;	// If user backspaces, go to first entry of (new) list
			break;
		case 40: // Cursor down
			iSelectedEntry++;
			if ( iSelectedEntry > (arrInfo.length-2) ) { iSelectedEntry = 0; }	// -2 because first element is text field name
			break;
		case 38: // Cursor up
			iSelectedEntry--;
			if ( iSelectedEntry < 0 ) { iSelectedEntry = arrInfo.length-2; }	// -2 because first element is text field name
			break;
		case 13: // Enter
			// Get <span>'s HTML and put it into the text field:
			assignSelectedEntry(sTextfieldId, oDiv.childNodes[iSelectedEntry].childNodes[0].innerHTML);
			hideResultDiv();
			return;
			break;
	} // switch

	showResultDiv();

	// Mark current entry's <span>. This will be overwritten (reset) automatically with next call of showResultDiv():
	oDiv.childNodes[iSelectedEntry].style.color='#ffffff';
	oDiv.childNodes[iSelectedEntry].style.backgroundColor='#316ac5';
}
var handlerOnMouseDown = function() {
	/* Now we need to get the id of the input field which triggered this handler
	   to be able to write the entry into it:
	   <td>
	      <input id="theIdWeNeed" .. />         <---- we need this input's id
		  <div class="resultDiv">
		     <div><span>result 1</span></div>   <---- this div is associated with this handler
			 ...
	*/
	sInputFieldId = this.parentNode.previousSibling.id;
	assignSelectedEntry(sInputFieldId, this.childNodes[0].innerHTML);
}
var handlerOnMouseOver = function() {
	// Mark entry under mouse:
	this.childNodes[0].style.color='#ffffff';
	this.childNodes[0].style.backgroundColor='#316ac5';
}
var handlerOnMouseOut = function() {
	// Un-mark entry:
	this.childNodes[0].style.color='#000000';
	this.childNodes[0].style.backgroundColor='#ffffff';
}
function assignSelectedEntry(sTextfieldId, sSelectedValue) {
	// Assign currently highlit entry to text field:
	document.getElementById(sTextfieldId).value = sSelectedValue;
}
function resetResultDiv() {
	hideResultDiv();
	oDiv = null;		// Remove div altogether if edit row is no longer in focus
}
function hideResultDiv() {
	if ( oDiv != null ) {
		oDiv.style.display = 'none';
	}
}
function showResultDiv() {
	if ( oDiv != null ) {
		oDiv.style.display = 'block';
	}
}
// Code credit: http://www.quirksmode.org/js/findpos.html
function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}
function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}
