let articleInfo = document.querySelector(".article-info");
let shareButton = document.querySelector(".article-bottom__share");
let shareButtonIcon = document.querySelector(".article-bottom__share-icon");
let socialLinks = document.querySelector(".article-bottom__links");
let articleBottom = document.querySelector(".article-bottom");
let linksButton = document.querySelector(".article-bottom__links button");
let footerShareButton = document.querySelector(".article__footer__Share");
let windowWidth = window.innerWidth;
let iconState = 0;
function changeIcon(){
        if(iconState == 0){
                shareButtonIcon.src = "./images/icon-share-open.svg";
                iconState = 1;
        } else{
                shareButtonIcon.src = "./images/icon-share.svg";
                iconState = 0;
        }
}

function alternateBottom(){  
        if (windowWidth <= 928 ){
        articleInfo.classList.toggle("hide");
        linksButton.classList.toggle("hide");
        articleBottom.classList.toggle("show")
        }
        if(windowWidth > 928){
                shareButton.classList.toggle("clicked");
                changeIcon();
        }
        socialLinks.classList.toggle("hide");
}

shareButton.addEventListener("click", alternateBottom);

linksButton.addEventListener("click", alternateBottom)