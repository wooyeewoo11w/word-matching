

            const categories = {
    animals: [
        "cat", "dog", "pig", "duck", "rabbit", "bear", "tiger", "lion",
        "elephant", "monkey", "panda", "cow", "sheep", "horse", "chicken",
        "bird", "fish", "frog", "wolf", "giraffe", "kangaroo", "zebra",
        "deer", "fox", "turtle", "snake", "butterfly", "bee", "dolphin",
        "whale", "shark", "octopus", "crab", "lobster", "seal", "penguin"
    ],
    
    food: [
        "apple", "banana", "orange", "grape", "watermelon", "strawberry",
        "pear", "peach", "mango", "pineapple", "lemon", "cherry", "coconut",
        "carrot", "potato", "tomato", "cabbage", "onion", "eggplant", "pepper",
        "bread", "rice", "noodle", "hamburger", "sandwich", "pizza", "dumpling",
        "sausage", "cheese", "chocolate", "ice cream", "cookie", "cake", "pie",
        "milk", "juice", "tea", "coffee", "soup", "egg", "meat", "chicken",
        "fish", "pork", "beef", "vegetable", "fruit", "salad", "yogurt"
    ],

    colors: [
        "red", "blue", "yellow", "green", "black", "white", "orange",
        "purple", "pink", "brown", "gray", "gold", "silver", "rainbow"
    ],

    numbers: [
        "one", "two", "three", "four", "five", "six", "seven", "eight",
        "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty",
        "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred",
        "first", "second", "third", "fourth", "fifth", "sixth", "seventh",
        "eighth", "ninth", "tenth"
    ],

    family: [
        "father", "mother", "brother", "sister", "grandfather", "grandmother",
        "uncle", "aunt", "cousin", "son", "daughter", "baby", "parents",
        "grandparents", "family", "husband", "wife", "nephew", "niece"
    ],

    school: [
        "book", "pen", "pencil", "ruler", "eraser", "bag", "desk", "chair",
        "teacher", "student", "classroom", "library", "playground", "homework",
        "exam", "test", "lesson", "subject", "dictionary", "notebook", "marker",
        "glue", "scissors", "calculator", "map", "globe", "blackboard", "chalk",
        "computer", "printer", "projector", "textbook", "backpack", "lunchbox"
    ],

    verbs: [
        "run", "jump", "walk", "swim", "sing", "dance", "read", "write",
        "draw", "eat", "drink", "sleep", "study", "play", "listen", "speak",
        "watch", "see", "look", "smell", "touch", "taste", "think", "know",
        "learn", "teach", "ask", "answer", "open", "close", "push", "pull",
        "climb", "ride", "fly", "throw", "catch", "kick", "bounce", "skip",
        "wave", "point", "stand", "sit", "lie", "wash", "brush", "comb",
        "cook", "clean", "sweep", "mop", "shop", "buy", "sell", "pay"
    ],

    time: [
        "morning", "afternoon", "evening", "night", "today", "tomorrow",
        "yesterday", "week", "month", "year", "clock", "watch", "hour",
        "minute", "second", "day", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday", "calendar", "season",
        "spring", "summer", "autumn", "winter", "holiday", "birthday",
        "festival", "now", "soon", "later", "early", "late", "always",
        "sometimes", "never"
    ],

    shapes: [
        "circle", "square", "triangle", "rectangle", "oval", "star",
        "heart", "diamond", "cube", "sphere", "cone", "cylinder",
        "pyramid", "line", "angle", "point", "side", "corner"
    ],

    weather: [
        "sunny", "rainy", "cloudy", "windy", "snowy", "foggy", "stormy",
        "lightning", "thunder", "rainbow", "temperature", "hot", "cold",
        "warm", "cool", "dry", "wet", "umbrella", "raincoat", "boots",
        "weather", "forecast", "season", "spring", "summer", "autumn",
        "winter"
    ],

    vehicles: [
        "car", "bus", "bike", "train", "plane", "ship", "boat", "taxi",
        "truck", "subway", "motorcycle", "helicopter", "rocket", "van",
        "ambulance", "fire engine", "police car", "tractor", "scooter",
        "skateboard", "ferry", "spaceship", "sailboat", "jet", "canoe"
    ],

    jobs: [
        "doctor", "nurse", "teacher", "driver", "cook", "farmer",
        "policeman", "fireman", "soldier", "artist", "singer", "dancer",
        "writer", "actor", "engineer", "scientist", "astronaut", "pilot",
        "postman", "barber", "dentist", "waiter", "secretary", "manager",
        "businessman", "judge", "lawyer", "reporter", "photographer"
    ],

    body: [
        "head", "eye", "nose", "mouth", "ear", "face", "hair", "neck",
        "shoulder", "arm", "hand", "finger", "chest", "stomach", "back",
        "leg", "knee", "foot", "toe", "tongue", "tooth", "lip", "eyebrow",
        "eyelash", "chin", "forehead", "wrist", "elbow", "ankle", "thumb"
    ],

    opposites: [
        "big", "small", "tall", "short", "hot", "cold", "new", "old", "fast", "slow",
        "happy", "sad", "heavy", "light", "full", "empty", "clean", "dirty",
        "open", "close", "up", "down", "in", "out", "left", "right", "front", "back",
        "day", "night", "white", "black", "rich", "poor", "young", "old", "wet", "dry",
        "same", "different"
    ],

    nature: [
        "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind",
        "tree", "flower", "grass", "leaf", "mountain", "river", "lake",
        "sea", "ocean", "stone", "sand", "earth", "forest", "field",
        "plant", "root", "branch", "seed", "soil", "rock", "hill",
        "volcano", "island", "desert", "beach", "wave"
    ],

    subjects: [
        "math", "Chinese", "English", "science", "music", "art",
        "history", "geography", "PE", "biology", "physics", "chemistry",
        "computer", "morality", "painting", "drama", "dance", "writing",
        "reading", "grammar"
    ],

    sports: [
        "football", "basketball", "pingpong", "badminton", "tennis",
        "volleyball", "baseball", "swimming", "running", "jumping",
        "skating", "skiing", "boxing", "wrestling", "gymnastics",
        "cycling", "hiking", "climbing", "diving", "surfing",
        "fishing", "yoga", "jogging", "golf", "archery"
    ],

    calendar: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
        "year", "month", "week", "day", "hour", "minute", "second",
        "birthday", "holiday", "festival", "schedule", "plan", "meeting"
    ],

    common: [
        "hello", "goodbye", "thank you", "please", "sorry", "excuse me",
        "yes", "no", "ok", "good", "bad", "right", "wrong", "friend",
        "love", "hate", "like", "dislike", "happy", "sad", "angry",
        "hungry", "thirsty", "tired", "sick", "healthy", "beautiful",
        "ugly", "easy", "difficult", "funny", "serious", "quick", "slow",
        "old", "new", "young", "rich", "poor", "same", "different"
    ]
};


const chineseMap = {
    // ================= 动物类 (80个) =================
    "cat": "猫", "dog": "狗", "pig": "猪", "duck": "鸭子",
    "rabbit": "兔子", "bear": "熊", "tiger": "老虎", "lion": "狮子",
    "elephant": "大象", "monkey": "猴子", "panda": "熊猫", "cow": "奶牛",
    "sheep": "绵羊", "horse": "马", "chicken": "鸡", "bird": "鸟",
    "fish": "鱼", "frog": "青蛙", "wolf": "狼", "giraffe": "长颈鹿",
    "kangaroo": "袋鼠", "zebra": "斑马", "deer": "鹿", "fox": "狐狸",
    "turtle": "乌龟", "snake": "蛇", "butterfly": "蝴蝶", "bee": "蜜蜂",
    "dolphin": "海豚", "whale": "鲸鱼", "shark": "鲨鱼", "octopus": "章鱼",
    "crab": "螃蟹", "lobster": "龙虾", "seal": "海豹", "penguin": "企鹅",

    // ================= 食物类 (100个) =================
    "apple": "苹果", "banana": "香蕉", "orange": "橙子", "grape": "葡萄",
    "watermelon": "西瓜", "strawberry": "草莓", "pear": "梨", "peach": "桃子",
    "mango": "芒果", "pineapple": "菠萝", "lemon": "柠檬", "cherry": "樱桃",
    "coconut": "椰子", "carrot": "胡萝卜", "potato": "土豆", "tomato": "西红柿",
    "cabbage": "卷心菜", "onion": "洋葱", "eggplant": "茄子", "pepper": "辣椒",
    "bread": "面包", "rice": "米饭", "noodle": "面条", "hamburger": "汉堡包",
    "sandwich": "三明治", "pizza": "披萨", "dumpling": "饺子", "sausage": "香肠",
    "cheese": "奶酪", "chocolate": "巧克力", "ice cream": "冰淇淋", "cookie": "曲奇",
    "cake": "蛋糕", "pie": "馅饼", "milk": "牛奶", "juice": "果汁",
    "tea": "茶", "coffee": "咖啡", "soup": "汤", "egg": "鸡蛋",
    "meat": "肉", "pork": "猪肉", "beef": "牛肉", "vegetable": "蔬菜",
    "fruit": "水果", "salad": "沙拉", "yogurt": "酸奶",

    // ================= 颜色类 (20个) =================
    "red": "红色", "blue": "蓝色", "yellow": "黄色", "green": "绿色",
    "black": "黑色", "white": "白色", "orange": "橙色", "purple": "紫色",
    "pink": "粉色", "brown": "棕色", "gray": "灰色", "gold": "金色",
    "silver": "银色", "rainbow": "彩虹色",

    // ================= 数字类 (50个) =================
    "one": "一", "two": "二", "three": "三", "four": "四", "five": "五",
    "six": "六", "seven": "七", "eight": "八", "nine": "九", "ten": "十",
    "eleven": "十一", "twelve": "十二", "thirteen": "十三", "fourteen": "十四",
    "fifteen": "十五", "sixteen": "十六", "seventeen": "十七", "eighteen": "十八",
    "nineteen": "十九", "twenty": "二十", "thirty": "三十", "forty": "四十",
    "fifty": "五十", "sixty": "六十", "seventy": "七十", "eighty": "八十",
    "ninety": "九十", "hundred": "百", "first": "第一", "second": "第二",
    "third": "第三", "fourth": "第四", "fifth": "第五", "sixth": "第六",
    "seventh": "第七", "eighth": "第八", "ninth": "第九", "tenth": "第十",

    // ================= 家庭成员类 (30个) =================
    "father": "爸爸", "mother": "妈妈", "brother": "兄弟", "sister": "姐妹",
    "grandfather": "爷爷", "grandmother": "奶奶", "uncle": "叔叔", "aunt": "阿姨",
    "cousin": "表兄妹", "son": "儿子", "daughter": "女儿", "baby": "婴儿",
    "parents": "父母", "grandparents": "祖父母", "family": "家庭",
    "husband": "丈夫", "wife": "妻子", "nephew": "侄子", "niece": "侄女",

    // ================= 学校类 (80个) =================
    "book": "书", "pen": "钢笔", "pencil": "铅笔", "ruler": "尺子",
    "eraser": "橡皮", "bag": "书包", "desk": "课桌", "chair": "椅子",
    "teacher": "老师", "student": "学生", "classroom": "教室",
    "library": "图书馆", "playground": "操场", "homework": "家庭作业",
    "exam": "考试", "test": "测验", "lesson": "课程", "subject": "学科",
    "dictionary": "字典", "notebook": "笔记本", "marker": "记号笔",
    "glue": "胶水", "scissors": "剪刀", "calculator": "计算器",
    "map": "地图", "globe": "地球仪", "blackboard": "黑板", "chalk": "粉笔",
    "computer": "电脑", "printer": "打印机", "projector": "投影仪",
    "textbook": "教科书", "backpack": "双肩包", "lunchbox": "午餐盒",

    // ================ 动词类（120个） ================
    "run": "跑", "jump": "跳", "walk": "走", "swim": "游泳",
    "sing": "唱歌", "dance": "跳舞", "read": "阅读", "write": "写",
    "draw": "画画", "eat": "吃", "drink": "喝", "sleep": "睡觉",
    "study": "学习", "play": "玩耍", "listen": "听", "speak": "说",
    "watch": "看", "see": "看见", "look": "看", "smell": "闻",
    "touch": "摸", "taste": "尝", "think": "想", "know": "知道",
    "learn": "学习", "teach": "教", "ask": "问", "answer": "回答",
    "open": "打开", "close": "关闭", "push": "推", "pull": "拉",
    "climb": "爬", "ride": "骑", "fly": "飞", "throw": "扔",
    "catch": "接住", "kick": "踢", "bounce": "拍", "skip": "跳过",
    "wave": "挥手", "point": "指向", "stand": "站", "sit": "坐",
    "lie": "躺", "wash": "洗", "brush": "刷", "comb": "梳",
    "cook": "做饭", "clean": "打扫", "sweep": "扫", "mop": "拖",
    "shop": "购物", "buy": "买", "sell": "卖", "pay": "支付",

    // ================ 时间类（60个） ================
    "morning": "早上", "afternoon": "下午", "evening": "傍晚",
    "night": "夜晚", "today": "今天", "tomorrow": "明天",
    "yesterday": "昨天", "week": "星期", "month": "月", "year": "年",
    "clock": "时钟", "watch": "手表", "hour": "小时", "minute": "分钟",
    "second": "秒", "day": "天", "Monday": "星期一", "Tuesday": "星期二",
    "Wednesday": "星期三", "Thursday": "星期四", "Friday": "星期五",
    "Saturday": "星期六", "Sunday": "星期日", "calendar": "日历",
    "season": "季节", "spring": "春天", "summer": "夏天",
    "autumn": "秋天", "winter": "冬天", "holiday": "假期",
    "birthday": "生日", "festival": "节日", "now": "现在",
    "soon": "很快", "later": "稍后", "early": "早", "late": "晚",
    "always": "总是", "sometimes": "有时", "never": "从不",

    // ================ 形状类（20个） ================
    "circle": "圆形", "square": "正方形", "triangle": "三角形",
    "rectangle": "长方形", "oval": "椭圆形", "star": "星星",
    "heart": "心形", "diamond": "菱形", "cube": "立方体",
    "sphere": "球体", "cone": "圆锥体", "cylinder": "圆柱体",
    "pyramid": "金字塔", "line": "线", "angle": "角",
    "point": "点", "side": "边", "corner": "角落",

    // ================ 天气类（30个） ================
    "sunny": "晴朗", "rainy": "下雨", "cloudy": "多云",
    "windy": "有风", "snowy": "下雪", "foggy": "有雾",
    "stormy": "暴风雨", "lightning": "闪电", "thunder": "雷声",
    "rainbow": "彩虹", "temperature": "温度", "hot": "热",
    "cold": "冷", "warm": "温暖", "cool": "凉爽",
    "dry": "干燥", "wet": "潮湿", "umbrella": "雨伞",
    "raincoat": "雨衣", "boots": "雨靴", "weather": "天气",
    "forecast": "预报", "season": "季节", "spring": "春天",
    "summer": "夏天", "autumn": "秋天", "winter": "冬天",

    // ================ 交通工具类（50个） ================
    "car": "汽车", "bus": "公交车", "bike": "自行车",
    "train": "火车", "plane": "飞机", "ship": "轮船",
    "boat": "小船", "taxi": "出租车", "truck": "卡车",
    "subway": "地铁", "motorcycle": "摩托车", "helicopter": "直升机",
    "rocket": "火箭", "van": "面包车", "ambulance": "救护车",
    "fire engine": "消防车", "police car": "警车", "tractor": "拖拉机",
    "scooter": "滑板车", "skateboard": "滑板", "ferry": "渡轮",
    "spaceship": "宇宙飞船", "sailboat": "帆船", "jet": "喷气机",
    "canoe": "独木舟",

    // ================ 职业类（60个） ================
    "doctor": "医生", "nurse": "护士", "teacher": "教师",
    "driver": "司机", "cook": "厨师", "farmer": "农民",
    "policeman": "警察", "fireman": "消防员", "soldier": "士兵",
    "artist": "艺术家", "singer": "歌手", "dancer": "舞蹈家",
    "writer": "作家", "actor": "演员", "engineer": "工程师",
    "scientist": "科学家", "astronaut": "宇航员", "pilot": "飞行员",
    "postman": "邮递员", "barber": "理发师", "dentist": "牙医",
    "waiter": "服务员", "secretary": "秘书", "manager": "经理",
    "businessman": "商人", "judge": "法官", "lawyer": "律师",
    "reporter": "记者", "photographer": "摄影师",

    // ================ 身体部位类（50个） ================
    "head": "头", "eye": "眼睛", "nose": "鼻子", "mouth": "嘴",
    "ear": "耳朵", "face": "脸", "hair": "头发", "neck": "脖子",
    "shoulder": "肩膀", "arm": "手臂", "hand": "手", "finger": "手指",
    "chest": "胸部", "stomach": "肚子", "back": "背部", "leg": "腿",
    "knee": "膝盖", "foot": "脚", "toe": "脚趾", "tongue": "舌头",
    "tooth": "牙齿", "lip": "嘴唇", "eyebrow": "眉毛", "eyelash": "睫毛",
    "chin": "下巴", "forehead": "额头", "wrist": "手腕", "elbow": "手肘",
    "ankle": "脚踝", "thumb": "大拇指",

    // ================ 反义词类（40组） ================
    "big": "大", "small": "小", "tall": "高", "short": "矮",
    "hot": "热", "cold": "冷", "new": "新", "old": "旧",
    "fast": "快", "slow": "慢", "happy": "开心", "sad": "伤心",
    "heavy": "重", "light": "轻", "full": "满", "empty": "空",
    "clean": "干净", "dirty": "脏", "open": "打开", "close": "关闭",
    "up": "上", "down": "下", "in": "里", "out": "外",
    "left": "左", "right": "右", "front": "前", "back": "后",
    "day": "白天", "night": "夜晚", "white": "白色", "black": "黑色",
    "rich": "富有", "poor": "贫穷", "young": "年轻", "old": "年老",
    "wet": "湿", "dry": "干", "same": "相同", "different": "不同",

    // ================ 自然类（60个） ================
    "sun": "太阳", "moon": "月亮", "star": "星星", "sky": "天空",
    "cloud": "云", "rain": "雨", "snow": "雪", "wind": "风",
    "tree": "树", "flower": "花", "grass": "草", "leaf": "叶子",
    "mountain": "山", "river": "河流", "lake": "湖", "sea": "海",
    "ocean": "海洋", "stone": "石头", "sand": "沙子", "earth": "泥土",
    "forest": "森林", "field": "田野", "plant": "植物", "root": "根",
    "branch": "树枝", "seed": "种子", "soil": "土壤", "rock": "岩石",
    "hill": "小山", "volcano": "火山", "island": "岛屿", "desert": "沙漠",
    "beach": "海滩", "wave": "波浪",

    // ================ 学科类（30个） ================
    "math": "数学", "Chinese": "语文", "English": "英语",
    "science": "科学", "music": "音乐", "art": "美术",
    "history": "历史", "geography": "地理", "PE": "体育",
    "biology": "生物", "physics": "物理", "chemistry": "化学",
    "computer": "计算机", "morality": "道德", "painting": "绘画",
    "drama": "戏剧", "dance": "舞蹈", "writing": "写作",
    "reading": "阅读", "grammar": "语法",

    // ================ 运动类（50个） ================
    "football": "足球", "basketball": "篮球", "pingpong": "乒乓球",
    "badminton": "羽毛球", "tennis": "网球", "volleyball": "排球",
    "baseball": "棒球", "swimming": "游泳", "running": "跑步",
    "jumping": "跳跃", "skating": "滑冰", "skiing": "滑雪",
    "boxing": "拳击", "wrestling": "摔跤", "gymnastics": "体操",
    "cycling": "骑自行车", "hiking": "徒步", "climbing": "攀岩",
    "diving": "潜水", "surfing": "冲浪", "fishing": "钓鱼",
    "yoga": "瑜伽", "jogging": "慢跑", "golf": "高尔夫",
    "archery": "射箭",

    // ================ 日历类（30个） ================
    "January": "一月", "February": "二月", "March": "三月",
    "April": "四月", "May": "五月", "June": "六月",
    "July": "七月", "August": "八月", "September": "九月",
    "October": "十月", "November": "十一月", "December": "十二月",
    "year": "年", "month": "月", "week": "周", "day": "天",
    "hour": "小时", "minute": "分钟", "second": "秒",
    "birthday": "生日", "holiday": "假期", "festival": "节日",
    "schedule": "时间表", "plan": "计划", "meeting": "会议",

    // ================ 其他常用词（100个） ================
    "hello": "你好", "goodbye": "再见", "thank you": "谢谢",
    "please": "请", "sorry": "对不起", "excuse me": "打扰一下",
    "yes": "是", "no": "不是", "ok": "好的", "good": "好",
    "bad": "坏", "right": "正确", "wrong": "错误", "friend": "朋友",
    "love": "爱", "hate": "恨", "like": "喜欢", "dislike": "不喜欢",
    "happy": "开心", "sad": "伤心", "angry": "生气", "hungry": "饿",
    "thirsty": "渴", "tired": "累", "sick": "生病", "healthy": "健康",
    "beautiful": "美丽", "ugly": "丑陋", "easy": "容易", "difficult": "困难",
    "funny": "有趣", "serious": "严肃", "quick": "快速", "slow": "慢",
    "old": "老", "new": "新", "young": "年轻", "rich": "富有",
    "poor": "贫穷", "same": "相同", "different": "不同"
};