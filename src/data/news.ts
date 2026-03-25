export interface NewsItem {
  date: string;
  title: string;
  titleEn: string;
  category: string;
  href?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: '2024/11/15',
    title: '品印三維參展 2024 台灣國際醫療暨健康照護展',
    titleEn: 'PrintIn3D Exhibits at 2024 Taiwan International Medical & Healthcare Expo',
    category: '展覽活動',
  },
  {
    date: '2024/09/20',
    title: '全新 PrintInDLP+ 系列正式發售，列印精度再升級',
    titleEn: 'New PrintInDLP+ Series Launched with Enhanced Print Precision',
    category: '產品發布',
  },
  {
    date: '2024/07/08',
    title: '矯正軟體 2.0 版本更新：支援全彩模擬功能',
    titleEn: 'Orthodontic Software 2.0 Update: Full-Color Simulation Support',
    category: '軟體更新',
  },
  {
    date: '2024/05/03',
    title: '與國立陽明交通大學合作推廣數位牙科教育',
    titleEn: 'Collaboration with NYCU to Promote Digital Dental Education',
    category: '合作消息',
  },
  {
    date: '2024/03/12',
    title: '新版雲端牙科平台上線，提升診所數位化效率',
    titleEn: 'New Cloud Dental Platform Launched for Enhanced Clinic Efficiency',
    category: '平台更新',
  },
  {
    date: '2023/12/01',
    title: '品印三維榮獲 2023 年度最佳數位牙科服務獎',
    titleEn: 'PrintIn3D Awarded 2023 Best Digital Dental Service',
    category: '獎項榮譽',
  },
];
