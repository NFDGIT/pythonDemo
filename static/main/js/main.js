

var datas = [{'title':'即时通讯','url':'/common/html/IMDemo.html'},
             {'title':'iOS只是总结','url':'/common/html/iOStech.html'},
             {'title':'桌球','url':'common/html/tableBallGame.html'},
             {'title':'数据库','url':'common/html/database.html'},
             {'title':'富文本','url':'common/html/rishText.html'},
             {'title':'挖矿','url':'common/html/blockChainDemo.html'}];

function refreshUI(index) {

    var ul = document.createElement('ul');

    for (let index = 0; index < datas.length; index++) {
        const element = datas[index];
        var title = element['title'];
        var url   = element['url'];

        var link = document.createElement('a');
        link.innerText = title;
        link.href = url;


        var li = document.createElement('li');
        li.appendChild(link);
    
        ul.appendChild(li);
  
    }

    var content = document.body.getElementsByClassName('content')[0];
    var navi    = document.body.getElementsByClassName('navi')[0];
    var naviTitleView = navi.getElementsByClassName('title')[0];

    switch (index) {
        case 0:
            content.style.background = 'white';
            naviTitleView.innerText = '首页';
            break;
        case 1:
            content.style.background = 'red';
            naviTitleView.innerText = '视频';
            break;
        case 2:
            content.style.background = 'green';
            naviTitleView.innerText = '我的';
            break;
        default:
            break;
    }
    content.innerHTML = '';
    content.appendChild(ul);



}