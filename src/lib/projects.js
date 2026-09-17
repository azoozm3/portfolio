const PROJECTS_BASE = [
{
  id:"muen",
  slug:"muen",
  filters:["fullstack","academic"],
  category:"healthcare",
  catColor:"var(--accent)",
  title:"Mu'en",
  title_ar:"معين",
  oneLiner:{en:"A five-role medical support platform — emergency, doctors, nurses, volunteers and admin in one system.", ar:"منصة صحية متكاملة بخمسة أدوار — طوارئ، أطباء، ممرضات، متطوعون وإدارة في نظام واحد."},
  type:{en:"Full-stack web app (MERN-style)", ar:"تطبيق ويب متكامل (MERN)"},
  status:{en:"Graduation project — functional full-stack prototype, not deployed to production", ar:"مشروع تخرج — نموذج متكامل وشغال، غير منشور في بيئة إنتاج"},
  overview:{en:"Mu'en is a full-stack medical support platform built as my graduation project. It gives five different kinds of users — patients, doctors, nurses, volunteers and admins — their own dashboards and flows inside one shared system, instead of scattering emergency contact, appointment booking and home-visit requests across separate tools.", ar:"معين منصة دعم طبي متكاملة بنيتها كمشروع تخرج. تمنح خمسة أنواع من المستخدمين — المريض، الطبيب، الممرضة، المتطوع والمدير — لوحة تحكم وتدفق عمل خاص بكل منهم، ضمن نظام واحد بدل تفريق التواصل الطارئ وحجز المواعيد وطلبات الزيارة المنزلية على أدوات منفصلة."},
  problem:{en:"A patient who needs help usually has to juggle several disconnected channels: a phone call for an emergency, a separate app or clinic visit to book a doctor, another contact for a home-visit nurse, and no easy way to reach a volunteer for lighter support. There's no single place that understands who the patient is and what they already asked for.", ar:"المريض اللي محتاج مساعدة غالبًا لازم يستخدم عدة قنوات منفصلة: اتصال هاتفي للطوارئ، تطبيق أو زيارة عيادة لحجز طبيب، جهة تواصل ثانية لطلب ممرضة لزيارة منزلية، ومافي طريقة سهلة للوصول لمتطوع لمساعدة أخف. ما في مكان واحد يعرف مين المريض وشو طلب سابقًا."},
  solution:{en:"One account system with role-based dashboards for Patient, Doctor, Nurse, Volunteer and Admin. A patient can raise an emergency request with live location, book a paid or free doctor consultation (in person or via Zoom), request a nurse home visit, or request volunteer help — all tracked through status stages, with ratings afterward and an admin layer managing users and the platform underneath.", ar:"نظام حسابات واحد بلوحات تحكم مخصصة لكل دور: مريض، طبيب، ممرضة، متطوع ومدير. المريض يقدر يرفع طلب طوارئ مع موقعه المباشر، يحجز استشارة طبيب مدفوعة أو مجانية (حضوريًا أو عبر Zoom)، يطلب زيارة ممرضة منزلية، أو يطلب مساعدة متطوع — وكل هذا يتتبع عبر مراحل حالة، مع تقييم بعد الانتهاء، وطبقة إدارية تدير المستخدمين والمنصة."},
  myWork:{en:"I built both the client and server. That included the role-based routing and dashboards for all five roles, the full emergency-request subsystem (schemas, handlers, status transitions and review logic), the doctor live-location feature on the map, and wiring up PayPal for payments and Zoom for video consultations. On the backend I set up the MongoDB/Mongoose data layer, the session-based auth with bcrypt password hashing, and the custom production build script.", ar:"اشتغلت على الواجهة الأمامية والخلفية سوا. هذا شمل التوجيه ولوحات التحكم لكل الأدوار الخمسة، نظام طلبات الطوارئ بالكامل (المخططات، المعالجات، انتقالات الحالة ومنطق التقييم)، ميزة تتبع موقع الطبيب المباشر على الخريطة، وربط الدفع عبر PayPal والاستشارات المرئية عبر Zoom. على الخلفية، جهّزت طبقة البيانات بـ MongoDB/Mongoose، ونظام تسجيل الدخول القائم على الجلسات (session) مع تشفير كلمات المرور، وسكربت البناء المخصص للإنتاج."},
  features:{en:[
    "Emergency request flow with live location tracking and doctor-side location badge",
    "Doctor appointments — in person or via Zoom video consultation",
    "Nurse home-visit requests and volunteer request matching",
    "PayPal payments for paid services, with a mock mode when no credentials are configured",
    "Ratings and reviews for doctors, nurses and volunteers",
    "Medicine reminders, personal health record, and a nearby-hospitals finder",
    "In-app chatbot and a services directory",
    "Admin dashboard for user and platform management"
  ], ar:[
    "تدفق طلب طوارئ مع تتبع موقع مباشر وشارة موقع للطبيب",
    "حجز مواعيد طبيب — حضوريًا أو عبر استشارة فيديو Zoom",
    "طلبات زيارة ممرضة منزلية ومطابقة طلبات المتطوعين",
    "دفع عبر PayPal للخدمات المدفوعة، مع وضع تجريبي عند غياب بيانات الدفع",
    "تقييمات ومراجعات للأطباء والممرضات والمتطوعين",
    "تذكير بالأدوية، سجل صحي شخصي، وأداة لإيجاد أقرب مستشفى",
    "روبوت محادثة داخل التطبيق ودليل خدمات",
    "لوحة تحكم إدارية لإدارة المستخدمين والمنصة"
  ]},
  stack:{
    Frontend:["React","Vite","Wouter","TanStack Query","Tailwind CSS","Radix UI","React Hook Form","Zod"],
    Backend:["Node.js","Express 5","express-session","connect-mongo","bcrypt"],
    Database:["MongoDB","Mongoose"],
    Integrations:["PayPal SDK","Zoom SDK"]
  },
  highlights:{en:[
    "Feature-folder architecture on both client and server — code is grouped by domain (emergency, appointments, nurse-requests…) rather than by file type",
    "Session-based authentication with a MongoDB-backed session store and bcrypt password hashing, plus CSRF token handling on auth routes",
    "A mock-mode fallback for PayPal so the app still runs end-to-end locally without real payment credentials",
    "The emergency-request subsystem is split into dedicated handlers, schemas, status-helpers and review-helpers modules rather than one large route file",
    "A custom build script (script/build.js) bundles the server into a single dist/index.cjs for deployment"
  ], ar:[
    "بنية مقسّمة حسب الميزة (feature-folder) في الواجهة والخلفية معًا — الكود مجمّع حسب المجال (طوارئ، مواعيد، طلبات ممرضات...) وليس حسب نوع الملف",
    "تسجيل دخول قائم على الجلسات (session) مع تخزين الجلسات على MongoDB وتشفير كلمات المرور، مع حماية CSRF على مسارات تسجيل الدخول",
    "وضع تجريبي (mock mode) لـ PayPal يخلي التطبيق يشتغل محليًا بالكامل بدون بيانات دفع حقيقية",
    "نظام طلبات الطوارئ مقسوم لوحدات منفصلة للمعالجات، المخططات، حالة الطلب ومنطق التقييم بدل ملف مسارات واحد كبير",
    "سكربت بناء مخصص يجمع الخادم بالكامل في ملف واحد جاهز للنشر"
  ]},
  demo:"muen",
  codeFile:"client/src/features/landing/components/LandingHero.jsx",
  code:"export default function LandingHero() {\n  const [, navigate] = useLocation();\n\n  return (\n    <section className=\"relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_90px_rgba(37,99,235,0.13)] backdrop-blur sm:rounded-[2.5rem] sm:p-8 lg:p-12\">\n      <div className=\"absolute left-0 top-0 h-44 w-44 rounded-full bg-blue-300/30 blur-3xl\" />\n      <div className=\"absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl\" />\n\n      <div className=\"relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:items-center\">\n        <div className=\"space-y-7\">\n          <div className=\"inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur\">\n            <HeartPulse className=\"h-4 w-4 shrink-0\" />\n            <span className=\"truncate\">{heroData.badge}</span>\n          </div>\n\n          <div className=\"space-y-5\">\n            <h1 className=\"max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl\">\n              {heroData.title}\n            </h1>\n            <p className=\"max-w-2xl text-base leading-8 text-slate-600 sm:text-lg\">\n              {heroData.description}\n            </p>\n          </div>\n\n          <div className=\"flex flex-col gap-3 sm:flex-row sm:flex-wrap\">\n            <Button\n              size=\"lg\"\n              className=\"h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 text-base font-black text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-cyan-600\"\n              onClick={() => navigate(heroData.primaryAction.href)}\n            >\n              {heroData.primaryAction.label}\n              <ArrowRight className=\"ml-1 h-4 w-4\" />\n            </Button>\n\n            <Button\n              size=\"lg\"\n              variant=\"ghost\"\n              className=\"h-12 rounded-2xl border border-slate-200 bg-white/85 px-7 text-base font-black text-slate-800 shadow-sm backdrop-blur hover:bg-white\"\n              onClick={() =>\n                document.getElementById(\"how-it-works\")\n                  ?.scrollIntoView({ behavior: \"smooth\", block: \"start\" })\n              }\n            >\n              {heroData.secondaryAction.label}\n            </Button>\n          </div>\n        </div>\n        {/* ...stat cards, highlight cards, device preview mockup... */}\n      </div>\n    </section>\n  );\n}",
  status_ar:{en:"Academic — graduation project", ar:"أكاديمي — مشروع تخرج"},
  arabic:"منصة معين هي منصة صحية متكاملة تساعد المريض على طلب النجدة، حجز موعد مع دكتور، طلب زيارة ممرضة، أو التواصل مع متطوع، كل هذا من مكان واحد. كل نوع مستخدم (مريض، دكتور، ممرضة، متطوع، مدير) عنده لوحة تحكم خاصة فيه. اشتغلت على الواجهة الأمامية والخلفية سوا، وربطت الدفع عبر PayPal والمكالمات عبر Zoom، وبنيت نظام تتبع الموقع المباشر لحالات الطوارئ."
},
{
  id:"academia",
  slug:"academia-central-portal",
  filters:["frontend","academic","react"],
  category:"education",
  catColor:"var(--amber)",
  title:"Academia Central Portal",
  title_ar:"بوابة الطلاب المركزية",
  oneLiner:{en:"A student portal with a course scraper/planner, calendar, tasks, materials and a community space.", ar:"بوابة طلابية فيها أداة بحث عن المواد، تقويم، مهام، مكتبة مواد وصفحة مجتمع."},
  type:{en:"React + TypeScript frontend (shadcn/ui)", ar:"واجهة React + TypeScript"},
  status:{en:"Frontend prototype — data is local/simulated, not connected to a live university system", ar:"نموذج واجهة أولي — البيانات محلية أو مُحاكاة، غير مرتبطة بنظام جامعي حقيقي"},
  overview:{en:"Academia Central Portal is a student dashboard that pulls the scattered parts of university life — finding and planning courses, checking a calendar, tracking tasks, sharing materials, and a small community space — into a single portal, alongside a separate admin view.", ar:"بوابة الطلاب المركزية هي لوحة تحكم طلابية تجمع الأجزاء المتفرقة من الحياة الجامعية — إيجاد المواد والتخطيط لها، متابعة التقويم، تتبع المهام، مشاركة المواد، ومساحة مجتمع صغيرة — في بوابة واحدة، مع واجهة إدارية منفصلة."},
  problem:{en:"Students typically juggle course catalogs, a separate schedule tool, shared drives for materials, and group chats for course discussion — with no single view of what they're taking, when, and what's due.", ar:"الطالب عادة يستخدم كتالوج مواد منفصل، أداة جدول منفصلة، مساحة تخزين مشتركة للمواد، ومحادثات جماعية لنقاش المواد — بدون رؤية واحدة توضح شو ماخذ، إمتى، وشو المطلوب."},
  solution:{en:"A course scraper/search tool that shows schedule and seat availability and lets a student build a registration 'cart', plus a calendar, a task tracker, a shared materials library, a community page, and student and admin logins with separate layouts.", ar:"أداة بحث عن المواد توضح الجدول والمقاعد المتاحة وتتيح للطالب بناء 'سلة تسجيل'، بالإضافة لتقويم، متتبع مهام، مكتبة مواد مشتركة، صفحة مجتمع، وتسجيل دخول منفصل للطالب والمدير بواجهتين مختلفتين."},
  myWork:{en:"I built the full frontend, including the dual-layout routing (a regular sidebar layout for students vs. a separate no-sidebar layout for admin on the same router) and the course-scraper feature itself — the typed course data model and the schedule/cart UI built on top of it.", ar:"بنيت الواجهة بالكامل، بما في ذلك التوجيه بواجهتين مختلفتين (واجهة عادية بشريط جانبي للطلاب مقابل واجهة إدارية بدون شريط جانبي على نفس نظام التوجيه) وأداة البحث عن المواد نفسها — نموذج بيانات المواد وواجهة الجدول والسلة المبنية فوقه."},
  features:{en:[
    "Course scraper — search by department/keyword, view schedule and seat availability, add to a registration cart",
    "Personal calendar and task tracker",
    "Shared materials library",
    "Community page for students",
    "Student profile, plus separate student and admin login flows"
  ], ar:[
    "أداة بحث عن المواد — بحث حسب القسم أو الكلمة المفتاحية، عرض الجدول والمقاعد المتاحة، إضافة لسلة التسجيل",
    "تقويم شخصي ومتتبع مهام",
    "مكتبة مواد مشتركة",
    "صفحة مجتمع للطلاب",
    "ملف شخصي للطالب، وتسجيل دخول منفصل للطالب والمدير"
  ]},
  stack:{
    Frontend:["React","TypeScript","Vite","React Router","TanStack Query","shadcn/ui","Tailwind CSS","React Hook Form"]
  },
  highlights:{en:[
    "Dual-layout architecture — a student Layout and a separate AdminLayout share one router without duplicating the app shell",
    "A typed course-scraper data model (code, credits, instructor, schedule, availability) drives both the results table and the registration cart",
  ], ar:[
    "بنية بواجهتين — Layout للطالب و AdminLayout منفصل يشتركان بنفس نظام التوجيه بدون تكرار هيكل التطبيق",
    "نموذج بيانات مكتوب بأنواع (TypeScript) لأداة البحث عن المواد (الرمز، الساعات، المحاضر، الجدول، المقاعد المتاحة) يغذي جدول النتائج وسلة التسجيل"
  ]},
  demo:"academia",
  codeFile:"src/pages/LandingPage.tsx",
  code:"const LandingPage = () => {\n  return (\n    <div className=\"min-h-screen relative overflow-hidden\">\n      {/* Background blobs */}\n      <div className=\"absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob\"></div>\n\n      <div className=\"relative z-10 bg-gradient-to-b from-white/70 via-white/50 to-white/30 backdrop-blur-sm\">\n        <header className=\"container mx-auto px-4 py-6\">\n          <div className=\"flex items-center justify-between\">\n            <Logo size=\"lg\" />\n            <div className=\"flex items-center gap-4\">\n              <Link to=\"/login\"><Button variant=\"outline\">Log in</Button></Link>\n              <Link to=\"/login\"><Button>Get Started</Button></Link>\n            </div>\n          </div>\n        </header>\n\n        <section className=\"container mx-auto px-4 py-16 md:py-24\">\n          <div className=\"max-w-4xl mx-auto text-center\">\n            <h1 className=\"text-4xl md:text-6xl font-bold tracking-tight mb-6\">\n              Maximize Your <span className=\"text-primary\">Academic Success</span>\n            </h1>\n            <p className=\"text-xl text-muted-foreground mb-10\">\n              Plan your courses, manage tasks, and collaborate with classmates.\n              The all-in-one platform to organize your academic journey.\n            </p>\n            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">\n              <Link to=\"/login\"><Button size=\"lg\">Get Started</Button></Link>\n              <Link to=\"/course-scraper\"><Button size=\"lg\" variant=\"outline\">Try Course Scheduler</Button></Link>\n            </div>\n          </div>\n        </section>\n        {/* ...features grid, CTA section and footer follow... */}\n      </div>\n    </div>\n  );\n};",
  arabic:"هاي المنصة هي بوابة للطلاب تساعدهم يلاقوا المواد المتاحة، يشوفوا الجدول والمواعيد، يحطوا المواد يلي بدهم يسجلوها بسلة تسجيل، وكمان فيها تقويم ومهام ومكتبة مواد وصفحة مجتمع للطلاب. اشتغلت على كامل الواجهة وأداة البحث عن المواد. (بالكود الداخلي، المشروع مسمّى Schedulak.)"
},
{
  id:"ailearn",
  slug:"ai-learn",
  filters:["fullstack","academic"],
  category:"education",
  catColor:"var(--amber)",
  title:"AI Learn",
  title_ar:"AI Learn",
  oneLiner:{en:"A four-module interactive e-learning site that teaches AI basics with quizzes and progress tracking.", ar:"موقع تعليمي تفاعلي بأربع وحدات يعلّم أساسيات الذكاء الاصطناعي مع اختبارات وتتبع تقدم."},
  type:{en:"PHP + MySQL (LAMP-stack) web app", ar:"تطبيق ويب بلغة PHP وقاعدة بيانات MySQL"},
  status:{en:"Academic project — functional local app, uses local development database credentials", ar:"مشروع أكاديمي — تطبيق محلي شغال، يستخدم بيانات قاعدة بيانات تطوير محلية"},
  overview:{en:"AI Learn teaches AI fundamentals through four short interactive modules — essentials and glossary, the ML workflow, neural networks, and AI ethics — each ending in a quiz, with progress and scores tracked as the learner moves through the course.", ar:"AI Learn يعلّم أساسيات الذكاء الاصطناعي عبر أربع وحدات تفاعلية قصيرة — الأساسيات والمصطلحات، خطوات التعلم الآلي، الشبكات العصبية، وأخلاقيات الذكاء الاصطناعي — تنتهي كل وحدة باختبار قصير، مع تتبع التقدم والنتائج أثناء تقدم المتعلم بالمساق."},
  problem:{en:"AI concepts like the ML pipeline, neural networks and ethical trade-offs can feel dry and abstract when taught only through text, with no way to check whether the ideas actually landed.", ar:"مفاهيم الذكاء الاصطناعي مثل خطوات التعلم الآلي، الشبكات العصبية والمقايضات الأخلاقية ممكن تحس فيها جافة ومجردة لما تُشرح بالنص فقط، بدون طريقة للتأكد إذا الفكرة فعلاً وصلت."},
  solution:{en:"Four bite-sized interactive modules, each with a short quiz. Progress and per-module scores are tracked in the session as the learner completes modules, with an admin panel to review, update or delete saved quiz results.", ar:"أربع وحدات تفاعلية قصيرة، كل وحدة فيها اختبار قصير. التقدم والنتائج لكل وحدة تُتبَّع في الجلسة أثناء إكمال المتعلم للوحدات، مع لوحة تحكم إدارية لمراجعة نتائج الاختبارات أو تعديلها أو حذفها."},
  myWork:{en:"I built the full stack — the module content and interactive frontend, the PHP session logic that tracks progress and scores, a small ResultController/ResultModel pair for persisting quiz results to MySQL, and the admin login and dashboard.", ar:"بنيت التطبيق بالكامل — محتوى الوحدات والواجهة التفاعلية، منطق الجلسات بلغة PHP لتتبع التقدم والنتائج، ثنائي ResultController/ResultModel لحفظ نتائج الاختبارات في MySQL، وتسجيل الدخول ولوحة التحكم الإدارية."},
  features:{en:[
    "Landing page introducing the course",
    "Four interactive modules: AI Essentials, ML Workflow, Neural Networks, AI Ethics",
    "Per-module quizzes with saved scores",
    "Session-based progress and completion tracking, no login required for learners",
    "Admin login and dashboard to view, update or delete quiz results"
  ], ar:[
    "صفحة رئيسية تعرّف بالمساق",
    "أربع وحدات تفاعلية: أساسيات الذكاء الاصطناعي، خطوات التعلم الآلي، الشبكات العصبية، أخلاقيات الذكاء الاصطناعي",
    "اختبار قصير لكل وحدة مع حفظ النتيجة",
    "تتبع التقدم والإنجاز عبر الجلسة، بدون الحاجة لتسجيل دخول للمتعلم",
    "تسجيل دخول ولوحة تحكم إدارية لعرض نتائج الاختبارات أو تعديلها أو حذفها"
  ]},
  stack:{
    Backend:["PHP","PDO"],
    Database:["MySQL"],
    Frontend:["Vanilla JavaScript","CSS"]
  },
  highlights:{en:[
    "PDO with prepared statements and typed input validation (filter_input) in the results controller",
    "Session-driven progress state, so only quiz results — not progress itself — need the database",
    "A small MVC-style split (ResultController / ResultModel) introduced specifically for the results feature"
  ], ar:[
    "استخدام PDO مع استعلامات محضّرة (prepared statements) والتحقق من صحة المدخلات في وحدة تحكم النتائج",
    "حالة تقدم قائمة على الجلسة، بحيث فقط نتائج الاختبارات — وليس التقدم نفسه — تحتاج قاعدة بيانات",
    "تقسيم بسيط على نمط MVC (ResultController / ResultModel) خصيصًا لميزة النتائج"
  ]},
  demo:"ailearn",
  codeFile:"index.php (landing hero)",
  code:"<!-- ═══════════ HEADER ═══════════ -->\n<header id=\"main-header\">\n  <nav>\n    <a href=\"#\" class=\"nav-logo\">\n      <div class=\"logo-icon\">🧠</div>\n      <span>AI Learn</span>\n    </a>\n    <div class=\"nav-actions\">\n      <a href=\"admin_login.php\" class=\"btn-ghost\">Admin Login</a>\n      <a href=\"#start\" class=\"btn-primary\">Get Started →</a>\n    </div>\n  </nav>\n</header>\n\n<!-- ═══════════ HERO ═══════════ -->\n<section class=\"hero\" id=\"start\">\n  <div class=\"hero-bg\"></div>\n  <div class=\"orb orb-1\"></div>\n  <div class=\"orb orb-2\"></div>\n  <div class=\"orb orb-3\"></div>\n\n  <div class=\"hero-content\">\n    <div class=\"hero-badge\">\n      <span class=\"badge-dot\"></span>\n      Now Live — 4 New AI Modules Added\n    </div>\n\n    <h1>\n      Learn AI Basics<br>\n      <span class=\"gradient-text\">The Smart Way</span>\n    </h1>\n\n    <p>An interactive platform that makes artificial intelligence simple, engaging, and genuinely fun. Short modules. Quick quizzes. Real understanding.</p>\n\n    <form class=\"hero-form\" id=\"start-form\">\n      <div class=\"hero-input-wrap\">\n        <input id=\"username\" type=\"text\" placeholder=\"Your name to get started...\" maxlength=\"80\" required>\n      </div>\n      <button type=\"submit\" class=\"btn-hero\">Start Learning →</button>\n    </form>\n    <!-- ...social proof strip and module preview cards follow... -->\n  </div>\n</section>",
  arabic:"AI Learn منصة تعليمية بسيطة بتعلّم أساسيات الذكاء الاصطناعي عن طريق أربع وحدات تفاعلية (أساسيات الذكاء الاصطناعي، خطوات التعلم الآلي، الشبكات العصبية، وأخلاقيات الذكاء الاصطناعي)، كل وحدة فيها اختبار قصير وبيتسجل التقدم والنتيجة. اشتغلت على الواجهة والخلفية سوا باستخدام PHP و MySQL."
},
{
  id:"bugblaster",
  slug:"react-bug-blaster",
  filters:["react","training"],
  category:"practice",
  catColor:"var(--slate)",
  title:"React Bug Blaster",
  title_ar:"React Bug Blaster",
  oneLiner:{en:"A bug-ticket tracker built to practice useReducer for related state.", ar:"تطبيق تتبع تذاكر أعطال للتمرّن على useReducer."},
  type:{en:"React practice project (Create React App)", ar:"مشروع تدريبي بـ React"},
  status:{en:"Training exercise", ar:"تمرين تدريبي"},
  overview:{en:"A small bug-ticket tracker built specifically to practice managing several related pieces of state together with useReducer, instead of scattering them across multiple useState calls.", ar:"تطبيق صغير لتتبع تذاكر أعطال، بنيته خصيصًا للتمرّن على إدارة عدة أجزاء من الحالة مرتبطة ببعضها باستخدام useReducer بدل توزيعها على عدة useState."},
  problem:{en:"Managing a ticket list, which ticket is being edited, and the current sort preference as three separate useState hooks gets messy fast once they need to update together.", ar:"إدارة قائمة تذاكر، والتذكرة الجاري تعديلها، وتفضيل الترتيب الحالي كثلاث useState منفصلة تصبح فوضى بسرعة عندما تحتاج تتحدّث مع بعض."},
  solution:{en:"One useReducer manages tickets, editingTicket and sortPreference together through a single reducer function, with a small pure utility function handling the sort logic.", ar:"useReducer واحد يدير tickets وeditingTicket وsortPreference سوا عبر دالة reducer واحدة، مع دالة مساعدة نقية (pure function) تتولى منطق الترتيب."},
  myWork:{en:"I built the reducer, the ticket form and list components, and the sorting utility.", ar:"بنيت الـ reducer، مكونات نموذج التذكرة والقائمة، وأداة الترتيب."},
  features:{en:["Add and edit bug tickets","Ticket list view","Sort tickets by priority (e.g. High to Low)"], ar:["إضافة وتعديل تذاكر الأعطال","عرض قائمة التذاكر","ترتيب التذاكر حسب الأولوية"]},
  stack:{ Frontend:["React","useReducer","CSS"] },
  highlights:{en:["A single useReducer manages three related state values instead of multiple useState hooks","Sort logic lives in a separate pure function (sortingUtilities.js), kept out of the component"], ar:["useReducer واحد يدير ثلاث قيم حالة مترابطة بدل عدة useState","منطق الترتيب في دالة نقية منفصلة، بعيدًا عن المكوّن"]},
  arabic:"تطبيق تدريبي بسيط لإدارة تذاكر أعطال (Bug Tickets)، استخدمته للتمرّن على useReducer في React بدل استخدام عدة useState متفرقة."
},
{
  id:"moviedux",
  slug:"react-moviedux",
  filters:["react","training"],
  category:"practice",
  catColor:"var(--slate)",
  title:"React MovieDux",
  title_ar:"React MovieDux",
  oneLiner:{en:"A movie browser with a personal watchlist, built to practice routing and fetch-based data loading.", ar:"تطبيق تصفح أفلام مع قائمة مشاهدة شخصية، للتمرّن على التوجيه وجلب البيانات."},
  type:{en:"React practice project (Create React App)", ar:"مشروع تدريبي بـ React"},
  status:{en:"Training exercise", ar:"تمرين تدريبي"},
  overview:{en:"A small movie-browsing app that loads a local movie dataset and lets a user toggle movies into a personal watchlist, built to practice React Router and async data loading with fetch.", ar:"تطبيق صغير لتصفح الأفلام يحمّل بيانات أفلام محلية ويتيح للمستخدم إضافة أفلام لقائمة مشاهدة شخصية، بنيته للتمرّن على React Router وجلب البيانات بشكل غير متزامن باستخدام fetch."},
  problem:{en:"Practicing two things at once: loading async data on mount, and keeping a derived selection (the watchlist) in sync across routed pages.", ar:"التمرّن على شيئين مع بعض: تحميل بيانات بشكل غير متزامن عند التحميل، والحفاظ على تزامن اختيار مشتق (قائمة المشاهدة) عبر صفحات موجّهة."},
  solution:{en:"App fetches a local movies.json on load with useEffect, keeps a watchlist array in state at the top level, and passes a toggle handler down to the movie grid; a separate route renders the watchlist itself.", ar:"يقوم التطبيق بجلب ملف movies.json محلي عند التحميل باستخدام useEffect، ويحتفظ بمصفوفة قائمة المشاهدة في الحالة على المستوى الأعلى، ويمرر دالة تبديل للأسفل لشبكة الأفلام؛ ومسار منفصل يعرض قائمة المشاهدة نفسها."},
  myWork:{en:"I built the components (Header, Footer, MoviesGrid, MovieCard, Watchlist), the routing between the movie grid and the watchlist view, and the toggle logic.", ar:"بنيت المكونات (Header، Footer، MoviesGrid، MovieCard، Watchlist)، التوجيه بين شبكة الأفلام وصفحة قائمة المشاهدة، ومنطق الإضافة والحذف."},
  features:{en:["Movie grid loaded from a local JSON file","Add/remove a movie from a personal watchlist","Separate routed watchlist view"], ar:["شبكة أفلام محمّلة من ملف JSON محلي","إضافة/حذف فيلم من قائمة مشاهدة شخصية","صفحة قائمة مشاهدة منفصلة بمسار خاص"]},
  stack:{ Frontend:["React","React Router","fetch API","CSS"] },
  highlights:{en:["Uses a static movies.json as a mock API to practice async loading without a real backend","Watchlist state lifted to the top-level App component and passed down"], ar:["استخدام ملف movies.json ثابت كـ API وهمي للتمرّن على التحميل غير المتزامن بدون خلفية حقيقية","حالة قائمة المشاهدة مرفوعة لمكوّن App الرئيسي وممررة للأسفل"]},
  arabic:"تطبيق تدريبي لعرض قائمة أفلام وإضافتها لقائمة مشاهدة خاصة، استخدمته للتمرّن على React Router وجلب البيانات بـ fetch وإدارة الحالة."
},
{
  id:"training",
  slug:"training-exercises",
  filters:["training"],
  category:"other",
  catColor:"var(--grey)",
  title:"HTML/CSS/JS Training Exercises",
  title_ar:"تمارين تدريبية HTML/CSS/JS",
  oneLiner:{en:"A set of small standalone coursework tasks practicing core HTML, CSS and JavaScript.", ar:"مجموعة مهام تدريبية بسيطة لتقوية أساسيات HTML وCSS وJavaScript."},
  type:{en:"Coursework / training tasks", ar:"مهام تدريبية"},
  status:{en:"Training / coursework — not standalone products", ar:"تدريبي — ليست منتجات مستقلة"},
  overview:{en:"A handful of small, self-contained tasks from a practical training track — plain HTML/CSS/JS layout and scripting exercises, plus an exam-style task. They're deliberately small and are grouped here rather than presented as individual products.", ar:"مجموعة مهام صغيرة ومستقلة من مسار تدريب عملي — تمارين تصميم وبرمجة بلغات HTML/CSS/JS بسيطة، بالإضافة لمهمة على شكل امتحان. هذه المهام صغيرة بشكل مقصود ومجمّعة هنا بدل عرضها كمنتجات منفصلة."},
  myWork:{en:"Built each task's markup, styling and scripting from a given brief as part of a training program.", ar:"بنيت تنسيق وتصميم وبرمجة كل مهمة حسب المطلوب كجزء من برنامج تدريبي."},
  features:{en:["Multiple standalone HTML/CSS/JS layout tasks","A scripted interactivity task with its own JS file","An exam-style task"], ar:["عدة مهام تصميم مستقلة بـ HTML/CSS/JS","مهمة تفاعلية ببرمجة JS خاصة بها","مهمة على شكل امتحان"]},
  stack:{ Frontend:["HTML","CSS","JavaScript"] },
  arabic:"مجموعة تمارين ومهام تدريبية بسيطة بلغات HTML وCSS وJavaScript، سويتها كجزء من تدريب عملي لتقوية الأساسيات في تطوير الواجهات."
},
{
  id:"ministore",
  slug:"mini-store",
  filters:["fullstack","academic"],
  category:"ecommerce",
  catColor:"var(--teal)",
  title:"Mini Store",
  title_ar:"Mini Store",
  oneLiner:{en:"A LAMP-stack e-commerce storefront with category browsing, a live cart, and checkout flow — a university course project.", ar:"متجر إلكتروني بتقنية PHP وMySQL، بتصفح فئات وسلة تسوق مباشرة وصفحة دفع — مشروع لمادة جامعية."},
  type:{en:"PHP + MySQL (LAMP-stack) e-commerce app", ar:"تطبيق تجارة إلكترونية بلغة PHP وقاعدة بيانات MySQL"},
  status:{en:"University project (Jul–Sep 2025) — functional prototype, not deployed to production", ar:"مشروع جامعي (تموز–أيلول 2025) — نموذج أولي متكامل وشغال، غير منشور في بيئة إنتاج"},
  overview:{en:"Mini Store is a full-stack e-commerce storefront built for a university course — a category-driven product catalog with search and promotional banners, plus a full cart and checkout flow with a live subtotal and a shipping-cost estimator.", ar:"Mini Store متجر إلكتروني متكامل بنيته لمادة جامعية — كتالوج منتجات مقسّم بالفئات مع بحث وبانرات ترويجية، بالإضافة لسلة تسوق وصفحة دفع كاملة مع مجموع فرعي مباشر وأداة لتقدير تكلفة الشحن."},
  problem:{en:"A small storefront still needs to feel like a real shop — organized categories, clear promotions, and a cart the shopper can trust — while running on a plain LAMP stack without a heavyweight e-commerce framework.", ar:"المتجر الصغير لازم يحس المتسوق فيه بأنه متجر حقيقي — فئات منظمة، عروض واضحة، وسلة تسوق موثوقة — مع بقاء المشروع على تقنية LAMP بسيطة بدون إطار عمل تجارة إلكترونية ثقيل."},
  solution:{en:"A category sidebar and search bar drive product discovery, with promotional banners on the homepage. Adding an item to the cart flows into a cart page with quantity controls, a per-line update/remove action, a running subtotal, and a shipping-cost estimator by country.", ar:"شريط جانبي للفئات وحقل بحث يقودان تصفح المنتجات، مع بانرات ترويجية في الصفحة الرئيسية. إضافة عنصر للسلة تنتقل لصفحة سلة فيها تحكم بالكمية، إجراء تحديث/حذف لكل عنصر، مجموع فرعي مباشر، وأداة لتقدير تكلفة الشحن حسب الدولة."},
  myWork:{en:"I built the full stack myself — the PHP/MySQL backend handling products, categories, and cart/session state, and the HTML/CSS/JavaScript frontend for the catalog, search, and checkout pages. I wrote 20+ manual transaction tests, optimized the MySQL queries and indexing (cutting query time by about 45%), and ran a unit-testing and code-review pass that reached 90% coverage and caught 8 bugs before launch. I also resolved 12+ issues found during testing while keeping 99% uptime through that phase.", ar:"بنيت المشروع بالكامل — الخلفية بلغة PHP وMySQL لإدارة المنتجات والفئات وحالة السلة/الجلسة، والواجهة بـ HTML وCSS وJavaScript لصفحات الكتالوج والبحث والدفع. كتبت أكثر من 20 اختبار معاملة يدوي، وحسّنت استعلامات MySQL وفهرستها (خفضت زمن الاستعلام حوالي 45%)، ونفّذت اختبارات وحدة ومراجعة كود وصلت لتغطية 90% واكتشفت 8 أخطاء قبل الإطلاق. كذلك حللت أكثر من 12 مشكلة ظهرت أثناء الاختبار مع الحفاظ على نسبة تشغيل 99% خلال تلك المرحلة."},
  features:{en:[
    "Category sidebar with nested subcategories (Women, Men's, Ez-Pages)",
    "Site-wide product search bar",
    "Homepage promotional banners and a category tile grid",
    "Shopping cart with quantity controls and per-line update/remove",
    "Live subtotal and order summary",
    "Shipping-cost estimator by country"
  ], ar:[
    "شريط جانبي للفئات مع فئات فرعية متداخلة (Women، Men's، Ez-Pages)",
    "حقل بحث عام على مستوى الموقع",
    "بانرات ترويجية في الصفحة الرئيسية وشبكة فئات مصغّرة",
    "سلة تسوق بتحكم بالكمية وإجراء تحديث/حذف لكل عنصر",
    "مجموع فرعي مباشر وملخص للطلب",
    "أداة لتقدير تكلفة الشحن حسب الدولة"
  ]},
  stack:{ Frontend:["HTML","CSS","JavaScript"], Backend:["PHP"], Database:["MySQL"] },
  highlights:{en:[
    "Optimized MySQL queries and added indexing, cutting query time by about 45%",
    "Unit tests and a code-review process reaching 90% coverage and catching 8 bugs before launch",
    "20+ manual transaction tests covering the cart and checkout flow",
    "Resolved 12+ issues found during testing while keeping 99% uptime through that phase"
  ], ar:[
    "تحسين استعلامات MySQL وإضافة فهرسة، ما خفّض زمن الاستعلام حوالي 45%",
    "اختبارات وحدة وعملية مراجعة كود وصلت لتغطية 90% واكتشفت 8 أخطاء قبل الإطلاق",
    "أكثر من 20 اختبار معاملة يدوي غطّى تدفق السلة والدفع",
    "حل أكثر من 12 مشكلة ظهرت أثناء الاختبار مع الحفاظ على نسبة تشغيل 99% خلال تلك المرحلة"
  ]},
  arabic:"Mini Store متجر إلكتروني بنيته بلغة PHP وقاعدة بيانات MySQL كمشروع جامعي. فيه فئات منتجات، بحث، بانرات عروض، وسلة تسوق كاملة مع صفحة دفع وتقدير شحن. اشتغلت على الواجهة والخلفية سوا، وحسّنت أداء الاستعلامات، ونفّذت اختبارات شاملة قبل الإطلاق."
}
];

const updates = {
    muen: {
      sourceFiles:["Mu'en_Project/Muen-main copy/client/src/features/landing/components/LandingHero.jsx","client/src/features/landing/landing.data.js","client/src/features/patient-services/patientServiceCards.js","client/src/components/patient/PatientEmergencyForm.jsx","client/src/components/patient/PatientStatusCard.jsx","client/src/components/doctor/DoctorRouteTracker.jsx","server/routes/emergency-request-routes/*","server/features/admin/*"],
      howWorks:{en:"The React client routes users into role-specific areas. Patients choose services, submit emergency/nurse/volunteer/appointment requests, and track status. Providers and admins receive those requests through dedicated dashboards. The Express server stores users, requests, appointments, reviews, payments, settings, and activity data in MongoDB via Mongoose.",ar:"واجهة React توجّه المستخدم حسب الدور. المريض يختار الخدمة ويرسل طلب طوارئ أو ممرض أو متطوع أو موعد ويتابع الحالة. مقدمو الخدمة والإدارة يستقبلون الطلبات من لوحات تحكم منفصلة. خادم Express يحفظ المستخدمين والطلبات والمواعيد والتقييمات والمدفوعات والإعدادات وسجل النشاط في MongoDB عبر Mongoose."},
      architecture:{en:["React/Vite client organized by feature folders such as landing, patient-services, appointments, nurse-requests, volunteer-requests, admin, profile, and chatbot.","Express server split into route modules, feature services, Mongoose models, storage helpers, and integration services for PayPal and Zoom.","Shared schema/constants layer supports contracts used across client and server."],ar:["واجهة React/Vite منظمة حسب الميزة مثل landing وpatient-services وappointments وnurse-requests وvolunteer-requests وadmin وprofile وchatbot.","خادم Express مقسم إلى مسارات، خدمات ميزات، نماذج Mongoose، أدوات تخزين، وخدمات تكامل لـ PayPal وZoom.","طبقة shared تحتوي مخططات وثوابت مشتركة بين الواجهة والخادم."]},
      screens:{en:["Landing hero with device preview, highlights, stats, services, workflow, CTA, and footer.","Patient services cards for nurse requests, volunteer requests, appointments, reminders, nearby hospitals, and health records.","Emergency request form with live GPS requirement and map preview.","Patient status card with request ID, status badge, details, route tracker, cancellation, and doctor rating when resolved.","Doctor route tracker with patient details, responder GPS, map, and status action."],ar:["صفحة هبوط فيها معاينة أجهزة، نقاط بارزة، إحصاءات، خدمات، خطوات العمل، دعوة إجراء وتذييل.","بطاقات خدمات المريض: طلب ممرض، طلب متطوع، المواعيد، تذكير الأدوية، المستشفيات القريبة، والسجل الصحي.","نموذج طلب الطوارئ مع متطلب GPS مباشر ومعاينة خريطة.","بطاقة حالة للمريض فيها رقم الطلب، شارة الحالة، التفاصيل، تتبع الطريق، الإلغاء، وتقييم الطبيب عند الحل.","متتبع طريق للطبيب فيه تفاصيل المريض، GPS المستجيب، الخريطة، وإجراء الحالة."]},
      lessons:{en:["Large role-based apps are easier to maintain when UI, routes, services, and helpers are grouped by domain.","Emergency workflows need visible state, clear cancellation paths, and careful live-location handling.","Mock/fallback integration modes help keep the project testable without production PayPal or Zoom credentials."],ar:["التطبيقات متعددة الأدوار تصبح أسهل صيانة عندما تُنظم الواجهة والمسارات والخدمات حسب المجال.","تدفقات الطوارئ تحتاج حالة واضحة، مسار إلغاء واضح، وتعامل دقيق مع الموقع المباشر.","أوضاع التكامل التجريبية تساعد على اختبار المشروع بدون مفاتيح PayPal أو Zoom إنتاجية."]},
      preview:"muen-real"
    },
    vitallink: {
      sourceFiles:["react co/vital-link-main/src/App.tsx","src/pages/Landing.tsx","src/pages/Login.tsx","src/pages/patient/Dashboard.tsx","src/pages/patient/Services.tsx","src/pages/patient/FindDoctor.tsx","src/pages/patient/WaitingScreen.tsx","src/components/AppHeader.tsx","src/index.css"],
      howWorks:{en:"React Router maps the public landing, auth pages, patient dashboard, services, doctor search, waiting screen, patient profile, doctor dashboard, and admin dashboard. The patient flow is simulated on the client: login navigates to the patient dashboard, the HELP action routes to a waiting screen, and the waiting status changes after a timer.",ar:"React Router يربط الصفحة الرئيسية، صفحات الدخول، لوحة المريض، الخدمات، البحث عن طبيب، شاشة الانتظار، ملف المريض، لوحة الطبيب، ولوحة الإدارة. تدفق المريض مُحاكى في الواجهة: تسجيل الدخول ينقل للوحة المريض، زر HELP ينقل لشاشة الانتظار، والحالة تتغير بعد مؤقت."},
      architecture:{en:["Vite React TypeScript frontend only.","Route-based pages under src/pages for patient, doctor, and admin roles.","shadcn/ui-style tokens and Tailwind variables in src/index.css."],ar:["واجهة Vite React TypeScript فقط.","صفحات حسب المسار داخل src/pages لأدوار المريض والطبيب والمدير.","ألوان Tailwind ومتغيرات بأسلوب shadcn/ui داخل src/index.css."]},
      screens:{en:["Landing page with Mu'in header, role cards for Patients, Doctors, Nurses, and Volunteers, auth actions, and support badges.","Login form with logo, email/password fields, show-password toggle, sign-in action, signup link, and forgot link.","Patient dashboard with HELP button, services/profile actions, and chatbot floating button.","Services list and find-doctor filter form with doctor cards.","Waiting screen with request ID, status pill, request details, update message, optional assigned doctor card, and cancel button."],ar:["صفحة هبوط مع رأس مُعين، بطاقات أدوار للمرضى والأطباء والممرضين والمتطوعين، أزرار الدخول، وشارات دعم.","نموذج دخول فيه شعار، حقول بريد/كلمة مرور، زر إظهار كلمة المرور، تسجيل الدخول، رابط التسجيل، ورابط النسيان.","لوحة مريض فيها زر HELP، إجراءات الخدمات والملف الشخصي، وزر محادثة عائم.","قائمة خدمات ونموذج بحث عن طبيب مع بطاقات أطباء.","شاشة انتظار فيها رقم طلب، شارة حالة، تفاصيل الطلب، رسالة تحديث، بطاقة الطبيب عند القبول، وزر إلغاء."]},
      lessons:{en:["A frontend prototype can communicate a full product flow when routes and states are explicit.","Mock data should be labeled as prototype data so it is not confused with production backend behavior."],ar:["النموذج الأمامي يستطيع شرح تدفق منتج كامل عندما تكون المسارات والحالات واضحة.","البيانات المحاكية يجب توضيح أنها بيانات نموذج أولي حتى لا تُفهم كخلفية إنتاجية."]},
      preview:"vital-real"
    },
    academia: {
      sourceFiles:["academia-central-portal-main/src/pages/LandingPage.tsx","src/pages/Dashboard.tsx","src/pages/CourseScraper.tsx","src/pages/Tasks.tsx","src/components/CourseCard.tsx","src/components/Logo.tsx","package.json"],
      howWorks:{en:"The app uses React Router pages and local mock data. The dashboard renders course cards from component state. The Course Scheduler filters a mock course database by selected days and time range, then generates up to three non-conflicting schedule options around a target credit count.",ar:"التطبيق يستخدم صفحات React Router وبيانات محلية محاكاة. لوحة التحكم تعرض بطاقات مواد من حالة المكوّن. Course Scheduler يفلتر قاعدة مواد محلية حسب الأيام والوقت، ثم يولد حتى ثلاث خيارات جدول بدون تعارض حول عدد ساعات مستهدف."},
      architecture:{en:["Vite React TypeScript app using shadcn/ui, Radix UI, Tailwind, React Router, and TanStack Query dependency setup.","Pages are separated for landing, login, dashboard, courses, course scraper, tasks, calendar, profile, materials, community, admin login, and admin dashboard.","CourseCard and shared UI components keep repeated card/table/form patterns reusable."],ar:["تطبيق Vite React TypeScript يستخدم shadcn/ui وRadix UI وTailwind وReact Router وتجهيز TanStack Query.","الصفحات منفصلة للهبوط، الدخول، اللوحة، المواد، مجدول المواد، المهام، التقويم، الملف، المواد التعليمية، المجتمع، دخول المدير، ولوحة المدير.","CourseCard ومكونات UI المشتركة تعيد استخدام أنماط البطاقات والجداول والنماذج."]},
      screens:{en:["Landing page branded Schedulak with login/get-started actions and feature cards for scheduling, tasks, study groups, materials, time analytics, and more.","Dashboard grid of course cards with instructor, duration, progress bar, View Details, and Continue buttons.","Course Scheduler preferences: selected days, from/to time range, target credits, find courses, generate schedules, results table, and schedule options."],ar:["صفحة هبوط باسم Schedulak مع أزرار دخول/بدء وبطاقات ميزات للجدولة والمهام ومجموعات الدراسة والمواد وتحليل الوقت والمزيد.","شبكة لوحة تحكم من بطاقات مواد فيها المدرس والمدة وشريط التقدم وأزرار View Details وContinue.","تفضيلات Course Scheduler: اختيار الأيام، وقت من/إلى، الساعات المستهدفة، البحث عن المواد، توليد الجداول، جدول النتائج، وخيارات الجدول."]},
      lessons:{en:["Course scheduling needs both filtering constraints and conflict detection, even with local prototype data.","Feature breadth should be represented honestly: Tasks exists as a simple placeholder page, while Course Scheduler contains the real logic."],ar:["جدولة المواد تحتاج فلترة قيود وكشف تعارضات حتى مع بيانات نموذجية محلية.","يجب عرض نطاق المشروع بصدق: صفحة Tasks موجودة كصفحة بسيطة، بينما Course Scheduler يحتوي المنطق الحقيقي."]},
      preview:"academia-real"
    },
    ailearn: {
      sourceFiles:["e-elearing-main/index.php","app.php","module.php","dashboard.php","sidebar.php","app.js","ResultController.php","ResultModel.php","landing.css","style.css","images/*.png"],
      howWorks:{en:"Learners enter a name on the landing page and move into a PHP session-based app. app.php initializes module completion and score state for four modules. app.js handles view switching, step navigation, quiz rendering/submission, and progress reset. ResultController and ResultModel persist quiz results through validated POST handlers and PDO.",ar:"المتعلم يدخل اسمه في صفحة الهبوط ثم ينتقل لتطبيق PHP قائم على الجلسات. app.php يجهز حالة إكمال ونتائج أربع وحدات. app.js يدير تبديل الشاشات والتنقل بين الخطوات وبناء الاختبارات وإرسالها وإعادة ضبط التقدم. ResultController وResultModel يحفظان النتائج عبر POST مع تحقق ومدخلات PDO."},
      architecture:{en:["PHP pages/includes for landing, app shell, sidebar, header, dashboard, and module content.","Vanilla JavaScript quiz engine with a QUIZZES object for four modules and DOM-based view/step controls.","PDO-backed ResultModel with ResultController endpoints for save, update, and delete."],ar:["صفحات PHP وincludes للهبوط، هيكل التطبيق، القائمة الجانبية، الرأس، اللوحة، ومحتوى الوحدات.","محرك اختبارات JavaScript عادي يحتوي QUIZZES لأربع وحدات وتحكم DOM بالشاشات والخطوات.","ResultModel مبني على PDO مع ResultController للحفظ والتعديل والحذف."]},
      screens:{en:["Landing page with AI Learn logo, Admin Login, Get Started, name form, and course introduction.","Dashboard showing session progress across four modules and average score.","Four module views: AI Essentials, ML Workflow, Neural Networks, and AI Ethics, each with step navigation and quizzes.","Admin result management via save/update/delete controller/model files."],ar:["صفحة هبوط فيها شعار AI Learn، دخول المدير، Get Started، نموذج الاسم، وتعريف المساق.","لوحة تعرض تقدم الجلسة عبر أربع وحدات ومتوسط النتيجة.","أربع شاشات وحدات: AI Essentials وML Workflow وNeural Networks وAI Ethics، مع خطوات واختبارات.","إدارة النتائج من خلال ملفات controller/model للحفظ والتعديل والحذف."]},
      lessons:{en:["PHP sessions are a lightweight fit for per-learner progress when login is not required.","Keeping quiz data in one object makes the vanilla JS flow easier to reason about.","Prepared statements and validation matter even in a small academic admin panel."],ar:["جلسات PHP مناسبة لتقدم المتعلم عندما لا يوجد تسجيل دخول.","وضع بيانات الاختبارات في كائن واحد يجعل تدفق JavaScript أوضح.","الاستعلامات المحضرة والتحقق من المدخلات مهمان حتى في لوحة أكاديمية صغيرة."]},
      preview:"ailearn-real"
    },
    bugblaster: {
      sourceFiles:["react co/react-bug-blaster-main/src/App.js","src/components/TicketForm.js","src/components/TicketList.js","src/components/TicketItem.js","src/reducers/ticketReducer.js","src/utilities/sortingUtilities.js","src/styles.css"],
      howWorks:{en:"App.js initializes useReducer with tickets, editingTicket, and sortPreference. TicketForm dispatches ADD_TICKET or UPDATE_TICKET. TicketItem dispatches DELETE_TICKET and SET_EDITING_TICKET. The results section appears only when tickets exist and sorts with sortTickets by High to Low or Low to High.",ar:"App.js يبدأ useReducer بحالات tickets وeditingTicket وsortPreference. TicketForm يرسل ADD_TICKET أو UPDATE_TICKET. TicketItem يرسل DELETE_TICKET وSET_EDITING_TICKET. قسم النتائج يظهر فقط عند وجود تذاكر ويرتب عبر sortTickets من الأعلى للأقل أو العكس."},
      architecture:{en:["Create React App project.","Reducer centralizes ticket, edit, delete, clear-edit, and sorting actions.","Sorting is extracted into a pure utility function."],ar:["مشروع Create React App.","Reducer مركزي لإضافة وتعديل وحذف ومسح التعديل وترتيب التذاكر.","الترتيب مفصول في دالة نقية مستقلة."]},
      screens:{en:["Main page with Bug Blaster heading, ticket form, title input, description textarea, priority radio group, and submit button.","Results section with All Tickets, sorting dropdown, ticket cards, priority dot, Delete, and Edit buttons."],ar:["صفحة رئيسية فيها عنوان Bug Blaster، نموذج تذكرة، حقل عنوان، وصف، مجموعة أولوية، وزر Submit.","قسم نتائج فيه All Tickets، قائمة ترتيب، بطاقات تذاكر، نقطة أولوية، وأزرار Delete وEdit."]},
      lessons:{en:["Related state is clearer in a reducer once add/edit/delete/sort actions start interacting.","A small pure sorting utility keeps component rendering focused on UI."],ar:["الحالة المترابطة تصبح أوضح في reducer عندما تتداخل إجراءات الإضافة والتعديل والحذف والترتيب.","دالة ترتيب نقية صغيرة تبقي المكوّن مركزًا على الواجهة."]},
      preview:"bug-real"
    },
    moviedux: {
      sourceFiles:["react co/react-moviedux-main/src/App.js","src/components/Header.js","src/components/MoviesGrid.js","src/components/MovieCard.js","src/components/Watchlist.js","src/styles.css","public/movies.json","public/images/*.jpg"],
      howWorks:{en:"App.js fetches public/movies.json on mount, stores movies and watchlist in state, and routes between Home and Watchlist. MoviesGrid filters by search text, genre, and rating. MovieCard displays an image from public/images and toggles a checkbox-style watchlist switch.",ar:"App.js يجلب public/movies.json عند التحميل، ويحفظ الأفلام وقائمة المشاهدة في الحالة، ويوجه بين Home وWatchlist. MoviesGrid يفلتر حسب البحث والنوع والتقييم. MovieCard يعرض صورة من public/images ويبدل مفتاح قائمة المشاهدة."},
      architecture:{en:["Create React App with React Router.","Top-level state stores movies and selected watchlist IDs.","Filtering logic lives in MoviesGrid; display/toggle UI lives in MovieCard."],ar:["Create React App مع React Router.","الحالة الرئيسية تحفظ الأفلام ومعرّفات قائمة المشاهدة.","منطق الفلترة داخل MoviesGrid وواجهة العرض/التبديل داخل MovieCard."]},
      screens:{en:["Header with project logo, Home and Watchlist nav links.","Movie grid with search input, Genre dropdown, Rating dropdown, cards, rating color classes, and watchlist switch.","Watchlist route that renders only selected movie cards."],ar:["رأس فيه شعار المشروع وروابط Home وWatchlist.","شبكة أفلام مع حقل بحث وقائمة Genre وقائمة Rating وبطاقات وتصنيفات ملونة ومفتاح watchlist.","مسار Watchlist يعرض الأفلام المختارة فقط."]},
      lessons:{en:["Lifting watchlist state to App keeps the Home and Watchlist routes synchronized.","Local JSON is enough to practice fetch-driven UI without a backend."],ar:["رفع حالة watchlist إلى App يحافظ على تزامن Home وWatchlist.","JSON محلي يكفي للتمرّن على واجهة تعتمد على fetch بدون خلفية."]},
      preview:"movie-real"
    },
    training: {
      sourceFiles:["تدريب/مهام/task#!/task#1/Index.html","task#!/task#1/style.css","task-2/index.html","task-2/script.js","task and exam/exam/index.html","task and exam/exam/script.js","Task-5/index.html","Task-5/js/script.js"],
      howWorks:{en:"This is a collection of standalone HTML/CSS/JS exercises. The verified files include a first static website, a video gallery with search filtering, a welcome screen hidden after a timeout, and Task 5 sections for grid/list view, share links, cards, product card, and a to-do list.",ar:"هذه مجموعة تمارين HTML/CSS/JS مستقلة. الملفات المؤكدة تشمل أول موقع ثابت، معرض فيديو مع فلترة بحث، شاشة ترحيب تختفي بعد مؤقت، وTask 5 بأقسام عرض شبكة/قائمة وروابط مشاركة وبطاقات وبطاقة منتج وقائمة مهام."},
      architecture:{en:["Plain HTML files with linked CSS and JavaScript.","Each task is standalone rather than one combined application.","Interactivity is DOM-based: search filtering, timeout hiding, view switching, sharing links, cart/todo actions."],ar:["ملفات HTML عادية مرتبطة بـ CSS وJavaScript.","كل مهمة مستقلة وليست تطبيقًا واحدًا.","التفاعل مبني على DOM: فلترة البحث، الإخفاء بالمؤقت، تبديل العرض، روابط المشاركة، وإجراءات السلة/المهام."]},
      screens:{en:["My First Website: header, Home/About/Contact nav, centered welcome card, Learn More button, footer.","Video Gallery: hero, video search input, video cards using Source/1.mp4 and Source/1.png, no-results message.","Welcome task: loading welcome page that hides after 3 seconds, header/nav, hero, footer.","Task 5: grid/list items, team cards, social share links, neumorphism cards, product card, and to-do list."],ar:["My First Website: رأس، تنقل Home/About/Contact، بطاقة ترحيب وسطية، زر Learn More، وتذييل.","Video Gallery: بطل، حقل بحث فيديو، بطاقات فيديو تستخدم Source/1.mp4 وSource/1.png، ورسالة عدم وجود نتائج.","مهمة الترحيب: صفحة تحميل تختفي بعد ٣ ثوانٍ، رأس وتنقل وبطل وتذييل.","Task 5: عناصر شبكة/قائمة، بطاقات فريق، روابط مشاركة، بطاقات نيومورفيزم، بطاقة منتج، وقائمة مهام."]},
      lessons:{en:["Small exercises are useful when presented as practice scope, not as full products.","DOM tasks made the basics visible: selecting elements, filtering lists, timers, event handlers, and updating the page."],ar:["التمارين الصغيرة مفيدة عندما تُعرض كنطاق تدريب وليس كمنتجات كاملة.","مهام DOM وضحت الأساسيات: اختيار العناصر، فلترة القوائم، المؤقتات، معالجات الأحداث، وتحديث الصفحة."]},
      preview:"training-real"
    },
    ministore: {
      howWorks:{en:"The storefront loads a category tree into a sidebar and lets a shopper search or browse into a category. Adding an item posts to a PHP cart/session handler, and the cart page reads that session to render line items, a live subtotal, and a shipping estimator keyed by the selected country.",ar:"يحمّل المتجر شجرة الفئات في شريط جانبي ويتيح للمتسوق البحث أو التصفح داخل فئة. إضافة عنصر ترسل طلبًا لمعالج سلة/جلسة بلغة PHP، وصفحة السلة تقرأ من تلك الجلسة لعرض العناصر ومجموع فرعي مباشر وأداة تقدير شحن حسب الدولة المختارة."},
      architecture:{en:["PHP pages for the catalog, category browsing, and cart, backed by a MySQL products/categories schema.","Session-based cart state so quantity changes and removals update the subtotal without a full page reload.","A shipping-estimate lookup keyed by the selected country."],ar:["صفحات PHP للكتالوج وتصفح الفئات والسلة، مدعومة بمخطط منتجات/فئات في MySQL.","حالة سلة قائمة على الجلسة (session) بحيث تحديث الكمية أو الحذف يحدّث المجموع الفرعي بدون إعادة تحميل الصفحة بالكامل.","أداة تقدير شحن مرتبطة بالدولة المختارة."]},
      screens:{en:["Homepage: a categories sidebar (Bags, Dresses, Fashion, Kids, Skirts, Suits & Blazers, Women, Men's, Ez-Pages), a search bar, two promotional banners (Summer 2019 New Arrivals, Trending), and a grid of category tiles below.","Cart page: top navigation with a categories dropdown, a shopping-cart-contents panel, a totals bar (items, weight, amount), a line-item row with quantity controls and update/remove actions, a subtotal, and a shipping-cost estimator by country."],ar:["الصفحة الرئيسية: شريط جانبي للفئات (Bags، Dresses، Fashion، Kids، Skirts، Suits & Blazers، Women، Men's، Ez-Pages)، حقل بحث، بانرين ترويجيين (Summer 2019 New Arrivals، Trending)، وشبكة فئات مصغّرة بالأسفل.","صفحة السلة: تنقل علوي فيه قائمة فئات منسدلة، لوحة محتويات السلة، شريط إجماليات (عدد العناصر، الوزن، المبلغ)، صف عنصر بتحكم بالكمية وإجراءات تحديث/حذف، مجموع فرعي، وأداة تقدير شحن حسب الدولة."]},
      lessons:{en:["A clear category sidebar plus search covers most product discovery without heavier filtering UI.","Keeping cart totals in sync — line total, subtotal, shipping — matters more to a shopper's trust than visual polish.","Manual transaction testing before launch catches integration issues that unit tests alone tend to miss."],ar:["شريط فئات واضح مع بحث يغطي معظم احتياجات تصفح المنتجات بدون واجهة فلترة أثقل.","تزامن إجماليات السلة — سعر السطر، المجموع الفرعي، الشحن — أهم لثقة المتسوق من الشكل البصري.","اختبار المعاملات يدويًا قبل الإطلاق يكشف مشاكل تكامل غالبًا ما تفوتها اختبارات الوحدة وحدها."]},
      preview:"ministore-real"
    }
  };

PROJECTS_BASE.forEach((project) => Object.assign(project, updates[project.id] || {}));

export const PROJECTS = PROJECTS_BASE;
