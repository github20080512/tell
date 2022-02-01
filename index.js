var wordIndex = 0;
var wordIndex1 = 0;
var judgeIndex = 0;
var title = "";
var postive = [];
var negactive = [];
var mode = "pic";
var arr = [
  "寄蜉蝣于天地,渺沧海之一粟",
  " ",
  "哀吾生之须臾,羡长江之无穷",
  " ",
  " ",
  "反正烂命一条，随它去。不管富贵贫穷，不管成功失败，不管妻妾成群还是独自一人，迟早，都会死的。只是你选择怎么样死？",
  "不斤斤计较 不贪便宜 不害怕损失 不怕尴尬 不怕错 不评价任何人包括自己 无所谓闲言碎语",
  "不喜不怒 不以物喜 不以己悲 不怨不叹 不贪不恋 不计得失 不烦不燥 凡事耐心",
  "不懒惰  不害羞 不羡慕 不嫉妒 不虚荣 不自豪 不攀比 不自卑 不幻想 无畏无惧",
  "不希望 不期待 不祈求 不害怕失败 不害怕拒绝 有素质 有教养 看破红尘 悠游自在",
  " ",
  " ",
  " ",
  "你的目标是什么？",
  "你有记得吗？",
  "你有坚持吗？",
  "你还要等明天再努力吗？",
  "你忘记你的目标了吗？",
  "你有为你的目标付出吗？",
  "你忘记你信誓旦旦的话了吗？",
  "你忘记你的承诺了吗？",
  "你说了多少次要努力？",
  "你曾经制定的计划呢？",
  "你失败了吗？",
  "你在垂头丧气？",
  "你在蹉跎岁月吗？",
  "你放弃了吗？",
  "你生病了吗？",
  "感冒？咳嗽？发烧？车祸？",
  "心痛？头疼？上火？焦虑？",
  "闭上眼睛 深呼吸 休息一下",
  "所有的焦虑、忧愁、病痛都会过去的。",
  "一个执着的念头，你挥之不去，纠缠着你，困扰着你，焦虑着你。你不用管。任由它去。休息段时间。过段时间就好了。",
  "过段时间，你自然就会忘记。就像忘记所有教训，一部电影，一个人。",
  "你在想什么",
  "你在等什么",
  "你要干什么",
  "你在焦虑吗",
  "你在悲伤吗",
  "你在自卑吗",
  "你在愤怒吗",
  "你在烦躁吗",
  "你在着急吗",
  "你在骂人吗",
  "你在幻想吗",
  "你在性幻想吗",
  "她叫什么名字",
  "她是什么样的",
  "她在你身边吗",
  "她在你怀里吗",
  "你讲卫生吗？",
  "你邋遢吗？",
  "你身上臭吗",
  "你文明吗？",
  "你绅士吗？",
  "你信任一个人吗？",
  "你将希望寄托在一个人身上吗？",
  "你在祈求上天吗？",
  "你想一夜暴富吗？",
  "你有去偷东西吗？",
  "你想追求不属于你的女人？",
  "你还要堕落最后一次再去努力吗",
  "你遇到压力就放纵？",
  "你还是不停地咀嚼零食吗",
  "你还是不停地喝饮料吗",
  "你还是什么都不干，在等结果？",
  "请你放下 ",
  "请你深呼吸",
  "请你离开",
  "请你换一下环境",
  "请你立即干完或放下手里的事情",
  "去另一个地方呆着 冷静着 休息着",
  "请你出去走走",
  "如果在听歌，请摘掉耳机",
  "如果没有听歌，可以听歌试试",
  "如果你沉迷在一个肮脏的坑里",
  "你要爬上岸，去寻找一个舒适的地方",
  "你稍微改变一下，你会发现没有那么难得",
  "新地方会比原来的地方更舒服",
  "你还记得曾经你喜欢跑步吗",
  "你还记得曾经你喜欢举哑铃吗？",
  "你还记得曾经你喜欢俯卧撑吗？",
  "你还记得有很多好听的歌？",
  "你的目标是什么",
  "你的目标是什么",
  "你的目标是什么",
  "你今年的目标是什么？",
  "你最近的目标是什么？",
  "你忘了吗？",
  "你在打工吗？",
  "你有家吗？",
  "有人在乎你吗？",
  "有人发微信给你吗？",
  "有人给你过生日吗？",
  "有人陪你过节日吗？",
  "你为什么离家出走？",
  "你为什么离校出走？",
  "你为什么通宵上网？",
  "你为什么沉迷色情？",
  "你是谁？",
  "你今年多大了？",
  "你有女朋友吗？",
  "你有小孩吗？",
  "你父母健在吗？",
  "你有钱吗？",
  "你是什么学历呢？",
  "你工资有多少呢？",
  "你的家庭富裕吗？",
  "你的同学现在怎么样了？",
  "你的同龄人结婚了吗？",
  "你幽默吗？",
  "你强壮吗？",
  "你聪明吗？",
  "你有爱情吗？",
  "你有朋友吗？",
  "你过去干了些什么？",
  "你有资格焦虑吗？",
  "你有资格懒惰吗？",
  "你有资格贪玩吗？",
  "你是懒惰的，懦弱的，无能的，愚昧的，优柔寡断的",
  "贫穷肮脏，无素质，无教养，无知的",
  "无情无义的，忘恩负义的，自私自利的，吃独食的",
  "你根本没资格想别人。",
  "你没资格想她",
  "也没资格去表现，去表达，去攀比，去嫉妒，去虚荣，去幻想",
  "也没资格去懦弱，去胆怯，去焦虑，去难过，去愤怒，去后悔",
  " ",
  "当你焦虑时候，你不要抗争，不要追寻完美结果。",
  "你此时此刻得不到最终结果的。",
  "因为事情发展是需要时间的。有时一天，有时一月，有时一年。是需要你耐心等待的。你不到最后的时候，你怎么知道结果？你就算能思考出结果，难道中途不会发生其他可能？不会发生好的或坏的可能？",
  "因为信息差，你无法知道所有条件，那么你怎么可以按只言片语，一面之词就断定你所焦虑的一定是发生的呢",
  "另一个情况，你不要以为你努力就会成功。你知道中途有可能生病，有可能遭遇意外吗？",
  "所以，不要太当一回事了。过好今天，不要让今天产生遗憾。就是完美的一天。",
  "对所有人所有事保持无感情无表情。特别关心的人要客客气气的。记住错的是你，不是别人。",
  "不要阴阳怪气，咄咄逼人，伤人一百，自损一万。",
  "不要跟以前一样内耗来浪费时间，到最后一无所有。",
  "你现在基本什么都没有。你或许拥有的因为没有人继承，所以当你死了那天，便不再存在。 既然你什么都没有，为什么还害怕失去。",
  "因为别人的存在，你才会觉得自己傻，觉得自己比较不过人家。才会更在意无所谓的损失。才会觉得自卑。不去看别人便没有乱七八糟的感受了。便也就不会幻想成功了。别人的成功也只是一时的。他们会生病，会遭遇车祸，遭遇亲人离去，遭遇背叛，遭遇大跌大落，最终会老死病死。同样，你也会。",
  "实际上这个社会本就是竞争的。所以别人很高兴看到你落败的愤怒的模样。所以别人根本不在乎你的。你沾沾自喜的别人的称赞不是客套就是虚伪。所以你何必在乎别人的目光、称赞。",
  "他们得意 愤怒 生气 嫌弃 嘲讽 鄙视 漠视 嘲笑 讥笑，体现的是他们的教养。有时候他们冲动，故意刺激你与他争吵。你耳朵听着，不必生气，不必委曲，不必难过，要面无表情地，切记不可动怒。否则就中了别人的圈套，万劫不复。",
  "你耳朵有时听到一些难听的话，有时是说者无意，听者有意？",
  "一些小事，你计较着，对你有什么好处？能增加你的金钱吗？",
  "作为一个生物，你需要巴多胺。吃饭 健身 学习便可获得，也就是快乐。巴多胺不用等死去那天，就等过3天，便会不再存在。这就是你热血最多3天的原因。想勤奋保持习惯就好。",
  "最后一次。只不过是拖延症，只不过还存在着欲望。你没有断舍欲望，便永远脱不了身。",
  "没有希望，便不会失望。没有欲望，便不会因为不能满足而痛苦。而你不停地吃东西、喝饮料、消费、色情、抖音，是在提高欲望阈值。所以除了饭，水，不要再拥有其他不良习惯产生的欲望。可以拥有的习惯：健身 看书。",
  "别人都没资格评价你，你就有资格评价别人吗？你可以讨厌别人的面貌，可以厌恶别人的声音吗？可以嫌弃别人的气味吗？你不喜欢你可以离开。你没能力离开，那就安静地呆着。提高自己，最终有能力的时候，选择离开。你为什么会和他们在一起呢。物以类聚，人以群分",
  "如果你有出息，关心你的亲人便也会开心的幸福的，精神面貌便也是很好的。可是你没有出息，他们也会焦虑，神烦，痛苦，便也无心无力装扮自己。你讨厌你自己吧。",

  "不要后悔你之前的决策。决策错了，你需要重新提高自己。你要记着教训，不要再犯。而不是不停地惋惜，不停地悔恨。",
  " ",
  "不用跟自己和别人抗争了。你几十年都没有抗争过来。",
  "不用在说浪费时间 浪费金钱了。你说了多少次了。改变不过来了。你承认吧。认命吧。",
  "蝴蝶效应，意外，生病，很多的事情，都会困扰到你。执意要你承担时，你把它解决掉吧。也不抵抗了。",
  "不看别人的美了。不看别人的成功了。别人与我无关。不在意别人说话的声音，不在意别人朋友圈，不在意别人的炫富，不在意别人路过。",
  "不要担忧未来了，你本就没有未来。",
  "也不必回忆过去了。那些没有的未来的回忆",
  "那些错，窝囊，猥琐，懦弱，龌龊，自私，低声下气，没有骨气。也与我无关",
  "别回忆，别谈情怀。只面对今天和随时到来的死亡。",
  "我已经死了 被自己杀死了。",
  "也不用指望 寄托别人了。",
  "也不用害怕生老病死了。",
  "不用幻想你会成功了。不用渴望温暖情感了。",
  "放弃了。我自己一个人悠游自在。无论在哪。无论何时。无忧无虑，不喜不怒，是最难得的平淡，是放下，是看破红尘。",
];

var arr1 = [
  "无非就是想要快活无非有是想满足大脑对巴多胺的需求",
  "零食 糖 红牛 咖啡 躺在床上 被窝温度 拖延 懒惰",
  "成功 赞赏 欣赏 尊敬 重视 依赖 影视 小说 抖音",
  "单方面恋爱 性 色情 幻想 消费 烟 酒 毒品",
  "你闭上眼睛 扪心自问",
  "你沉迷于此，你最终能得到什么？",
  "能实现你的目标吗？",
  "生而为人，你要学业有成，结交朋友，寻找爱人，成家立业，赡养母亲，你有一样完成吗？",
  "你真的快乐吗？",
  "你是不是事后伴有悔恨？",

  "随着欲望阈值提高，随着年龄阅历的增长，那短暂的欢愉也只是麻木的隔靴止痒 饮鸩止渴",
  "短暂的欢愉只是毒瘾的开端",
  "反复的欢愉只是毒瘤的扩张",
  "在向地狱堕落",
  "可是别人也有同样的欲望，别人能够自控自如，懂得节制，懂得珍惜，别人同时在突飞猛进",
  "别人有情有义，别人拥有更高质量的巴多胺需求，并满足，并分享，并良性循环",
  "在向天堂奔腾",

  "别人最终完成所有任务，阖家幸福，拥有更高的智慧，让你崇拜的丰功伟绩",
  " ",
  "你可以改变吗？",
  "如果你把那些欢愉换成健身 是不是同样可以获得巴多胺并让自己自立自强？",
  "如果你把那些欢愉换成学习 是不是同样可以获得巴多胺并让自己实现目标？",
  " ",
  "茫茫岁月中，你有曾留下值得留下的东西？",
  "茫茫天地中，你有在乎你了解你关心你的人吗？",
  "你有完成作业吗",
  "你有考上大学吗",
  "你有战胜过自己吗",
  "你有克服过困难吗",
  "你遇到棘手问题第一想的逃避，等待是吗",
  "你为完成别人布置的简单的事情而沾沾自喜吗",
  "你以为你是特殊的别人不能代替你吗",
  "你谦虚吗",
  "你有资格谦虚吗",

  "你有努力过吗",

  "你有为爱付出过吗",
  "你有站直过身体吗",
  "你有偷窃过东西吗",
  "你有杀过动物吗",
  "你有嫖娼行为吗",

  "你有没有半途而废，失信自己，作践自己？",
  "几十年经历过来，早已证明你从未成功过，从未说到做到，从未信守承诺",
  "莽莽撞撞，犹犹豫豫，愚昧无知，鼠目寸光，胆小如鼠，为非作歹，不知好歹",
  "却在乎别人对你的看法，简直虚伪，可笑",
  " ",
  "有的人做县长 抖音月赚几百万 搞创作赚几千万",
  "有的人做老板 结婚有儿女成双 双亲都领养老金",
  "有的人很快乐 为人处世很圆滑 经常换女友情人",

  "知道别人为什么能成功吗 能出类拔萃能光彩夺目能引起你的幻想吗？",
  "因为别人在你放松躺在舒服区里幻想懒惰快活堕落麻木焦虑猜忌悔恨的时候",
  "别人在每日写作业在考大学在学习在锻炼在付出在勤奋在为爱为理想而坚持",

  " ",
  " ",
  " ",
  "这世界是不公平的，残忍的，复杂的",
  "有时美丽有时肮脏的",
  "有时魅惑有时诡谲的",
  "有时痒有时疼有时舒服",
  "有时喜有时怒有时悲痛",
  "而你是罪恶的",
  "没有资格想别人",
  "没有资格听看想别人的所作所为所想 与别人比较",
  "没有资格说累 痛 孤独 悲痛 成功 幸福",
  "没有资格想舒服 想放松 想享受",
  " ",
  "没有资格想自己",
  "一丝一毫一分一秒任何",
  " ",
  "其实你并不重要",
  "其实你什么都不是",
  " ",
  "一个人无忧无虑悠游自在不好吗",
  " ",
  "心静 淡定 坚毅 意志 冷静 教养 专心 平静 忍耐 耐心",
  "设定底线 三思而后行",
  "凡事不要有压力 保持无所谓的态度",
  "所有东西都会可能意外失去 所有事情都会可能失败 或许都早已注定",
  "不必对未来抱有希望 不要抱有幻想 不要心存侥幸",
  "作最坏的打算",
  " ",
  "坐有坐相 站有站相",
  "不以物喜 不以己悲",
  "不表露情绪",
  "不要觉得自己牛逼轰轰的",
  "清心寡欲",
  "不要听看不干净、影响情绪的的东西",
  "其实有很多好听的歌曲",
  "MY SONGS KNOW WHAT YOU DID IN THE DARK",
  "bad habits",
  "听闻远方有你",
  "......",
  "实在不行，多花些时间看一部电影",
  "哪怕一部电视剧",
  "哪怕游戏",
  "不沉迷其中就好",
  " ",
  "一切都是瞬息万变的，你不知道明天会发生什么，你不必焦虑。",
  "所有的昨天也都会过去的，你也会忘记，你不必悔恨。",
  "你只要做好今天就行",
  "遇到烦恼困苦，静下心来改变一下",
  "再踏出一步 接着往前走",
  " ",
  "有时音乐 小说 视频都是吵闹的，欲望也是杂乱的，执着的，总是会分心的，你需要静心",
  "有时的损失，缺失，失败，背叛，你不必在意",
  "只要你拿得起放得下，不耿耿于怀，不自暴自弃，自会弥补回来的。不要因小失大。",
  " ",
  "你本是穷的，被剥削的，你已经苦难重重",
  "何必再用欲望 杂念 懒惰 拖延再为难自己，再作践自己，再堕落自己",
  " ",
  "你愿意做聪明的人 还是做愚昧的人",
  "你愿意做暴躁的骂骂咧咧的人 还是做冷静淡定的人",
  "你愿意做有原则的人 还是做优柔寡断犹犹豫豫的人",
  "你愿意做邋遢龌龊被人指点谩骂的人 还是做干净清爽不被别人左右的人",
  " ",
  "不怕失眠 控制自己思绪",
  "不再焦虑",
  "不再畏惧",
  "制定的计划必须执行",
  "不再感情用事",
  "大声说话 表明自己很生气是最愚蠢的行为。你不能表现素质，就要表现没有教养吗？可是你知道，你却奈何不了别人。试问，你要去杀他吗",
  "你要拿自己的命去换别人的命吗？你要拿你碌碌无为一生的卑微的钱财去换别人的九牛一毛的损失吗？",

  " ",
  "零食，饮料，酸的甜的辣的刺激的兴奋的，都是drug",
  "消费，享受，舒服，视频，偷懒，追求短暂快感，贪便宜都是drug",
  "想干嘛就干嘛,而不经过思量，只想满足是drug",
  "安于现状，只一点小成就就沾沾自喜是drug",
  "冲动 未经思考的决定 决定后半路放弃是drug",
  "曾经信誓旦旦要努力，结果总是堕落拖延是drug",
  " ",
  "幸灾乐祸是drug",
  "看别人倒霉高兴是drug",
  "看别人成功眼红是drug",
  "看别人魅惑想入非非是drug",
  " ",
  "抠鼻孔 扣脚丫 抓痒等身体部位是drug",
  "遇到困难就感到压力，遇到压力就想着放纵是drug",
  "比如遇到失眠，想着sy来助眠",
  "舒服躺床上 被窝温暖也是drug",
  "怕苦 怕挫折是drug",
  "凡是drug，都有成瘾性，都是放纵，都会让自己变成头脑简单的目光短浅的老鼠",
  "你没有多少年可以活着了",
];
var timer = null;
var timer1 = null;
var goal = [];

var timeNum = 30;
var goalJudge = false;
const background = document.querySelector(".bg");
function readWord() {
  if (mode == "pic") {
    background.innerHTML = "";
    background.style = `background: url(./image/th${
      wordIndex % 41
    }.jfif) center center / cover no-repeat`;
    document.querySelector(".my-h2").style.color = "#fff";
    if (!arr[wordIndex]) {
      return;
    }
    document.querySelector(".my-h2").innerHTML = arr[wordIndex];
  } else {
    background.style = ``;
    document.querySelector(".my-h2").style.color = "black";
    generateBoxes(21, background);
    if (!arr1[wordIndex1]) {
      return;
    }
    document.querySelector(".my-h2").innerHTML = arr1[wordIndex1];
  }
}
readWord();
document.onclick = function () {
  if (judgeIndex != 0 || goalJudge) {
    return;
  }

  wordIndex++;
  wordIndex1++;
  if (wordIndex == 1 && mode == "pic") {
    goalJudge = true;
    timeNum = 30;
    goal = [
      "做一个坚毅 强壮 有教养的人",
      "做一个心静 淡定 无所谓的人",
      "做一个聪慧 忍耐 不后悔的人",
      "做一个专心 做到 不显露情绪",
      "学会JS   强身健体",
      "摆脱枷锁 悠游自在",
      "看淡生死 杀伐果断",
      "财富自由 无所忌惮",
    ];
    document.querySelector(".my-h2").style.display = "none";
    document.querySelector(".goal").style.display = "block";
    document.querySelector("#goal-time").style.display = "block";

    timer = setInterval(function () {
      timeNum--;

      // document.querySelector("#goal-time").innerText = timeNum<10?"0"+timeNum:timeNum
      if (timeNum == -1) {
        clearInterval(timer);
        timeNum = 0;
        document.querySelector("#goal-time").style.display = "none";
        // document.querySelector(".goal-result").style.display = "block";
        document.querySelector("#goal-result").innerHTML = "";

        timer1 = setInterval(function () {
          if (timeNum == 0) {
            var tem = goal.shift();
            console.log(tem);
            if (tem) {
              document.querySelector(
                "#goal-result"
              ).innerHTML += `<li>${tem}</li>`;
              timeNum = 5;
            } else {
              clearInterval(timer1);
              goalJudge = false;
            }
          }
          timeNum--;
        }, 1000);
      }
    }, 1000);
  } else if (wordIndex == 2 && mode == "pic") {
    document.querySelector(".goal").style.display = "none";
    document.querySelector(".my-h2").style.display = "block";
  } else if (wordIndex == 3 && mode == "pic") {
    document.querySelector(".my-h2").style.display = "none";
    document.querySelector(".write").style.display = "block";
  } else if (wordIndex == 4 && mode == "pic") {
    document.querySelector(".my-h2").style.display = "none";
    document.querySelector(".write").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".favorite").style.display = "block";
  } else {
    document.querySelector(".my-h2").style.display = "block";
    document.querySelector(".write").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".favorite").style.display = "none";
  }
  readWord();
};

document.querySelector("#my-textarea").onkeydown = function (ev) {
  console.log(ev.key);
  if (ev.key == "Enter" && this.value != "") {
    if (judgeIndex == 0) {
      title = this.value;
      document.querySelector("#my-title").innerText = "POSITIVE";
      judgeIndex++;
    } else if (judgeIndex == 1) {
      postive.push(this.value);
    } else if (judgeIndex == 2) {
      negactive.push(this.value);
    }
    document.querySelector("#my-textarea").value = "";
  }
};

document.querySelector("#my-submit").onclick = function () {
  if (judgeIndex == 0) {
    title = document.querySelector("#my-textarea").value;
    judgeIndex++;
    document.querySelector("#my-title").innerText = "POSITIVE";
    document.querySelector("#my-textarea").value = "";
  } else if (judgeIndex == 1) {
    judgeIndex++;
    if (document.querySelector("#my-textarea").value != "") {
      postive.push(document.querySelector("#my-textarea").value);
    }
    document.querySelector("#my-title").innerText = "NEGACTIVE";
    document.querySelector("#my-textarea").value = "";
  } else if (judgeIndex == 2) {
    judgeIndex++;
    if (document.querySelector("#my-textarea").value != "") {
      negactive.push(document.querySelector("#my-textarea").value);
    }
    document.querySelector(".write").style.display = "none";
    document.querySelector(".result").style.display = "block";
    document.querySelector("#my-result-title").innerText = title;

    for (var i = 0; i < postive.length; i++) {
      document.querySelector(
        ".positive-ul"
      ).innerHTML += `<li>${postive[i]}</li>`;
    }

    for (var i = 0; i < negactive.length; i++) {
      document.querySelector(
        ".negactive-ul"
      ).innerHTML += `<li>${negactive[i]}</li>`;
    }

    console.log(title);
    console.log(postive);
    console.log(negactive);
  }

  console.log(judgeIndex);
};
document.querySelector("#my-submit-1").onclick = function (e) {
  e.stopPropagation();
  judgeIndex = 0;
  document.querySelector(".write").style.display = "block";
  document.querySelector(".result").style.display = "none";
  document.querySelector(".positive-ul").innerHTML = "";
  document.querySelector(".negactive-ul").innerHTML = "";
  document.querySelector("#my-title").innerText = "WHAT WARE YOU TINGKING？";
  document.querySelector("#my-textarea").value = "";
  postive = [];
  negactive = [];
};

document.querySelector("#my-submit-2").onclick = function () {
  judgeIndex = 0;
};
document.querySelector(".write").onclick = function (e) {
  e.stopPropagation();
};
const generateBoxes = (limit, parent) => {
  parent.innerHTML = "";
  const colors = [
    "#577590",
    "#43aa8b",
    "#90be6d",
    "#f9c74f",
    "#f8961e",
    "#f3722c",
    "#f94144",
  ];
  for (i = 0; i < limit; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    box.style.height = `${Math.floor(Math.random() * 300 + 50)}px`;
    box.style.width = `${Math.floor(Math.random() * 300 + 50)}px`;
    box.style.top = `${Math.floor(Math.random() * 80)}%`;
    box.style.left = `${Math.floor(Math.random() * 80)}%`;
    parent.appendChild(box);
  }
};

var change = document.querySelector("#change");
var music = document.querySelector("#music");
change.onclick = function (e) {
  // e.stopPropagation();
  if (goalJudge) {
    return;
  }
  document.querySelector(".goal").style.display = "none";

  document.querySelector("#goal-result").innerHTML = "";

  if (mode == "pic") {
    wordIndex1 = -1;
    favoriteIndex = 1;
    document.querySelector(".favorite").style.display = "none";

    document.querySelector("#favorite-btn").style.display = "block";
    document.querySelector(".favorite-img").style.display = "none";
    mode = "abstract";
    this.style.color = "orange";
  } else {
    wordIndex = -1;
    mode = "pic";
    this.style = "";
  }
};
var musicJudge = true;
music.onclick = function (e) {
  e.stopPropagation();

  if (musicJudge) {
    this.style.color = "orange";
    document.querySelector("#music-control").play();
  } else {
    this.style = "";
    document.querySelector("#music-control").pause();
  }
  musicJudge = !musicJudge;
};

var favoriteIndex = 1;
document.querySelector("#favorite-btn").onclick = function (e) {
  e.stopPropagation();
  this.style.display = "none";
  document.querySelector(".favorite-img").style.display = "block";
  document.querySelector(
    ".favorite-img"
  ).style = `background: url(./image1/${favoriteIndex}.jfif) center center / 100% no-repeat`;
  document.querySelector(".favorite-img").onclick = function (e) {
    e.stopPropagation();
    favoriteIndex++;
    if (favoriteIndex > 15) {
      document.querySelector(".favorite").style.display = "none";
      return;
    }

    document.querySelector(
      ".favorite-img"
    ).style = `background: url(./image1/${favoriteIndex}.jfif) center center / 100% no-repeat`;
  };
};
document.querySelector(".code").onclick = function(e){
  e.stopPropagation();
}
document.querySelector("#code").onkeyup = function(){
  var date = new Date().getDate()
  if(this.value == date){
    document.querySelector(".code").style.display = "none"
  }
}
