// 移动菜单切换
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 平滑滚动
if (document.querySelectorAll('a[href^="#"]')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });

            // 关闭移动菜单
            navLinks.classList.remove('active');
        });
    });
}

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
            header.style.boxShadow = 'none';
        }
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的留言！我们会尽快回复您。');
        contactForm.reset();
    });
}

// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 检查本地存储或系统偏好
const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// 应用保存的主题
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    htmlElement.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// 主题切换事件
themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark-mode')) {
        htmlElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        htmlElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 语言切换功能
const langButtons = document.querySelectorAll('.lang-btn');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// 定义多语言内容
const translations = {
    'index.html': {
        'zh': {
            'hero-title': '欢迎来到红茶会MC服务器',
            'hero-subtitle': '自2016年创立，经过四次迭代，现在进入1.20全新周目，打造长期友好的游戏社区',
            'join-btn': '加入我们',
            'learn-more-btn': '了解更多',
            'about-title': '服务器简介',
            'about-text-1': '红茶会MC服务器是一个公益、友好的游戏社区，自2016年运营至今。我们提供纯净生存、精英怪、MMOItems、钓鱼、经济等多种玩法，致力于打造长期稳定的游戏环境。',
            'about-text-2': '服务器采用Velocity群组架构，分主服、建筑服、监狱（关熊孩子），偶尔也会有短暂的限定MOD服体验。我们拒绝所有捐款和金钱资助，开服纯属个人兴趣。'
        },
        'en': {
            'hero-title': 'Welcome to Red Tea Party MC Server',
            'hero-subtitle': 'Founded in 2016, after four iterations, now entering the brand new 1.20 season, creating a long-term friendly gaming community',
            'join-btn': 'Join Us',
            'learn-more-btn': 'Learn More',
            'about-title': 'Server Introduction',
            'about-text-1': 'Red Tea Party MC Server is a non-profit, friendly gaming community that has been operating since 2016. We offer various gameplay such as vanilla survival, elite monsters, MMOItems, fishing, economy, and are committed to creating a long-term stable gaming environment.',
            'about-text-2': 'The server adopts Velocity group architecture, including main server, building server, prison (for griefers), and occasionally has short-term limited MOD server experience. We refuse all donations and financial support, and running the server is purely for personal interest.'
        }
    },
    'about.html': {
        'zh': {
            'about-title': '关于红茶会',
            'about-story': '我们的故事',
            'about-text-1': '红茶会MC服务器自2016年开始运营，经过四次迭代，现在进入1.20全新周目，本周目计划至少再开2-3年！',
            'about-text-2': '腐竹为骨灰级MC玩家，自主搭建服务器，自掏腰包，不接受赞助，开服纯属个人兴趣和为了构建长期网友交流群。',
            'about-text-3': '本群成分复杂，有富婆、死宅、二刺螈、商界大佬、萌妹纸、暴躁老哥、人民富豪、艺术家、程序员，多数为学生，欢迎同好人加群进行技术讨论以及对线。',
            'about-text-4': '另外，群友免费提供批改英语作文、解数学物理化学生物题、修改计算机代码等学习任务。本群除了MC什么都聊。'
        },
        'en': {
            'about-title': 'About Red Tea Party',
            'about-story': 'Our Story',
            'about-text-1': 'Red Tea Party MC Server has been operating since 2016. After four iterations, it has now entered the brand new 1.20 season, which is planned to run for at least another 2-3 years!',
            'about-text-2': 'The server owner is a hardcore MC player who built the server independently, at his own expense, without accepting sponsorship. Running the server is purely for personal interest and to build a long-term online community.',
            'about-text-3': 'Our community has diverse members, including wealthy ladies, otakus, anime fans, business elites, cute girls, hot-tempered guys, successful people, artists, programmers, and mostly students. We welcome like-minded people to join the group for technical discussions and friendly conversations.',
            'about-text-4': 'In addition, group members freely provide learning assistance such as correcting English compositions, solving math, physics, chemistry, and biology problems, and modifying computer code. Our group talks about everything except MC.'
        }
    },
    'features.html': {
        'zh': {
            'features-title': '服务器特色',
            'feature-1-title': 'MMO自制武器/玩具',
            'feature-1-desc': '所有武器或玩具都由管理员自制，自制的原神武器技能都尽量还原了原作，武器多用于PVP，自制的玩具虽然伤害不高，但很多侮辱性都极强~',
            'feature-2-title': '精英怪系统',
            'feature-2-desc': '精英怪插件为服务器带来更强大的怪物、附魔、地牢副本、副本boss等，精英怪的特性为名字上面有等级，使用原版武器很难对其造成强有力的伤害。',
            'feature-3-title': '钓鱼系统',
            'feature-3-desc': '服务器里可以通过钓鱼获得特殊的鱼类和钓鱼积分，积分可以在主城找到npc兑换各种东西。当然，如果把钓到的某些鱼给吃掉的话，说不定会发生一些神奇的事情哦~',
            'feature-4-title': '种植系统',
            'feature-4-desc': '服务器具备超原版的农作物可以种植，包括番茄、菠萝等~ 种植农作物可以获得种植积分，利用积分可以换取很多"独特"的装备或材料。',
            'feature-5-title': '服务器架构',
            'feature-5-desc': 'Velocity群组架构，分主服、建筑服、监狱（关熊孩子），偶尔玩腻也会有短暂的限定MOD服体验~~都在一个群组下，跨服聊天！！',
            'feature-6-title': '安全措施',
            'feature-6-desc': '该有的保护措施都有！圈地、每日备份、COI、背包滚回、箱子锁等，让您的游戏体验更加安全和愉快。'
        },
        'en': {
            'features-title': 'Server Features',
            'feature-1-title': 'MMO Self-made Weapons/Toys',
            'feature-1-desc': 'All weapons or toys are self-made by administrators. The self-made Genshin Impact weapons and skills are还原了 as much as possible. Weapons are mostly used for PVP. Although self-made toys don\'t have high damage, many of them are very insulting~',
            'feature-2-title': 'Elite Monster System',
            'feature-2-desc': 'The elite monster plugin brings more powerful monsters, enchantments, dungeon instances, instance bosses, etc. to the server. The characteristic of elite monsters is that they have levels above their names, and it is difficult to deal powerful damage to them with original weapons.',
            'feature-3-title': 'Fishing System',
            'feature-3-desc': 'You can obtain special fish and fishing points by fishing in the server. Points can be exchanged for various things with NPCs in the main city. Of course, if you eat some of the fish you catch, something magical might happen~',
            'feature-4-title': 'Farming System',
            'feature-4-desc': 'The server has super original crops that can be planted, including tomatoes, pineapples, etc.~ Planting crops can earn farming points, which can be used to exchange for many "unique" equipment or materials.',
            'feature-5-title': 'Server Architecture',
            'feature-5-desc': 'Velocity group architecture, including main server, building server, prison (for griefers), and occasionally has short-term limited MOD server experience~~ All under one group, cross-server chat!!',
            'feature-6-title': 'Security Measures',
            'feature-6-desc': 'All necessary protection measures are in place! Land claiming, daily backups, COI, backpack rollback, chest locking, etc., to make your gaming experience safer and more enjoyable.'
        }
    },
    'rules.html': {
        'zh': {
            'rules-title': '服务器规则',
            'rule-1': '不许偷东西',
            'rule-2': '不要开矿透',
            'rule-3': '不要拆别人建筑',
            'rule-4': '不要乱顶撞管理员',
            'rule-5': '不建造大型红石机器',
            'rule-6': '不建造刷怪塔',
            'rule-7': '不使用外挂或自动机器人（但允许自动钓鱼）',
            'rule-8': '不利用服务器各种漏洞',
            'rule-9': '其他明显不对的地方'
        },
        'en': {
            'rules-title': 'Server Rules',
            'rule-1': 'No stealing',
            'rule-2': 'No X-ray hacks',
            'rule-3': 'No griefing other people\'s buildings',
            'rule-4': 'No rude顶撞 to administrators',
            'rule-5': 'No large-scale redstone machines',
            'rule-6': 'No mob farms',
            'rule-7': 'No cheats or auto-bots (but auto-fishing is allowed)',
            'rule-8': 'No exploiting server vulnerabilities',
            'rule-9': 'Other obviously wrong behaviors'
        }
    },
    'contact.html': {
        'zh': {
            'contact-title': '加入我们',
            'contact-info': '联系信息',
            'qq-group': 'QQ群: 170912922',
            'server-ip': '进群看服务器IP（记得改群昵称）',
            'server-version': '服务器版本: 1.21.4',
            'donation': '公益且不接受赞助',
            'send-message': '发送消息',
            'your-name': '你的名字',
            'your-email': '你的邮箱',
            'your-message': '你的消息',
            'send-btn': '发送',
            'join-group-link': '进群方式'
        },
        'en': {
            'contact-title': 'Join Us',
            'contact-info': 'Contact Information',
            'qq-group': 'QQ Group: 170912922',
            'server-ip': 'Join the group to get server IP (remember to change your group nickname)',
            'server-version': 'Server Version: 1.21.4',
            'donation': 'Non-profit and no sponsorship accepted',
            'send-message': 'Send Message',
            'your-name': 'Your Name',
            'your-email': 'Your Email',
            'your-message': 'Your Message',
            'send-btn': 'Send',
            'join-group-link': 'Join Group'
        }
    },
    'join-group.html': {
        'zh': {
            'join-group-title': '进群方式',
            'group-number-title': 'QQ群号',
            'group-number': '2164040300',
            'copy-btn': '复制群号',
            'verification-title': '验证代码',
            'verification-desc': '请复制下方的10位随机数作为验证代码，进群时提供给管理员验证非机器人身份。',
            'copy-code-btn': '复制代码',
            'last-update': '上一次更新:',
            'next-update': '下一次更新:'
        },
        'en': {
            'join-group-title': 'Join Group',
            'group-number-title': 'QQ Group Number',
            'group-number': '2164040300',
            'copy-btn': 'Copy Group Number',
            'verification-title': 'Verification Code',
            'verification-desc': 'Please copy the 10-digit random number below as the verification code and provide it to the administrator when joining the group to verify that you are not a robot.',
            'copy-code-btn': 'Copy Code',
            'last-update': 'Last update:',
            'next-update': 'Next update:'
        }
    },
    'common': {
        'zh': {
            'home': '首页',
            'about': '关于我们',
            'features': '服务器特色',
            'rules': '服务器规则',
            'contact': '联系我们',
            'copyright': '© 2016 红茶会MC服务器. 保留所有权利.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'features': 'Server Features',
            'rules': 'Server Rules',
            'contact': 'Contact Us',
            'copyright': '© 2016 Red Tea Party MC Server. All rights reserved.'
        }
    }
};

// 检查本地存储的语言偏好
const savedLang = localStorage.getItem('lang') || 'zh';

// 设置初始语言按钮状态
langButtons.forEach(btn => {
    if (btn.dataset.lang === savedLang) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

// 更新页面内容函数
function updatePageContent(lang) {
    // 更新公共部分
    document.querySelectorAll('.nav-links a')[0].textContent = translations['common'][lang]['home'];
    document.querySelectorAll('.nav-links a')[1].textContent = translations['common'][lang]['about'];
    document.querySelectorAll('.nav-links a')[2].textContent = translations['common'][lang]['features'];
    document.querySelectorAll('.nav-links a')[3].textContent = translations['common'][lang]['rules'];
    document.querySelectorAll('.nav-links a')[4].textContent = translations['common'][lang]['contact'];
    document.querySelector('.copyright').textContent = translations['common'][lang]['copyright'];

    // 更新页面特定内容
    if (translations[currentPage] && translations[currentPage][lang]) {
        const pageTrans = translations[currentPage][lang];
        for (const [key, value] of Object.entries(pageTrans)) {
            const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
            elements.forEach(el => {
                el.textContent = value;
            });
        }
    }
}

// 初始更新页面内容
updatePageContent(savedLang);

// 语言切换事件
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('lang', lang);

        // 更新按钮状态
        langButtons.forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        // 更新页面内容
        updatePageContent(lang);
    });
});

// 添加数据属性到HTML元素
function addI18nAttributes() {
    // 根据当前页面添加相应的数据属性
    if (currentPage === 'index.html') {
        document.querySelector('.hero h1').setAttribute('data-i18n', 'hero-title');
        document.querySelector('.hero p').setAttribute('data-i18n', 'hero-subtitle');
        document.querySelectorAll('.hero .btn')[0].setAttribute('data-i18n', 'join-btn');
        document.querySelectorAll('.hero .btn')[1].setAttribute('data-i18n', 'learn-more-btn');
        document.querySelector('.about .section-title').setAttribute('data-i18n', 'about-title');
        document.querySelectorAll('.about-text p')[0].setAttribute('data-i18n', 'about-text-1');
        document.querySelectorAll('.about-text p')[1].setAttribute('data-i18n', 'about-text-2');
    } else if (currentPage === 'about.html') {
        document.querySelector('.about .section-title').setAttribute('data-i18n', 'about-title');
        document.querySelector('.about-text h3').setAttribute('data-i18n', 'about-story');
        document.querySelectorAll('.about-text p')[0].setAttribute('data-i18n', 'about-text-1');
        document.querySelectorAll('.about-text p')[1].setAttribute('data-i18n', 'about-text-2');
        document.querySelectorAll('.about-text p')[2].setAttribute('data-i18n', 'about-text-3');
        document.querySelectorAll('.about-text p')[3].setAttribute('data-i18n', 'about-text-4');
    } else if (currentPage === 'features.html') {
        document.querySelector('.features .section-title').setAttribute('data-i18n', 'features-title');
        document.querySelectorAll('.feature-card h3')[0].setAttribute('data-i18n', 'feature-1-title');
        document.querySelectorAll('.feature-card p')[0].setAttribute('data-i18n', 'feature-1-desc');
        document.querySelectorAll('.feature-card h3')[1].setAttribute('data-i18n', 'feature-2-title');
        document.querySelectorAll('.feature-card p')[1].setAttribute('data-i18n', 'feature-2-desc');
        document.querySelectorAll('.feature-card h3')[2].setAttribute('data-i18n', 'feature-3-title');
        document.querySelectorAll('.feature-card p')[2].setAttribute('data-i18n', 'feature-3-desc');
        document.querySelectorAll('.feature-card h3')[3].setAttribute('data-i18n', 'feature-4-title');
        document.querySelectorAll('.feature-card p')[3].setAttribute('data-i18n', 'feature-4-desc');
        document.querySelectorAll('.feature-card h3')[4].setAttribute('data-i18n', 'feature-5-title');
        document.querySelectorAll('.feature-card p')[4].setAttribute('data-i18n', 'feature-5-desc');
        document.querySelectorAll('.feature-card h3')[5].setAttribute('data-i18n', 'feature-6-title');
        document.querySelectorAll('.feature-card p')[5].setAttribute('data-i18n', 'feature-6-desc');
    } else if (currentPage === 'rules.html') {
        document.querySelector('.rules .section-title').setAttribute('data-i18n', 'rules-title');
        document.querySelectorAll('.rules-list li')[0].setAttribute('data-i18n', 'rule-1');
        document.querySelectorAll('.rules-list li')[1].setAttribute('data-i18n', 'rule-2');
        document.querySelectorAll('.rules-list li')[2].setAttribute('data-i18n', 'rule-3');
        document.querySelectorAll('.rules-list li')[3].setAttribute('data-i18n', 'rule-4');
        document.querySelectorAll('.rules-list li')[4].setAttribute('data-i18n', 'rule-5');
        document.querySelectorAll('.rules-list li')[5].setAttribute('data-i18n', 'rule-6');
        document.querySelectorAll('.rules-list li')[6].setAttribute('data-i18n', 'rule-7');
        document.querySelectorAll('.rules-list li')[7].setAttribute('data-i18n', 'rule-8');
        document.querySelectorAll('.rules-list li')[8].setAttribute('data-i18n', 'rule-9');
    } else if (currentPage === 'contact.html') {
        document.querySelector('.contact .section-title').setAttribute('data-i18n', 'contact-title');
        document.querySelector('.contact-info h3').setAttribute('data-i18n', 'contact-info');
        document.querySelectorAll('.contact-item span')[0].setAttribute('data-i18n', 'server-ip');
        document.querySelectorAll('.contact-item span')[1].setAttribute('data-i18n', 'server-version');
        document.querySelectorAll('.contact-item span')[2].setAttribute('data-i18n', 'donation');
        document.querySelector('.join-group-entry-right h3').setAttribute('data-i18n', 'join-group-title');
        document.querySelector('.join-group-entry-right p').setAttribute('data-i18n', 'join-group-desc');
        document.querySelector('.join-group-link').setAttribute('data-i18n', 'join-group-link');
    }
}

// 页面加载完成后添加数据属性
document.addEventListener('DOMContentLoaded', addI18nAttributes);