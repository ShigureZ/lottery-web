/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-11 15:24:49
 * @LastEditTime: 2022-06-21 18:34:34
 * @LastEditors: Gavin
 */
const test = [
  ['1', '王韶云', '科技']
  , ['2', '高硕', '科技']
  , ['3', '马彤亮', '科技']
  , ['4', '王维昭', '科技']
  , ['5', '宫诚', '科技']
  , ['6', '王天翔', '科技']
  , ['7', '李晨龙', '科技']
  , ['8', '连璐真', '科技']
  , ['9', '张诚', '科技']
  , ['10', '鄂晓琦', '科技']
  , ['11', '佟鑫斌', '科技']
  , ['12', '刘里扬', '科技']
  , ['13', '吴东', '科技']
  , ['14', '李树刚', '科技']
  , ['15', '吕明阳', '科技']
  , ['16', '楼佳', '科技']
  , ['17', '姚建民', '科技']
  , ['18', '李树环', '科技']
  , ['19', '周建宇', '科技']
  , ['20', '赵大为', '科技']
  , ['21', '张欢', '科技']
  , ['22', '陈璐', '科技']
  , ['23', '王军', '科技']
  , ['24', '吴瑕', '科技']
  , ['25', '李海津', '科技']
  , ['26', '王同', '科技']
  , ['27', '李来友', '科技']
  , ['28', '杨建光', '科技']
  , ['29', '唐霁', '科技']
  , ['30', '王玮', '科技']
  , ['31', '汪启伟', '科技']
  , ['32', '冯龙', '科技']
  , ['33', '程帆', '科技']
  , ['34', '李洋', '科技']
  , ['35', '田家利', '科技']
  , ['36', '郭鑫星', '科技']
  , ['37', '邓志伟', '科技']
  , ['38', '张博', '科技']
  , ['39', '张禹', '科技']
  , ['40', '张博森', '科技']
  , ['41', '李岳', '科技']
  , ['42', '牛孟尧', '科技']
  , ['43', '陈明曦', '科技']
  , ['44', '刘云奇', '科技']
  , ['45', '杨澜', '科技']
  , ['46', '吴天爽', '科技']
  , ['47', '王健安', '科技']
  , ['48', '马璞钰', '科技']
  , ['49', '南曦', '科技']
  , ['50', '刘超', '科技']
  , ['51', '赵昆越', '科技']
  , ['52', '张金鑫', '科技']
  , ['53', '刘娟', '科技']
  , ['54', '李炯辰', '科技']
  , ['55', '刘畅', '科技']
  , ['56', '田伟', '科技']
  , ['57', '赵真', '科技']
  , ['58', '果晓彬', '科技']
  , ['59', '冯放', '科技']
  , ['60', '刘蕊', '科技']
  , ['61', '高铭远', '科技']
  , ['62', '王培源', '科技']
  , ['63', '秦冠华', '科技']
  , ['64', '郑博仑', '科技']
  , ['65', '董清', '科技']
  , ['66', '吴运晨', '科技']
  , ['67', '张海潮', '科技']
  , ['68', '李金杨', '科技']
  , ['69', '单劲松', '科技']
  , ['70', '王瑞欢', '科技']
  , ['71', '许晓宇', '科技']
  , ['72', '王基繁', '科技']
  , ['73', '张炜宁', '科技']
  , ['74', '张芯铜', '科技']
  , ['75', '翟星宇', '科技']
  , ['76', '李霨', '科技']
  , ['77', '申志彬', '科技']
  , ['78', '尚宏宇', '科技']
  , ['79', '张东升', '科技']
  , ['80', '许勇', '科技']
  , ['81', '石坚', '科技']
  , ['82', '刘天青', '科技']
  , ['83', '李昂', '网金']
  , ['84', '田延亭', '网金']
  , ['85', '杨芳', '网金']
  , ['86', '王洪莹', '网金']
  , ['87', '刘志远', '网金']
  , ['88', '郭桐源', '网金']
  , ['89', '王永明', '网金']
  , ['90', '蔡慧玲', '网金']
  , ['91', '韩步昂', '网金']
  , ['92', '周旸', '网金']
  , ['93', '王蕊', '网金']
  , ['94', '么昆民', '网金']
  , ['95', '冯天泽', '网金']
  , ['96', '韩于钛', '网金']
  , ['97', '李茂轩', '网金']
  , ['98', '徐鹏博', '网金']
  , ['99', '黄珊', '网金']
  , ['100', '韩宇飞', '网金']
  , ['101', '牛子升', '网金']
  , ['102', '李欣竹', '网金']
  , ['103', '纪磊', '网金']
  , ['104', '韩玮', '网金']
  , ['105', '袁凯雯', '网金']
  , ['106', '马小婷', '网金']
  , ['107', '程若瑀', '网金']
  , ['108', '沈璐', '网金']
  , ['109', '李洁', '网金']
  , ['110', '于宗平', '网金']
  , ['111', '石海娟', '网金']
  , ['112', '胡勃', '网金']
  , ['113', '王彬', '工会']
  , ['114', '陈力', '工会']
  , ['115', '梁琰', '工会']
  , ['116', '林涛', '工会']
  , ['117', '陈军', '工会']
]

function randomsort(a, b) {
  return Math.random() > .5 ? -1 : 1;
  //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}



const user = test
/**
 * 卡片公司名称标识
 */
const COMPANY = "";
/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 * ROTATE_TIME:转的球速度越大越慢
 * circle:旋转圈数最好8*x倍数
 * enter: //抽奖进行时音乐
 * awards: //颁奖音乐
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "抽奖结束",
    text: "需要重新抽奖请配置后重置"
  },
  {
    type: 1,
    count: 5,
    text: "一等奖 ",
    title: "",
    img: "./img/huawei.png",
    ROTATE_TIME: 10000,
    circle: 8 * 6

  },
  {
    type: 2,
    count: 10,
    text: "二等奖 ",
    title: "",
    img: "./img/mbp.jpg",
    ROTATE_TIME: 10000,
    circle: 8 * 3
  },
  {
    type: 3,
    count: 15,
    text: "三等奖  ",
    title: "",
    img: "./img/ipad.jpg",
    ROTATE_TIME: 10000,
    circle: 8 * 3
  },

];
let luckyData = JSON.parse(localStorage.getItem("luckyData")) || {};

let leftUsers = JSON.parse(localStorage.getItem("leftUsers")) || user;

let awardList = JSON.parse(localStorage.getItem("awardList")) || {}


//不能说的秘密
const excludeUser = [["000005", "张无忌", "技术部"]]
/**
 * @description: 不能说的秘密
 * @param {*} nowItem 当前奖品
 * @param {*} basicData 当前奖池人员
 * @return {*}
 * @Date: 2022-01-13 15:13:31
 */
function setSecret(nowItem, basicData) {
  if (nowItem.type != 4) {
    // console.log(mockData.excludeUser);
    const excludeId = excludeUser.map(item => item[0])
    // console.log(excludeId, basicData.leftUsers);
    basicData.leftUsers = basicData.leftUsers.filter(human => !excludeId.includes(human[0]))
    // console.log(basicData.leftUsers);
  }
}
//颜色
const rgba = "0,0,0"
//透明度
const opacity = () => 0.3 || Math.random() * 0.7 + 0.25
//气氛组卡片
const atmosphereGroupCard = () => `rgba(${rgba},${opacity()})`
//背景色
const background = "url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ef5e59c878d5a8012053f8c53ab7.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645253836&t=e6413ccc6469632cf5476f5f6067e13b)"
//背景动态壁纸模式 不用时可以设置为null或者注释
// const bgVideo="//game.gtimg.cn/images/lol/act/a20220121lunarpass/bg.mp4"
const width = window.innerWidth * .75
const height = window.innerWidth * .75 * .75
/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 5, 10, 15];

const PRICE_DIS = [[], [1, 1, 3], [0, 4, 6], [2, 5, 8]]

export default { EACH_COUNT, PRICE_DIS, prizes, COMPANY, user, luckyData, leftUsers, awardList, excludeUser, atmosphereGroupCard, background, setSecret, width, height, bgVideo }