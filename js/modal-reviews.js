"use strict";function submitEmailRR(e){var t=window.atob("aHR0cHM6Ly9nZXRzaW1wbGVmb3JtLmNvbS9tZXNzYWdlcz9mb3JtX2FwaV90b2tlbj0yNTE5NDA0MDAwM2RhMzJkNTU3YWZiMjQ1ODUxNzgzZA==");fetch("".concat(t),{credentials:"same-origin",mode:"no-cors",method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"company='ТРАНС ВЕКТОР'&name=".concat(e.name,"&text=").concat(e.text)}).catch(function(e){return console.log(e)})}function validaionFormRR(e){e.preventDefault();var t=document.querySelector("input.re-inp"),o=document.querySelector(".re-text");submitEmailRR({name:t.value,text:o.value}),t.value="",o.value="",document.querySelector("#modal-reviewsX").style.display="none",alert("Успешно отправлено!")}var modalFormRR=document.querySelector("#modal-reviewsX");modalFormRR.addEventListener("submit",function(e){return validaionFormRR(e)});
//# sourceMappingURL=modal-reviews.js.map
