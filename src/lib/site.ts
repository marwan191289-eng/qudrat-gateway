export const SITE = {
  name: "صدارة",
  tagline: "منصة القدرات والتحصيلي",
  teacher: "أ. مروان",
  whatsapp: "966500000000",
  email: "hello@sadara.sa",
  socials: {
    whatsapp: "https://wa.me/966500000000",
    tiktok: "https://www.tiktok.com/@sadara",
    instagram: "https://www.instagram.com/sadara",
    x: "https://x.com/sadara",
    youtube: "https://www.youtube.com/@sadara",
  },
};

export const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/questions", label: "بنك الأسئلة" },
  { to: "/live", label: "الجلسات المباشرة" },
  { to: "/booking", label: "حجز موعد" },
] as const;

export type Track = "كمي" | "لفظي" | "تحصيلي";
export type Question = { id: number; track: Track; q: string; options: string[]; answer: number; explain: string };

export const QUESTIONS: Question[] = [
  { id: 1, track: "كمي", q: "إذا كان متوسط ثلاثة أعداد 15، وأحدها 10 والثاني 20، فما العدد الثالث؟", options: ["15", "10", "20", "30"], answer: 1, explain: "المجموع = 15 × 3 = 45، والثالث = 45 − 10 − 20 = 10." },
  { id: 2, track: "كمي", q: "إذا كان 3س + 7 = 19، فما قيمة س؟", options: ["3", "4", "5", "6"], answer: 1, explain: "3س = 12 ⇒ س = 4." },
  { id: 3, track: "كمي", q: "ما 25% من 240؟", options: ["50", "60", "64", "48"], answer: 1, explain: "240 ÷ 4 = 60." },
  { id: 4, track: "لفظي", q: "الكتاب : القراءة", options: ["القلم : الورق", "الملعقة : الأكل", "الباب : المفتاح", "الماء : الكوب"], answer: 1, explain: "علاقة أداة ووظيفتها: الملعقة أداة الأكل." },
  { id: 5, track: "لفظي", q: "اختر مضاد كلمة «الإسهاب»:", options: ["الإطناب", "الإيجاز", "الإفاضة", "التكرار"], answer: 1, explain: "الإسهاب هو الإطالة، وضده الإيجاز." },
  { id: 6, track: "لفظي", q: "الخطأ السياقي: «نجح الطالب لأنه أهمل المذاكرة طوال العام»", options: ["نجح", "الطالب", "أهمل", "العام"], answer: 2, explain: "السياق يقتضي «اجتهد» لا «أهمل»." },
  { id: 7, track: "تحصيلي", q: "ما وحدة قياس القوة في النظام الدولي؟", options: ["الجول", "الواط", "النيوتن", "الباسكال"], answer: 2, explain: "القوة تقاس بالنيوتن (N)." },
  { id: 8, track: "تحصيلي", q: "العضية المسؤولة عن إنتاج الطاقة في الخلية:", options: ["الريبوسوم", "الميتوكوندريا", "جهاز جولجي", "النواة"], answer: 1, explain: "الميتوكوندريا مركز التنفس الخلوي." },
  { id: 9, track: "تحصيلي", q: "الرقم الهيدروجيني للمحلول المتعادل عند 25°س:", options: ["0", "7", "14", "1"], answer: 1, explain: "pH = 7 للمحلول المتعادل." },
];

export const SESSIONS = [
  { title: "مراجعة القدرات — الجزء اللفظي", track: "لفظي", when: "الأحد · 8:00 م", duration: "90 دقيقة", link: "https://meet.google.com/" },
  { title: "فك شفرات الجزء الكمي", track: "كمي", when: "الإثنين · 7:00 م", duration: "60 دقيقة", link: "https://zoom.us/" },
  { title: "تحصيلي علمي — الأحياء", track: "تحصيلي", when: "الثلاثاء · 8:30 م", duration: "90 دقيقة", link: "https://meet.google.com/" },
  { title: "اختبار محاكي كامل مع الحل", track: "كمي", when: "الخميس · 9:00 م", duration: "120 دقيقة", link: "https://zoom.us/" },
];

export const DAYS = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "السبت"];
export const TIMES = ["4:00م", "6:00م", "8:00م", "9:30م"];

export const FAQ = [
  { q: "هل يمكنني الحضور من دول الخليج؟", a: "نعم، جميع الجلسات أونلاين وتخدم السعودية والإمارات والكويت وقطر والبحرين وعُمان." },
  { q: "هل تُسجَّل الجلسات المباشرة؟", a: "نعم، تُتاح التسجيلات للمشتركين بعد انتهاء كل جلسة." },
  { q: "كيف أحجز موعدًا؟", a: "اختر اليوم والوقت من صفحة الحجز، ويصلك التأكيد مباشرة عبر واتساب." },
  { q: "هل تغطون اختبار STEP؟", a: "نعم، إلى جانب القدرات (الكمي واللفظي) والتحصيلي العلمي." },
];
