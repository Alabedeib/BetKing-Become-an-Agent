// Attach button files
const uploadButton1 = document.querySelector(".browse-btn1");
const uploadButton2 = document.querySelector(".browse-btn2");
const fileInfo1 = document.querySelector(".file-info1");
const fileInfo2 = document.querySelector(".file-info2");
const realInput1 = document.getElementById("real-input1");
const realInput2 = document.getElementById("real-input2");
uploadButton1.addEventListener("click", (e) => {
  realInput1.click();
});
uploadButton2.addEventListener("click", (e) => {
  realInput2.click();
});
// realInput1.addEventListener("change", () => {
//   const name = realInput1.value.split(/\\|\//).pop();
//   const truncated = name.length > 20 ? name.substr(name.length - 20) : name;
//   fileInfo1.innerHTML = truncated;
// });
// realInput2.addEventListener("change", () => {
//   const name = realInput2.value.split(/\\|\//).pop();
//   const truncated = name.length > 20 ? name.substr(name.length - 20) : name;
//   fileInfo2.innerHTML = truncated;
// });
