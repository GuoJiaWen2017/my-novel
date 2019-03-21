const simpleList = [
  '凌天传说', '召唤万岁', '诛仙-萧鼎', '诛仙II-三西贝', '善良的死神', '狂神', '斗罗大陆', '天珠变', '神印王座',
  '吞噬星空', '九鼎记', '魔兽剑圣异界纵横', '斗破苍穹', '武动乾坤', '百变销魂', '卡徒', '十方天士', '异世灵武天下', '大昏君',
  '修真世界', '兽血沸腾', '末世生成大师', '天才医生', '透视之眼', '重生之改天换地', '最强弃少', '重生之神级败家子',
  '重生之大涅磐', '重生之心动', '逆流纯真年代', '重生完美时代', '重生不重来', '俗人回档', '阳光大秦', '我欲封天', '放开那女巫',
  '凡人修仙传', '仙逆', '巫师不朽', '巫师世界', '巫师之旅', '神秘之旅', '末日轮盘', '黑暗王者', '钢铁皇朝', '我的大明新帝国',
  '汉乡', '唐砖', '赤色黎明', '金鳞开', '陕西坑', '狩魔手记', '蹉跎', '重启末世',
  '重卡战车在末世', '超维术士', '永恒剑主', '巫术师', '重生之贼行天下', '天生神医', '低调术士', '极品驸马', '极品戒指',
  '总裁的私有宝贝', '千年军国', '武帝丹神', '落笔成仙', '家里养个狐狸精', '龙皇武神', '异世之风流大法师', '带着农场混异界',
  '重生之妖孽人生', '纨绔太子', '都市之最强纨绔', '大魔王', '异界之魔武流氓', '材料帝国', '异世之极品天才',
  '美女的超级保镖', '重生在三国', '异界流氓天尊', '重生工业帝国', '武逆', '异界魅影逍遥', '纨绔风云', '铁器时代', '末世之重生御女',
  '末日冰河', '我的贴身校花', '活人禁忌', '重生之十全九美', '御女天下', '超级巨人分身', '北回归线', '尸虐', '神魔天尊',
  '近战召唤师', '随身带着异性王后', '异界重生之暗黑领主', '修仙高手在校园', '会长大人的女仆攻略',
  '重生之纨绔大少', '资本大唐', '死亡名单', '龙腾原始', '巫界术士', '破法之眼', '刺客魔传', '黑暗无限', '恶魔法则', '崩坏星河'
]

/**
 * 〈数据库小说信息表的替代品〉
 *
 * @name 书名
 * @author 作者
 * @summary 简介
 * @plot 剧情
 * @tags 标签集
 * @score 个人评分（满分5分，可取半分）
 * @comment 评语
 * @wordNumber 字数
 * @startTime 开始阅读时间
 * @endTime 读完时间
 * @img 封面图片
 */
const novels = [
  {
    'name': '凌天传说',
    'author': '风凌天下',
    'summary': '穿越到异世的武学天才，超卓的武功，绝世的智慧；且看凌天如何在异世只手舞风云，左右逢源、文武双绝、威动天下；造就一个永恒的凌天传说！',
    'plot': '本书主角，武林世家凌家人，因被族妹凌雪儿陷害，武功被废，为报复，在凌雪儿婚礼上引爆炸弹与其同归于尽。在黄泉路上原谅了凌雪儿，随后便穿越至天星大陆承天国凌家。初期韬光养晦，在外人眼里是一个纨绔子弟，但暗地里却建立了庞大的势力。天星第一刺客组织——第一楼、天星第一情报组织——水晶楼以及天风大陆第一大帮——顺天盟都是由其一手创办，凌天的56名手下（凌一~凌五零，外加凌剑与“风云雷电迟”五人）也都散布各地建立势力，从经商到做强盗不一而足，为凌天一统天星，天风，天阳三个大陆打下了基础。后成为神州帝国第三任皇帝。共6个女主角。',
    'tags': ['穿越', '后宫', '玄幻', '异界'],
    'score': 4,
    'comment': '',
    'wordNumber': 235.38,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/凌天传说.jpg'
  },
  {
    'name': '召唤万岁',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': ['穿越', '后宫', '玄幻'],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/召唤万岁.jpg'
  },
  {
    'name': '诛仙',
    'author': '萧鼎',
    'summary': '',
    'plot': '',
    'tags': ['仙侠'],
    'score': 5,
    'comment': '',
    'wordNumber': 1522200,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/诛仙.jpg'
  },
  {
    'name': '诛仙II',
    'author': '三西贝',
    'summary': '本书是诛仙故事的续集。萧鼎的诛仙故事结局并不明朗，此书是结局后续的一部书，以‘碧瑶复活’为引子，碧瑶被主角张小凡费尽千辛万苦救活之后却记忆全失，之后在鬼王凶灵的引导下接任鬼王宗，而在她眼里，张小凡只是一个有本事的追求者',
    'plot': '',
    'tags': ['仙侠'],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/诛仙II.jpg'
  },
  {
    'name': '善良的死神',
    'author': '唐家三少',
    'summary': '',
    'plot': '',
    'tags': ['奇幻', '剑与魔法'],
    'score': 5,
    'comment': '',
    'wordNumber': 1665800,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/善良的死神.jpg'
  },
  {
    'name': '狂神',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/狂神.jpg'
  },
  {
    'name': '斗罗大陆',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/斗罗大陆.jpg'
  },
  {
    'name': '天珠变',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/天珠变.jpg'
  },
  {
    'name': '神印王座',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/神印王座.jpg'
  },
  {
    'name': '吞噬星空',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/吞噬星空.jpg'
  },
  {
    'name': '九鼎记',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/九鼎记.jpg'
  },
  {
    'name': '魔兽剑圣异界纵横',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/魔兽剑圣异界纵横.jpg'
  },
  {
    'name': '斗破苍穹',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/斗破苍穹.jpg'
  },
  {
    'name': '武动乾坤',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/武动乾坤.jpg'
  },
  {
    'name': '百变销魂',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/百变销魂.jpg'
  },
  {
    'name': '卡徒',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/卡徒.jpg'
  },
  {
    'name': '十方天士',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/十方天士.jpg'
  },
  {
    'name': '异世灵武天下',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '大昏君',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '修真世界',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '兽血沸腾',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '末世生成大师',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '天才医生',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '透视之眼',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之改天换地',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '最强弃少',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之神级败家子',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之大涅磐',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之心动',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '逆流纯真年代',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生完美时代',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生不重来',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '俗人回档',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '阳光大秦',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '我欲封天',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '放开那女巫',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '凡人修仙传',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '仙逆',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '巫师不朽',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '巫师世界',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '巫师之旅',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '神秘之旅',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '末日轮盘',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '黑暗王者',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '钢铁皇朝',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '我的大明新帝国',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '汉乡',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '唐砖',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '赤色黎明',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '金鳞开',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '陕西坑',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '狩魔手记',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '蹉跎',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重启末世',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重卡战车在末世',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '超维术士',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '永恒剑主',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '巫术师',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之贼行天下',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '天生神医',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '低调术士',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '极品驸马',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '极品戒指',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '总裁的私有宝贝',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '千年军国',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '武帝丹神',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '落笔成仙',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '家里养个狐狸精',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '龙皇武神',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异世之风流大法师',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '带着农场混异界',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之妖孽人生',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '纨绔太子',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '都市之最强纨绔',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '大魔王',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异界之魔武流氓',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '材料帝国',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异世之极品天才',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '美女的超级保镖',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生在三国',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异界流氓天尊',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生工业帝国',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '武逆',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异界魅影逍遥',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '纨绔风云',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '铁器时代',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '末世之重生御女',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '末日冰河',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '我的贴身校花',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '活人禁忌',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之十全九美',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '御女天下',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '超级巨人分身',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '北回归线',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '尸虐',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '神魔天尊',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '近战召唤师',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '随身带着异性王后',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '异界重生之暗黑领主',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '修仙高手在校园',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '会长大人的女仆攻略',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '重生之纨绔大少',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '资本大唐',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '死亡名单',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '龙腾原始',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '巫界术士',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '破法之眼',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '刺客魔传',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '黑暗无限',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '恶魔法则',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/1.jpg'
  },
  {
    'name': '崩坏星河',
    'author': '',
    'summary': '',
    'plot': '',
    'tags': [
      '',
      ''
    ],
    'score': 5,
    'comment': '',
    'wordNumber': 32232,
    'startTime': '',
    'endTime': '',
    'img': 'coverImages/崩坏星河.jpg'
  }
]
export { simpleList, novels }
