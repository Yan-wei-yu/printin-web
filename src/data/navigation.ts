export interface NavChild {
  label: string;
  labelEn: string;
  href: string;
}

export interface NavGroup {
  groupZh: string;
  groupEn: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  labelEn: string;
  href?: string;
  children?: NavChild[];
  groups?: NavGroup[];   // mega dropdown with columns
  alignRight?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: '牙科專用軟體',
    labelEn: 'Dental Software',
    href: '/software',
    children: [
      { label: '切層軟體', labelEn: 'Slicing Software', href: '/software/slicing' },
      { label: '矯正軟體', labelEn: 'Orthodontic Software', href: '/software/orthodontic' },
      { label: '植牙軟體', labelEn: 'Implant Software', href: '/software/implant' },
      { label: '假牙軟體', labelEn: 'Denture Software', href: '/software/denture' },
    ],
  },
  {
    label: '數位牙科設備',
    labelEn: 'Dental Equipment',
    href: '/equipment',
    groups: [
      {
        groupZh: '掃描設備',
        groupEn: 'Scanning',
        items: [
          { label: '口內掃描儀', labelEn: 'Intraoral Scanner', href: '/equipment' },
          { label: '桌上型掃描儀', labelEn: 'Desktop Scanner', href: '/equipment' },
          { label: 'CBCT 影像系統', labelEn: 'CBCT Imaging', href: '/equipment' },
        ],
      },
      {
        groupZh: '列印設備',
        groupEn: 'Printing',
        items: [
          { label: 'DLP 光固化印表機', labelEn: 'DLP 3D Printer', href: '/equipment' },
          { label: 'LCD 光固化印表機', labelEn: 'LCD 3D Printer', href: '/equipment' },
          { label: '大尺寸列印機', labelEn: 'Large Format Printer', href: '/equipment' },
        ],
      },
      {
        groupZh: '加工設備',
        groupEn: 'Milling',
        items: [
          { label: '牙科切削機', labelEn: 'Dental Milling Machine', href: '/equipment' },
          { label: '研磨拋光機', labelEn: 'Grinding & Polishing', href: '/equipment' },
          { label: '後處理設備', labelEn: 'Post-processing', href: '/equipment' },
        ],
      },
      {
        groupZh: '其他',
        groupEn: 'Others',
        items: [
          { label: '光固化燈', labelEn: 'Curing Light', href: '/equipment' },
          { label: '清洗設備', labelEn: 'Washing Unit', href: '/equipment' },
          { label: '配件耗材', labelEn: 'Accessories', href: '/consumables' },
        ],
      },
    ],
  },
  { label: '數位牙科平台', labelEn: 'Digital Platform', href: '/platform' },
  { label: '耗材', labelEn: 'Consumables', href: '/consumables' },
  { label: '服務支援', labelEn: 'Support', href: '/support' },
  { label: '聯絡方式', labelEn: 'Contact Us', href: '/contact', alignRight: true },
];
