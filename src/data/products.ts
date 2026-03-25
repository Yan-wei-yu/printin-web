export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  href: string;
  icon: string;
  features: string[];
  featuresEn: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  href: string;
  icon: string;
  bgColor: string;
  items: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'software',
    title: '牙科專用軟體',
    titleEn: 'Dental Software',
    subtitle: '切層、矯正、植牙、假牙設計一體化',
    subtitleEn: 'Slicing, Orthodontic, Implant & Denture in one platform',
    href: '/software',
    icon: 'software',
    bgColor: '#F0F9FF',
    items: [
      {
        id: 'slicing',
        name: '切層軟體',
        nameEn: 'Slicing Software',
        description: '精準切層，自動優化列印參數，支援多種牙科樹脂材料',
        descriptionEn: 'Precision slicing with auto-optimized parameters for dental resins',
        href: '/software/slicing',
        icon: 'layers',
        features: ['自動支撐生成', '參數預設管理', '列印預覽模擬', '多材料支援'],
        featuresEn: ['Auto support generation', 'Parameter preset manager', 'Print preview simulation', 'Multi-material support'],
      },
      {
        id: 'orthodontic',
        name: '矯正軟體',
        nameEn: 'Orthodontic Software',
        description: '全中文化介面，快速設計隱形牙套，一鍵匯出列印檔',
        descriptionEn: 'Full Chinese UI for rapid invisible aligner design',
        href: '/software/orthodontic',
        icon: 'smile',
        features: ['全中文介面', '3D 咬合模擬', '自動排牙演算法', '雲端病歷管理'],
        featuresEn: ['Full Chinese UI', '3D occlusion simulation', 'Auto tooth alignment', 'Cloud patient management'],
      },
      {
        id: 'implant',
        name: '植牙軟體',
        nameEn: 'Implant Software',
        description: '精確規劃植牙位置，自動生成手術導板，與 CBCT 整合',
        descriptionEn: 'Accurate implant planning with auto-generated surgical guides',
        href: '/software/implant',
        icon: 'target',
        features: ['CBCT 影像匯入', '植體角度規劃', '自動導板生成', '醫師可自行調整'],
        featuresEn: ['CBCT import', 'Implant angle planning', 'Auto guide generation', 'Doctor adjustable'],
      },
      {
        id: 'denture',
        name: '假牙軟體',
        nameEn: 'Denture Software',
        description: '數位義齒設計，從掃描到輸出全流程數位化',
        descriptionEn: 'Digital prosthetic design from scan to output',
        href: '/software/denture',
        icon: 'tool',
        features: ['數位蠟型設計', '邊緣線自動偵測', '咬合分析', '加工路徑匯出'],
        featuresEn: ['Digital wax-up', 'Auto margin detection', 'Occlusion analysis', 'Milling path export'],
      },
    ],
  },
  {
    id: 'equipment',
    title: '數位牙科設備',
    titleEn: 'Digital Dental Equipment',
    subtitle: '掃描、列印、銑切全方位硬體解決方案',
    subtitleEn: 'Scanning, printing & milling hardware solutions',
    href: '/equipment',
    icon: 'equipment',
    bgColor: '#F0FDF4',
    items: [
      {
        id: 'scanner',
        name: '掃描設備',
        nameEn: 'Scanning Equipment',
        description: '口掃機、桌掃機、臉掃機，全方位數位建模',
        descriptionEn: 'Intraoral, desktop & face scanners for digital modeling',
        href: '/equipment',
        icon: 'scan',
        features: ['口腔內掃描儀', '桌上型掃描儀', '臉部掃描儀', '高精度建模'],
        featuresEn: ['Intraoral scanner', 'Desktop scanner', 'Face scanner', 'High-precision modeling'],
      },
    ],
  },
  {
    id: 'platform',
    title: '數位牙科平台',
    titleEn: 'Digital Dental Platform',
    subtitle: '雲端協作、植牙代工、矯正代工服務',
    subtitleEn: 'Cloud collaboration & OEM dental services',
    href: '/platform',
    icon: 'cloud',
    bgColor: '#FFF7ED',
    items: [],
  },
  {
    id: 'consumables',
    title: '耗材',
    titleEn: 'Consumables',
    subtitle: '列印樹脂、植牙配件、熱壓膜片一站購足',
    subtitleEn: 'Print resins, implant accessories & thermoforming films',
    href: '/consumables',
    icon: 'box',
    bgColor: '#FDF4FF',
    items: [],
  },
];
