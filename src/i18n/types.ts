export interface NavTranslation {
    software: string;
    software_items: string[];
    devices: string;
    scan: string;
    scan_items: string[];
    print: string;
    print_items: string[];
    mill: string;
    mill_items: string[];
    other: string;
    other_items: string[];
    platform: string;
    design: string;
    design_items: string[];
    cloud: string;
    consumables: string;
    consumables_items: string[];
    support: string;
    support_items: string[];
    contact: string;
  }
  
  export interface ProductItem {
    name: string;
    desc: string;
  }
  
  export interface Translation {
    langLabel: string;
    nav: NavTranslation;
    hero: {
      tag: string;
      title: string;
      sub: string;
      cta1: string;
      cta2: string;
    };
    news: {
      title: string;
      items: { date: string; text: string }[];
    };
    software_sec: {
      title: string;
      items: ProductItem[];
    };
    devices_sec: {
      title: string;
      items: ProductItem[];
    };
    testimonials: {
      title: string;
      items: { name: string; role: string; text: string }[];
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      fax: string;
      email: string;
      mapBtn: string;
    };
    footer: {
      links: string[];
      copy: string;
    };
  }
  
  export type LangKey = "zh-TW" | "zh-CN" | "en";