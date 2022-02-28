import config from "./config";

document.getElementById("app").innerHTML = `
<dl>
  <dt>is local?</dt>
  <dd>${config.IS_LOCAL}</dd>
</dl>`;
