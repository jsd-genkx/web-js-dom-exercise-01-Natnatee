function magicBtnClick() {
    changeHeading();
    const newElement = document.createElement("div");
    newElement.textContent = "Hello, World!";
    newElement.classList.add("my-class");
    newElement.className = "text-gray-500"; // TailwindCSS

}

function changeHeading(){
    const textHead = document.getElementById("h1")
    textHead.textContent = "Hello JavaScript Inner HTML"
    changeColor(textHead)
}

function changeColor(a) {
    a.style.color = "red"
}