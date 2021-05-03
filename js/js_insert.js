	function showForm(elementName, iState) {
	// iState: 1 visible, 0 hidden
	// Code credits: http://www.geocities.com/technofundo/tech/js/showhide.html
		if(document.layers)	   //NN4+
		{
		   document.layers[elementName].visibility = iState ? "show" : "hide";
		}
		else if(document.getElementById)	  //gecko(NN6) + IE 5+
		{
			var obj = document.getElementById(elementName);
//			obj.style.visibility = iState ? "visible" : "hidden";				// Makes object only invisible (but it still occupies space)
			obj.style.display = iState ? 'block' : 'none'; 					// Lets object disappear altogether
		}
		else if(document.all)	// IE 4
		{
			document.all[elementName].style.visibility = iState ? "visible" : "hidden";
		}
	}
	
	function selectDropdownItem(selObj, selVal) {
	// Selects the entry from a dropdown element (selObj) whose value equals selVal
		for(var x=0; x < selObj.length; x++) {
//			if(parseInt(selObj.options[x].value, 10) == selVal) {
			if(selObj.options[x].value == selVal) {					// allows also comparision of string values
				selObj.selectedIndex = x;
				break;
			} // if
		} // for
	}

	function setFormSubmit(theForm) {
	// Sets the submission_id to an arbitrary value. Processed on server-side to check for reload/resubmission of form.
		document.forms[theForm].h_submission_id.value = parseInt(Math.random()*1000000, 10);
	}
	
