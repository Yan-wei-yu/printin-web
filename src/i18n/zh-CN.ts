import type { Translation } from "./types";

const zhCN: Translation = {
    langLabel: "简中",
    nav: {
      software: "牙科专用软件",
      software_items: ["切层软件", "矫正软件", "种植软件", "假牙软件"],
      devices: "数字牙科设备",
      scan: "扫描设备",
      scan_items: ["口内扫描仪", "台式扫描仪", "面部扫描仪"],
      print: "打印设备",
      print_items: ["PrintInDLP+", "Lumii DLP", "SONIC XL 4K PLUS", "SOL PLUS", "Form4", "高强度固化机"],
      mill: "加工设备",
      mill_items: ["桌面五轴加工机 PrintInMill", "烧结炉 F20", "烧瓷炉 F30"],
      other: "其他",
      other_items: ["气压热塑成型机", "医疗头灯", "膜片裁切机 PrintInTrimmer"],
      platform: "数字牙科平台",
      design: "数字设计",
      design_items: ["种植手术代工", "数字矫正代工"],
      cloud: "云端平台",
      consumables: "耗材",
      consumables_items: ["打印树脂", "种植配件", "热压膜片"],
      support: "服务支持",
      support_items: ["常见问题", "目录下载"],
      contact: "联系我们",
    },
    hero: {
      tag: "数字牙科整合解决方案",
      title: "精准 · 创新 · 品质",
      sub: "品印三维科技提供完整的数字牙科设备、软件与耗材，\n助您打造全数字化诊所流程。",
      cta1: "探索产品",
      cta2: "立即联系",
    },
    news: {
      title: "最新消息",
      items: [
        { date: "2022/08/23", text: "官网正式上线" },
        { date: "2022/08/24–27", text: "3D打印展在南港展览馆" },
        { date: "2022/08/26–27", text: "亚湾创新×新创大南方在高雄展览馆" },
        { date: "2022/10/02", text: "DIY隐形微矫正在阳明大学" },
        { date: "2022/10/29–30", text: "CEREC Asia 2022 在艾瑞瓷" },
      ],
    },
    software_sec: {
      title: "牙科软件",
      items: [
        { name: "切层软件", desc: "精准切层，优化打印参数" },
        { name: "矫正软件", desc: "全中文界面，轻松设计牙套" },
        { name: "种植软件", desc: "精确规划种植位置与手术导板" },
        { name: "假牙软件", desc: "数字义齿设计，效率倍增" },
      ],
    },
    devices_sec: {
      title: "牙科设备",
      items: [
        { name: "扫描设备", desc: "口内/台式/面部，全方位数字建模" },
        { name: "3D 打印", desc: "DLP / SLA 高精度牙科打印机" },
        { name: "加工设备", desc: "五轴铣切、烧结、烧瓷一站式" },
        { name: "周边配件", desc: "热塑成型、医疗头灯等完整生态" },
      ],
    },
    testimonials: {
      title: "使用心得",
      items: [
        { name: "哈佛牙科诊所", role: "牙科诊所・台北", text: "隐形矫正的出现是牙齿矫正技术的一次革命性发展，感谢品印三维提供全套诊所数字化设备与软件，可以轻易设计制作符合预期的牙套。" },
        { name: "旭锐牙体技术所", role: "牙体技术所・台中", text: "3D打印是牙技产业不可或缺的一环，品印三维提供了优于同行的专业知识和技能，快速的服务，值得推荐的伙伴。" },
        { name: "兔子牙体技术所", role: "牙体技术所・高雄", text: "自从引进打印设备认识了 Raymond，所有的专业问题都很热心地用最快速度处理，24H 随叫随到服务真的没话说。" },
        { name: "和彩牙医", role: "种植专科诊所・桃园", text: "品印的导板，搭配优化的器械组，精准又实用，通过品印提供的 VIEWER 软件，医生端可以自行调整种植计划，提升沟通效率。" },
      ],
    },
    contact: {
      title: "联系我们",
      address: "桃园市龟山区文兴路 146 号 11 楼之 3",
      phone: "03-3978506 / 0908-683-091",
      fax: "03-3978507",
      email: "info.printin3d@gmail.com",
      mapBtn: "查看地图",
    },
    footer: {
      links: ["网站地图", "隐私权政策", "Cookie 政策", "软件使用条款"],
      copy: "© 2024 品印三维科技股份有限公司 版权所有",
    },
};
export default zhCN;