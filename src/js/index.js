'use strict';

(function(){

	var config = require('./config');
	var bookmarkletSource = "(function(){"
		+ "var scriptTag = document.createElement('script');"
		+ "scriptTag.setAttribute('src', '" + config.url + "abba_bookmarklet.js');"
		+ "document.body.appendChild(scriptTag);})()";

	// set the correct HREF value to the bookmarklet anchor tag
	document.getElementById('bookmarkletLink')
		.setAttribute('href', 'javascript:' + encodeURIComponent(bookmarkletSource));

  // demo test data
  window.hx={abba:{_tests:{demo_test:{_cachedAbba:{chosen:{name:'control_version'},variants:[{name:'control_version',weight:50,control:true},{name:'foo_version',weight:25},{name:'bar_version',weight:25}]}},another_test:{_cachedAbba:{chosen:{name:'control_version'},variants:[{name:'control_version',weight:1,control:true},{name:'foobar_version',weight:1}]}}}}};
})();
