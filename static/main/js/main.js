
function refreshUI(index) {


    var navi    = document.body.getElementsByClassName('navi')[0];
    var naviTitleView = navi.getElementsByClassName('title')[0];

    switch (index) {
        case 0:
            naviTitleView.innerText = '首页';
            refreshMainUI();
            break;
        case 1:
            naviTitleView.innerText = '视频';
            refreshVideoUI();
            break;
        case 2:
            naviTitleView.innerText = '我的';
            refreshMainUI();
            break;
        default:
            break;
    }
}


/*

首页的  页面
*/
var datas = [{'title':'即时通讯','url':'/common/html/IMDemo.html'},
             {'title':'iOS只是总结','url':'/common/html/iOStech.html'},
             {'title':'桌球','url':'common/html/tableBallGame.html'},
             {'title':'数据库','url':'common/html/database.html'},
             {'title':'富文本','url':'common/html/rishText.html'},
             {'title':'挖矿','url':'common/html/blockChainDemo.html'}];

function refreshMainUI() {

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


    content.innerHTML = '';
    content.appendChild(ul);



}

/*

视频的  页面
*/
var videoDatas = [
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'},
{'title':'即时通讯','url':'/common/html/IMDemo.html'},
{'title':'iOS只是总结','url':'/common/html/iOStech.html'},
{'title':'桌球','url':'common/html/tableBallGame.html'},
{'title':'数据库','url':'common/html/database.html'},
{'title':'富文本','url':'common/html/rishText.html'},
{'title':'挖矿','url':'common/html/blockChainDemo.html'}];


function refreshVideoUI() {

    var ul = document.createElement('ul');

    for (let index = 0; index < videoDatas.length; index++) {
        const element = videoDatas[index];
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
  
    content.innerHTML = '';
    content.appendChild(ul);

}