import type { LangKey, Translation } from "./types";
import zhTW from "./zh-TW";
import zhCN from "./zh-CN";
import en from "./en";

export const translations: Record<LangKey, Translation> = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
};

export const LANGS: LangKey[] = ["zh-TW", "en"];
export type { LangKey, Translation };