


function layout() {
    document.body.style.height = window.screen.height + "px";
}
/*
  导航  初始化导航
*/
function initNavi(title,isBack) {

    var navi =    document.createElement('div');
    navi.className = "navi";



    if (isBack) {
        var backView =    document.createElement('div');
        backView.className = "back";
        backView.innerText = '返回';
        backView.onclick = function () {
            window.history.go(-1);
        };
        navi.appendChild(backView);
    }


    var titleView = document.createElement('div');
    titleView.className = 'title';
    titleView.innerText = title;
    navi.appendChild(titleView)
    
    document.body.appendChild(navi);

}
/*
 initTabbar
*/
function initTabbar() {
    var tabbar =    document.createElement('div');
    tabbar.className = "tabbar";
    document.body.appendChild(tabbar);


    
    var tabbarValues = ['首页','视频','我的'];
    for (let index = 0; index < tabbarValues.length; index++) {
        const element = tabbarValues[index];
        
        var tabbarItem = document.createElement('div');
        tabbarItem.className = 'tabbarItem';
        tabbarItem.innerText = element;
        tabbar.appendChild(tabbarItem);
    }


}