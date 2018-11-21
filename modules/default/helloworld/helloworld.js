/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("helloworld", {

	// Default module config.
	defaults: {
		text: "Hello World!"
	},
	getDom: function () {
		var wrapper = document.createElement("div");
		fetch('http://192.168.1.200/')
		.then((results)=>{
			
			return results.json();
			
		})
		.then((responseJson)=>{
			wrapper.innerHTML = responseJson.tempIn;
			console.log(responseJson);
		})
		// var xmlhttp = new XMLHttpRequest();
		// var url = "http://192.168.1.200/";

		// xmlhttp.onreadystatechange = function () {
		// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		// 		var results = xmlhttp.responseText;
		// 		wrapper.innerHTML = results;
		// 		console.log(results[0]);

		// 	}
		// };
		// xmlhttp.open("GET", url, true);
		// xmlhttp.send();
		return wrapper;
	},

	getTemplateData: function () {
		return this.config
	}
});
