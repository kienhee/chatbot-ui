/**
 * Loader: client only needs <script src="https://your-domain.com/chatbot.js"></script>
 * This file loads the embed bundle from same origin: /embed/chatbot.js
 */
(function () {
  var s = document.currentScript;
  var base = s && s.src ? s.src.replace(/\/[^/]*$/, '/') : '';
  var script = document.createElement('script');
  script.src = base + 'embed/chatbot.js';
  script.async = true;
  document.head.appendChild(script);
})();
