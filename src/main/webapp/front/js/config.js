
var projectName = '校园二手交易平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '求购信息',
	url: './pages/qiugouxinxi/list.html'
}, 
{
	name: '二手商品',
	url: './pages/ershoushangpin/list.html'
}, 
{
	name: '商品捐赠',
	url: './pages/shangpinjuanzeng/list.html'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssm9087m/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"卖家","menuJump":"列表","tableName":"maijia"}],"menu":"卖家管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"分类","menuJump":"列表","tableName":"fenlei"}],"menu":"分类管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"求购信息","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息管理"},{"child":[{"buttons":["查看","修改","删除","查看评论","审核"],"menu":"二手商品","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的订单","menuJump":"列表","tableName":"wodedingdan"}],"menu":"我的订单管理"},{"child":[{"buttons":["查看","修改","删除","审核","查看评论"],"menu":"商品捐赠","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"捐赠信息","menuJump":"列表","tableName":"juanzengxinxi"}],"menu":"捐赠信息管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"求购信息列表","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息模块"},{"child":[{"buttons":["查看","查看评论","购买"],"menu":"二手商品列表","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品模块"},{"child":[{"buttons":["查看","查看评论","领取"],"menu":"商品捐赠列表","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"求购信息","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息管理"},{"child":[{"buttons":["查看","购买","查看评论"],"menu":"二手商品","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品管理"},{"child":[{"buttons":["查看","支付"],"menu":"我的订单","menuJump":"列表","tableName":"wodedingdan"}],"menu":"我的订单管理"},{"child":[{"buttons":["查看","领取","查看评论"],"menu":"商品捐赠","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠管理"},{"child":[{"buttons":["查看"],"menu":"捐赠信息","menuJump":"列表","tableName":"juanzengxinxi"}],"menu":"捐赠信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"求购信息列表","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息模块"},{"child":[{"buttons":["查看","查看评论","购买"],"menu":"二手商品列表","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品模块"},{"child":[{"buttons":["查看","查看评论","领取"],"menu":"商品捐赠列表","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"求购信息","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"二手商品","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品管理"},{"child":[{"buttons":["查看"],"menu":"我的订单","menuJump":"列表","tableName":"wodedingdan"}],"menu":"我的订单管理"},{"child":[{"buttons":["查看","修改","删除","查看评论","新增"],"menu":"商品捐赠","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠管理"},{"child":[{"buttons":["查看"],"menu":"捐赠信息","menuJump":"列表","tableName":"juanzengxinxi"}],"menu":"捐赠信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"求购信息列表","menuJump":"列表","tableName":"qiugouxinxi"}],"menu":"求购信息模块"},{"child":[{"buttons":["查看","查看评论","购买"],"menu":"二手商品列表","menuJump":"列表","tableName":"ershoushangpin"}],"menu":"二手商品模块"},{"child":[{"buttons":["查看","查看评论","领取"],"menu":"商品捐赠列表","menuJump":"列表","tableName":"shangpinjuanzeng"}],"menu":"商品捐赠模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"卖家","tableName":"maijia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
