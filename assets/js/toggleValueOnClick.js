document.addEventListener('DOMContentLoaded', function(){
  "use strict";

  const input = document.getElementById('orientation');
  var inputText = [];

    input.addEventListener("focusin", function () {
      inputText.push(input.value);
      input.value = '';

    input.addEventListener("focusout", function () {
      if (!input.value){
        input.value = inputText.pop();
      }

    });
  });
});
