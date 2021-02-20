let autoreg = prompt("Авторег");
function parsStr(str, split) {
  return str.split(":") == str ? str.split(";") : str.split(":");
}
let res = parsStr(autoreg);
alert(res[0]);
alert(res[1]);
location.reload()
