let codeQ = document.getElementById("code")
document.getElementById("result").addEventListener("click", function(e) {
  document.getElementById("result").value = `Host: ${document.getElementById("host").value}
Code: ${codeQ.value.length <= 6 ? `${codeQ.value}` : `Type /queue join in ${codeQ.value}`}
Players: **${document.getElementById("players").value}/${document.getElementById("maxplayers").value}**
Region: ${document.getElementById("region").value}
Map: ${document.getElementById("map").value}
${document.getElementById("ping").value}`;
  if (document.getElementById("extra").value !== "") document.getElementById("result").value += `
**${document.getElementById("extra").value}**`;
  if (document.getElementById("timestamp").checked) document.getElementById("result").value += `
-# *${document.getElementById("inlobby").checked ? "In Lobby" : "In Game"}, Updated <t:${Math.round(Date.now()/1000+5)}:R>*`;
  if (document.getElementById("website").checked) document.getElementById("result").value += `
-# ${document.getElementById("website").checked ? "*Generated using <https://sites.google.com/view/toumira>*" : ""}`;
  
  document.getElementById("result").select();
  document.execCommand('copy');
  
  
  localStorage.setItem("code", document.getElementById("code").value);
  localStorage.setItem("region", document.getElementById("region").value);
  localStorage.setItem("host", document.getElementById("host").value);
  localStorage.setItem("map", document.getElementById("map").value);
  localStorage.setItem("players", document.getElementById("players").value);
  localStorage.setItem("maxplayers", document.getElementById("maxplayers").value);
  localStorage.setItem("ping", document.getElementById("ping").value);
  localStorage.setItem("extra", document.getElementById("extra").value);
  localStorage.setItem("timestamp", document.getElementById("timestamp").checked);
  localStorage.setItem("website", document.getElementById("website").checked);
});
document.getElementById("generate-btn").addEventListener("click", function(e) {
  document.getElementById("result").value = `Host: ${document.getElementById("host").value}
Code: ${codeQ.value.length <= 6 ? `${codeQ.value}` : `Type /queue join in ${codeQ.value}`}
Players: **${document.getElementById("players").value}/${document.getElementById("maxplayers").value}**
Region: ${document.getElementById("region").value}
Map: ${document.getElementById("map").value}
${document.getElementById("ping").value}`;
  if (document.getElementById("extra").value !== "") document.getElementById("result").value += `
**${document.getElementById("extra").value}**`;
  if (document.getElementById("timestamp").checked) document.getElementById("result").value += `
-# *${document.getElementById("inlobby").checked ? "In Lobby" : "In Game"}, Updated <t:${Math.round(Date.now()/1000+5)}:R>*`;
  if (document.getElementById("website").checked) document.getElementById("result").value += `
-# ${document.getElementById("website").checked ? "*Generated using <https://sites.google.com/view/toumira>*" : ""}`;
  
  document.getElementById("result").select();
  document.execCommand('copy');
  const notification = document.getElementById("copy-notification");
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2500);
  
  
  localStorage.setItem("code", document.getElementById("code").value);
  localStorage.setItem("region", document.getElementById("region").value);
  localStorage.setItem("host", document.getElementById("host").value);
  localStorage.setItem("map", document.getElementById("map").value);
  localStorage.setItem("players", document.getElementById("players").value);
  localStorage.setItem("maxplayers", document.getElementById("maxplayers").value);
  localStorage.setItem("ping", document.getElementById("ping").value);
  localStorage.setItem("extra", document.getElementById("extra").value);
  localStorage.setItem("timestamp", document.getElementById("timestamp").checked);
  localStorage.setItem("website", document.getElementById("website").checked);
});


if (localStorage.getItem("code") !== null) document.getElementById("code").value = localStorage.getItem("code");
if (localStorage.getItem("region") !== null) document.getElementById("region").value = localStorage.getItem("region");
if (localStorage.getItem("host") !== null) document.getElementById("host").value = localStorage.getItem("host");
if (localStorage.getItem("map") !== null) document.getElementById("map").value = localStorage.getItem("map");
if (localStorage.getItem("players") !== null) document.getElementById("players").value = localStorage.getItem("players");
if (localStorage.getItem("maxplayers") !== null) document.getElementById("maxplayers").value = localStorage.getItem("maxplayers");
if (localStorage.getItem("ping") !== null) document.getElementById("ping").value = localStorage.getItem("ping");
if (localStorage.getItem("extra") !== null) document.getElementById("extra").value = localStorage.getItem("extra");
if (localStorage.getItem("timestamp") !== null) document.getElementById("timestamp").checked = localStorage.getItem("timestamp");
if (localStorage.getItem("website") !== null) document.getElementById("website").checked = localStorage.getItem("website");