const img = document.querySelector('#imageInput');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const btn = document.querySelector('#generateBtn');
const imageSection = document.querySelector('#imagespace');
const memeGenerator = document.querySelector(".memeGen");


btn.addEventListener('click', function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const top = document.createElement("div");
    const bottom = document.createElement("div");
    const imgMeme = document.createElement("img");
    let remove = document.createElement("button");

    remove.setAttribute("type","button");

    imgMeme.src = img.value;

    top.classList.add("top");
    top.innerHTML = topText.value;

    bottom.classList.add("bottom");
    bottom.innerHTML = bottomText.value;
    remove.classList.add("removal");
    remove.innerHTML = "Remove!";

    meme.classList.add("meme");
    meme.append(top);
    meme.append(bottom);
    meme.append(imgMeme);
    meme.append(remove);

    let memeLocation = imageSection;
    memeLocation.append(meme);

    remove.addEventListener('click', function(e){
        meme.remove();
    })
})



