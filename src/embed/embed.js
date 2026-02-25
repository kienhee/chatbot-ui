/**
 * Embed entry: real bundle (Vue + UI).
 * Uses Shadow DOM to isolate CSS: host page cannot override widget, widget does not affect host.
 */
import { createApp } from 'vue';
import EmbedApp from './App.vue';

const ROOT_ID = 'chatbot-widget-root';
const CSS_FILE = 'chatbot_ui.css';

function mount(cssText) {
  if (document.getElementById(ROOT_ID)) return;
  const host = document.createElement('div');
  host.id = ROOT_ID;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'closed' });
  const style = document.createElement('style');
  style.textContent = cssText;
  shadow.appendChild(style);
  const appRoot = document.createElement('div');
  shadow.appendChild(appRoot);

  createApp(EmbedApp).mount(appRoot);
}

function loadAndMount(base) {
  fetch(base + CSS_FILE)
    .then(function (r) { return r.text(); })
    .then(function (cssText) { mount(cssText); })
    .catch(function () { mount(''); });
}

var script = typeof document !== 'undefined' && document.currentScript;
if (script && script.src) {
  var base = script.src.replace(/\/[^/]*$/, '/');
  loadAndMount(base);
} else {
  mount('');
}
