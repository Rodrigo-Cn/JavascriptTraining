var container = document.querySelector("div");
var entrada = [
    {tag:"h1",texto:"titulo aqui"},
    {tag:"h2",texto:"nav aqui"},
    {tag:"p",texto:"section aqui"},
    {tag:"p",texto:"footer"},
];

for(let i=0; i<4; i++){
    var {tag,texto} = entrada[i];
    var tag1 = document.createElement(tag);
    tag1.innerHTML = texto;
    container.appendChild(tag1);
}

for(let i=0; i<4; i++){
    var {tag,texto} = entrada[i];
    var tag1 = document.createElement(tag);
    tag1.innerHTML = texto;
    container.appendChild(tag1);
}

