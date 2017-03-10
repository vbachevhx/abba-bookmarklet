// Older versions of the bookmarklet will request this file. We use it to get
// them to update while not preventing them from using the tool
(function(){
  alert('There is a newer version of the ABBA bookmarklet. Please update!');
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', 'https://rawgit.com/vbachevhx/abba-bookmarklet/master/dist/abba_bookmarklet.js');
  document.body.appendChild(scriptTag);
})();
