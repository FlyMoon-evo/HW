var _CONTENT = [
  "Hallo Warld",
  "Hello, I'm FlyMoon-evo"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#home-ceo-text");

function Type() { 
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text + " _"; // 打字效果
  _PART_INDEX++;
  if(text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Delete, 50); // 删除效果
    }, 1000);
  }
}

function Delete() {
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text + " _"; // 删除效果
  _PART_INDEX--;
  if(text === '') {
    clearInterval(_INTERVAL_VAL);
    if(_PART == (_CONTENT.length - 1))
      _PART = 0;  // 循环回到第一个段落
    else
      _PART++;
    _PART_INDEX = 0;
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Type, 100); // 开始下一个段落的打字效果
    }, 200);
  }
}

// 启动打字效果
_INTERVAL_VAL = setInterval(Type, 100);
