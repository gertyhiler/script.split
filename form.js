let autoreg = prompt("Авторег");
let split = prompt("Чем разделены значения? (Дефолт :)", ":");
function parsStr(str, split) {
  return str.split(split);
}
let res = parsStr(autoreg, split);
alert(res[0]);
alert(res[1]);
location.reload();