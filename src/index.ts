import config from "./config";

document.getElementById("app").innerHTML = `
<dl>
  <dt>is working?</dt>
  <dd>${config.IS_WORKING}</dd>

  <dt>is local?</dt>
  <dd>${config.IS_LOCAL}</dd>

  <dt>base:</dt>
  <dd>${config.BASE}</dd>

  <dt>mode:</dt>
  <dd>${config.ENV}</dd>

  <dt>title:</dt>
  <dd>${config.TITLE}</dd>
</dl>`;
