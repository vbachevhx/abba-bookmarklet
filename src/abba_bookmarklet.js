// Older versions of the bookmarklet will request this file. We use it to get
// them to update while not preventing them from using the tool
(function(){
  console.warn('There is a newer version of the ABBA bookmarklet. Please update at https://github.com/holidayextras/abba-bookmarklet');
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', 'https://tech.holidayextras.co.uk/abba-bookmarklet/dist/abba_bookmarklet.js');
  document.body.appendChild(scriptTag);
})();
