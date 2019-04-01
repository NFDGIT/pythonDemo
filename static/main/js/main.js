

function refreshUI(title,url) {
    
    var navi    = document.body.getElementsByClassName('navi')[0];
    var naviTitleView = navi.getElementsByClassName('title')[0];
    naviTitleView.innerText = title;

    var content = document.body.getElementsByClassName('content')[0];
   
    content.innerHTML = '';
    var iframe1 = document.createElement('iframe');
    iframe1.style.height = '100%';
    iframe1.style.width = '100%';
    iframe1.src =  url;
    content.appendChild(iframe1);
}
