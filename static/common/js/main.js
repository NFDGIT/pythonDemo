window.addEventListener("resize",layout);

/*
*/
function layout() {
    document.body.style.height = window.innerHeight + "px";
}



/*
  导航  初始化导航
*/
function initNavi(title,isBack) {

    var navi =    document.createElement('div');
    navi.className = "navi";

    navi.onclick = function () {
        layout();
  
    }

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

var tabbarBlock;
function initTabbar(tabbarValues,block) 
{
    tabbarBlock = block;

    var tabbar =    document.createElement('div');
    tabbar.className = "tabbar";
    document.body.appendChild(tabbar);

    for (let index = 0; index < tabbarValues.length; index++) {
        const element = tabbarValues[index];
        
        var tabbarItem = document.createElement('div');
        tabbarItem.className = 'tabbarItem';
        tabbarItem.innerText = element;
        tabbarItem.onclick = function () {  
            refreshTabbar(index);   
        };


        tabbar.appendChild(tabbarItem);
        
    }


}
function refreshTabbar(index) {

    tabbarBlock(index);

    var tabbar =  document.body.getElementsByClassName('tabbar')[0];   
    var target =  tabbar.getElementsByClassName('tabbarItem')[index];

    var tabbarItems = tabbar.getElementsByClassName('tabbarItem');   
    for (let index = 0; index < tabbarItems.length; index++) {
        const element = tabbarItems[index];
        element.style.color = 'black';
    }
    target.style.color = 'red';
    
}