import { I18N } from './i18n';

/* Current language for case-study rendering. Set via setCaseStudyLang()
   before building modal content — mirrors the original app's global
   state.lang without threading a lang argument through every helper. */
let lang = "en";
export function setCaseStudyLang(l){ lang = l; }

function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
function loc(field){ return lang === "ar" && field && field.ar !== undefined ? field.ar : (field ? field.en : ""); }
export { t, loc };

function firstTechs(p){
  const all = Object.values(p.stack||{}).flat();
  return all.slice(0,5);
}

function stackGroupsHtml(p){
  return `<div class="stack-groups">${Object.entries(p.stack||{}).map(([group, items])=>`
    <div class="stack-group">
      <h5 class="mono">${group}</h5>
      <div class="stack-chips">${items.map(i=>`<span class="pc-tag">${i}</span>`).join("")}</div>
    </div>
  `).join("")}</div>`;
}

function listHtml(arr){
  return `<ul class="ms-list">${(arr||[]).map(i=>`<li>${i}</li>`).join("")}</ul>`;
}

function escapeCode(str){
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function codeHtml(p){
  if(!p.code) return "";
  const escaped = escapeCode(p.code);
  return `<div class="ms-block">
    <h4>${t("sec.code")}</h4>
    <div class="code-box">
      <div class="code-box-head">
        <span>${p.codeFile}</span>
        <button class="code-copy" data-copy-id="${p.id}">${t("copy")}</button>
      </div>
      <pre><code id="codeblock-${p.id}">${escaped}</code></pre>
    </div>
  </div>`;
}

function section(key, html){ return html ? `<div class="ms-block"><h4>${t(key)}</h4>${html}</div>` : ""; }
  function para(field){ return field ? `<p>${loc(field)}</p>` : ""; }
  function sourceHtml(p){ return p.sourceFiles ? `<div class="source-trail">${p.sourceFiles.map(f=>`<code>${f}</code>`).join("")}</div>` : ""; }
  function screensHtml(p){ return p.screens ? listHtml(loc(p.screens)) : ""; }

const tabNames = {
    "muen-real":["Landing","Emergency","Services"],
    "vital-real":["Landing","Patient","Waiting"],
    "academia-real":["Landing","Scheduler","Dashboard"],
    "ailearn-real":["Landing","Module","Quiz"],
    "bug-real":["Form","Tickets"],
    "movie-real":["Browse","Watchlist"],
    "training-real":["Static","Video","Task 5"],
    "ministore-real":["Home","Cart"]
  };

function demoHtml(p){
  if(!p.preview) return "";
  const tabs = tabNames[p.preview] || ["Preview"];
  return section("sec.realpreview", `
    <div class="preview-tabs">${tabs.map((name,i)=>`<button class="preview-tab ${i===0?"active":""}" data-preview-tab="${i}">${name}</button>`).join("")}</div>
    <div class="preview-frame">${renderPreview(p.preview)}</div>
  `);
}

function renderPreview(type){
    if(type==="muen-real") return `
      <div class="source-preview active"><div class="academia"><div class="acad-hero"><div class="ai-badge">Smart medical support platform</div><div class="acad-title">Healthcare support, faster and easier for everyone.</div><p>Mu'en connects patients with doctors, nurses, volunteers, emergency support, nearby hospitals, and online consultations through one clean responsive platform.</p><div class="case-meta"><span class="pc-tag">24/7 Emergency flow</span><span class="pc-tag">6+ Care services</span><span class="pc-tag">100% Responsive UI</span></div></div><div class="acad-grid"><div class="acad-card"><b>Emergency ready</b><p>Quick request flow with location and status updates.</p></div><div class="acad-card"><b>Human care</b><p>Doctors, nurses, volunteers, and patients connected clearly.</p></div><div class="acad-card"><b>One dashboard</b><p>Appointments, records, payments, and requests in one place.</p></div></div></div></div>
      <div class="source-preview"><div class="phone-app"><div class="phone-main"><div style="text-align:center;margin-bottom:20px"><div class="service-ico" style="margin:auto;background:#fee2e2;color:#dc2626">!</div><h2>Emergency Request</h2><p>Share your location and send the request</p></div><div class="app-card"><label>Location</label><input class="bug-input" value="Live GPS ready" readonly><p style="font-size:12px;color:#64748b">Keep this screen open after sending so responders can follow your live GPS.</p><div class="app-card" style="background:#f8fafc;margin-top:12px">Preview your live map<br><small>This is the map responders will see after you send the request.</small></div><button class="pill-btn" style="width:100%;margin-top:14px">Send Emergency Help Request</button></div></div></div></div>
      <div class="source-preview"><div class="phone-app"><div class="phone-main"><h2>Patient Services</h2>${["Request a Nurse","Volunteer Requests","My Appointments","Medicine Reminder","Nearby Hospitals","Health Records"].map((s,i)=>`<div class="service-row"><div class="service-ico">${i+1}</div><div><b>${s}</b><p>${["Book a home-care visit","Ask for volunteer help","See doctor responses","Set medication reminders","Find nearby hospitals","View and manage records"][i]}</p></div></div>`).join("")}</div></div></div>`;
    if(type==="vital-real") return `
      <div class="source-preview active"><div class="phone-app"><div class="phone-head"><div class="phone-logo"><span class="phone-logo-mark">+</span>مُعين</div><button class="outline-btn">sign in</button></div><div class="phone-main"><p style="text-align:center;color:#64748b">Connecting patients with doctors, nurses and volunteers for fast emergency medical help.</p><div class="role-grid">${["For Patients","For Doctors","For Nurses","For Volunteers"].map((r,i)=>`<div class="role-card"><h5>${r}</h5><p>${["Get immediate medical help","Respond to emergencies","Support doctors and care","Help your community"][i]}</p><ul><li>${["One-tap emergency HELP button","Receive emergency alerts","Provide follow-up care","Assist elderly or disabled users"][i]}</li></ul></div>`).join("")}</div><div style="text-align:center;margin-top:18px"><button class="pill-btn">sign up -></button> <button class="outline-btn">sign in</button></div></div></div></div>
      <div class="source-preview"><div class="phone-app"><div class="phone-head"><div class="phone-logo"><span class="phone-logo-mark">+</span>مُعين</div><span>user</span></div><div class="phone-main"><h1>Hello, user</h1><p>How can we help you today?</p><button class="help-btn"><b style="font-size:26px">HELP!</b><br><span>Tap here for immediate emergency help</span></button><div class="service-row"><div class="service-ico">🤝</div><b>other services</b></div><div class="service-row"><div class="service-ico">U</div><b>My profile</b></div></div></div></div>
      <div class="source-preview"><div class="phone-app"><div class="phone-main"><div class="status-card"><div style="font-size:38px">⏳</div><p>Request ID: #demo-c</p><span class="status-pill">PENDING</span></div><div class="app-card" style="margin-top:14px"><p><b>Patient</b><span style="float:right">USER</span></p><p><b>Type</b><span style="float:right">Emergency</span></p><p><b>Location</b><span style="float:right">Current GPS</span></p></div><div class="app-card" style="margin-top:14px"><b>Status Update:</b><p>We have alerted nearby medical professionals. Please stay on this screen.</p></div><button style="width:100%;background:#ef4444;color:white;border:0;border-radius:12px;padding:12px">Cancel x</button></div></div></div>`;
    if(type==="academia-real") return `
      <div class="source-preview active"><div class="academia"><div class="acad-hero"><div class="acad-title">Maximize Your Academic Success</div><p>Plan your courses, manage tasks, and collaborate with classmates.</p><button class="pill-btn">Get Started</button> <button class="outline-btn">Try Course Scheduler</button></div><div class="acad-grid">${["Smart Scheduling","Task Management","Study Groups","Course Materials","Time Analytics","And More"].map(x=>`<div class="acad-card"><b>${x}</b><p>${x==="Task Management"?"Stay on top of assignments, readings, and exams.":"Feature card from LandingPage.tsx."}</p></div>`).join("")}</div></div></div>
      <div class="source-preview"><div class="academia"><h2>Course Scheduler</h2><p>Specify your available days and times, and we'll suggest optimized course schedules for you.</p><div class="app-card"><b>Set Your Preferences</b><div class="case-meta">${["Sunday","Tuesday","Thursday"].map(d=>`<span class="day-chip">${d}</span>`).join("")}</div><div class="course-row"><b>CS 101</b><span>Introduction to Computer Science</span><span>15 seats</span></div><div class="course-row"><b>MATH 241</b><span>Calculus III</span><span>23 seats</span></div><button class="pill-btn">Generate Schedules</button></div></div></div>
      <div class="source-preview"><div class="academia"><div class="acad-grid">${["Introduction to Computer Science","Data Structures and Algorithms","Web Development with React","Mobile App Development with React Native"].map((c,i)=>`<div class="acad-card"><b>${c}</b><p>Instructor: ${["Dr. Smith","Prof. Johnson","Mr. Williams","Mrs. Davis"][i]}</p><div style="height:8px;background:#e5e7eb;border-radius:999px"><div style="height:8px;width:${[60,30,80,15][i]}%;background:#2563eb;border-radius:999px"></div></div></div>`).join("")}</div></div></div>`;
    if(type==="ailearn-real") return `
      <div class="source-preview active"><div class="ailearn"><div class="ai-hero"><div class="ai-badge">Now Live - 4 New AI Modules Added</div><div class="ai-title">Learn AI Basics<br><span>The Smart Way</span></div><p>An interactive platform that makes artificial intelligence simple, engaging, and genuinely fun.</p><div class="ai-form"><input placeholder="Your name to get started..."><button>Start Learning -></button></div></div></div></div>
      <div class="source-preview"><div class="module-preview"><h2>AI Essentials</h2><p>Before diving into complex neural networks, we build your vocabulary with key AI concepts.</p><div class="module-grid">${["Algorithm","Data Set","Inference","Model"].map(x=>`<div class="module-card"><b>${x}</b><p>Glossary card from module.php</p></div>`).join("")}</div></div></div>
      <div class="source-preview"><div class="module-preview"><h2>Module 2 Quiz</h2><p>What is the correct order of the ML pipeline stages?</p>${["Preprocessing -> Collection -> Training","Collection -> Preprocessing -> Training -> Evaluation -> Deployment","Training -> Collection -> Evaluation"].map((x,i)=>`<label class="module-card" style="display:block;margin:8px 0"><input type="radio" name="aiq"> ${x}</label>`).join("")}<button class="pill-btn">Submit Answers</button></div></div>`;
    if(type==="bug-real") return `
      <div class="source-preview active"><div class="bug-app"><div class="bug-box"><h1>Bug Blaster</h1><label>Title</label><input class="bug-input"><label>Description</label><textarea class="bug-input" style="min-height:100px"></textarea><fieldset class="priority-field"><legend>Priority</legend><label><input type="radio" checked> Low</label><label><input type="radio"> Medium</label><label><input type="radio"> High</label></fieldset><button class="blue-button">Submit</button></div></div></div>
      <div class="source-preview"><div class="bug-app"><div class="bug-box"><h2>All Tickets</h2><select class="bug-input"><option>High to Low</option><option>Low to High</option></select><div class="ticket-item"><span class="priority-dot-real"></span><h3>Login form error</h3><p>Example ticket previewing the real TicketItem layout.</p><button class="blue-button">Delete</button><button class="blue-button">Edit</button></div></div></div></div>`;
    if(type==="movie-real") return `
      <div class="source-preview active"><div class="movie-app"><div style="text-align:center;font-size:28px;font-weight:800">MovieDux</div><div class="movie-nav"><span>Home</span><span>Watchlist</span></div><input class="movie-search" placeholder="Search movies..."><div class="case-meta"><span class="pc-tag">Genre: Fantasy</span><span class="pc-tag">Rating: Good</span></div><div class="movie-grid">${["Dark Storm","Whisper of Fate","Lost in Shadows"].map((m,i)=>`<div class="movie-card-real"><div class="movie-poster">images/${i+1}.jpg</div><div class="movie-info"><b>${m}</b><div><span>${["drama","fantasy","action"][i]}</span><span class="movie-rating">${["8.3","7.7","9.3"][i]}</span></div><span class="watch-switch">Add to Watchlist</span></div></div>`).join("")}</div></div></div>
      <div class="source-preview"><div class="movie-app"><h2 style="text-align:center">Your Watchlist</h2><div class="movie-grid"><div class="movie-card-real"><div class="movie-poster">images/4.jpg</div><div class="movie-info"><b>Lost in Shadows</b><div><span>action</span><span class="movie-rating">9.3</span></div><span class="watch-switch on">In Watchlist</span></div></div></div></div></div>`;
    if(type==="training-real") return `
      <div class="source-preview active"><div class="training-preview"><div class="training-header"><h2>My First Website</h2><div class="training-nav"><span>Home</span><span>About</span><span>Contact</span></div></div><div class="training-card"><h2>Welcome!</h2><p>This is a simple website project using HTML and CSS.</p><button class="blue-button" style="background:#222">Learn More</button></div><div class="training-header">My First Website</div></div></div>
      <div class="source-preview"><div class="training-preview"><div class="training-header"><h2>Video Gallery</h2></div><div class="training-card"><input class="bug-input" placeholder="Search videos by title..."><div class="video-grid-mini">${[1,2,3,4].map(n=>`<div class="video-card-mini"><div class="video-thumb">Source/1.mp4</div><div style="padding:10px"><b>${n}</b><br><small>MP4</small></div></div>`).join("")}</div></div></div></div>
      <div class="source-preview"><div class="training-preview"><div class="training-header"><h2>Task 5</h2><div class="training-nav"><span>Views</span><span>Team</span><span>Share</span><span>To-do</span></div></div><div class="training-card"><h2>Grid and List View</h2><button class="blue-button">Grid</button><button class="blue-button">List</button><div class="acad-grid"><div class="acad-card">Web Design</div><div class="acad-card">Mobile App</div><div class="acad-card">Dashboard</div><div class="acad-card">Online Store</div></div></div></div></div>`;
    if(type==="ministore-real") return `
      <div class="source-preview active"><div class="msshop">
        <div style="display:flex;gap:14px;padding:16px;flex-wrap:wrap">
          <div style="width:150px;flex:none;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;background:#fff">
            <div style="background:#2f6bff;color:#fff;font-weight:700;font-size:11px;padding:10px 12px">CATEGORIES</div>
            <div style="font-size:11.5px;color:#374151">${["Bags","Dresses","Fashion","Kids","Skirts","Suits & Blazers","Women","Men's","Ez-Pages"].map((c,i)=>`<div style="padding:9px 12px;border-bottom:1px solid #eee;display:flex;justify-content:space-between">${c}${i>=6?"<span>›</span>":""}</div>`).join("")}</div>
          </div>
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:10px">
            <div style="border:1px solid #e5e7eb;border-radius:6px;padding:9px 12px;font-size:11.5px;color:#94a3b8">🔍 Search entire store here..</div>
            <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:10px">
              <div style="background:#f1f3f5;border-radius:6px;padding:16px;min-height:120px">
                <div style="font-size:10px;letter-spacing:.08em;color:#334155">SUMMER 2019</div>
                <div style="font-size:20px;font-weight:800;margin:4px 0 12px;color:#0f172a">NEW ARRIVALS</div>
                <span style="display:inline-block;background:#2f6bff;color:#fff;border-radius:4px;padding:8px 14px;font-size:11px;font-weight:700">DISCOVER NOW</span>
              </div>
              <div style="background:#f7d94c;border-radius:6px;padding:16px;min-height:120px;position:relative">
                <div style="position:absolute;bottom:12px;left:12px;right:12px;background:#fffc;padding:8px 10px;font-size:10.5px;font-weight:700;color:#0f172a">TOP VIEW THIS WEEK<br>TRENDING</div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px">${["Women","Men","Accessories","Shoes","New Arrivals"].map(c=>`<div style="background:#e2e8f0;border-radius:4px;min-height:54px;display:flex;align-items:flex-end;padding:8px;font-size:11px;font-weight:700;color:#1f2937">${c}</div>`).join("")}</div>
          </div>
        </div>
      </div></div>
      <div class="source-preview"><div class="msshop">
        <div style="display:flex;gap:16px;padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:11.5px;color:#374151;flex-wrap:wrap;align-items:center">
          <span style="background:#2f6bff;color:#fff;border-radius:4px;padding:6px 10px;font-weight:700">CATEGORIES ▾</span>
          <span>Home</span><span style="color:#2f6bff;font-weight:700">Layouts</span><span>About Us</span><span>All Products</span>
        </div>
        <div style="padding:16px">
          <div style="font-weight:800;font-size:15px;margin-bottom:12px">YOUR SHOPPING CART CONTENTS</div>
          <div style="background:#f1f5f9;border-radius:6px;padding:12px 14px;font-size:11px;color:#64748b;margin-bottom:12px">Review your item below, then continue to checkout when you're ready.</div>
          <div style="background:#cfe4fb;border-radius:6px;padding:10px 14px;font-size:12px;font-weight:700;color:#0f172a;margin-bottom:12px">Total Items: 1&nbsp;&nbsp;Weight: 0 lbs&nbsp;&nbsp;Amount: $250.00</div>
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:12.5px;flex-wrap:wrap">
            <div style="width:44px;height:44px;background:#e2e8f0;border-radius:4px;flex:none"></div>
            <div style="flex:1;min-width:120px">Aenean nisl lacus passages</div>
            <div style="width:64px">$250.00</div>
            <div style="border:1px solid #e5e7eb;border-radius:4px;padding:4px 10px;font-size:12px">1</div>
            <div style="width:64px;text-align:right;font-weight:700">$250.00</div>
          </div>
          <div style="text-align:right;font-weight:800;padding:14px 0">SUB-TOTAL: $250.00</div>
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px">
            <span style="border:1px solid #2f6bff;color:#2f6bff;border-radius:4px;padding:9px 14px;font-size:11.5px;font-weight:700">← CONTINUE SHOPPING</span>
            <span style="display:flex;gap:8px;flex-wrap:wrap">
              <span style="border:1px solid #e5e7eb;border-radius:4px;padding:9px 14px;font-size:11.5px;font-weight:700">UPDATE</span>
              <span style="background:#2f6bff;color:#fff;border-radius:4px;padding:9px 14px;font-size:11.5px;font-weight:700">PROCEED TO CHECKOUT</span>
            </span>
          </div>
        </div>
      </div></div>`;
    return "";
  }

export function buildModalHtml(p){
  return `
      <div class="case-hero" style="--cat-color:${p.catColor}">
        <h2>${loc({en:p.title,ar:p.title_ar})}</h2>
        <p class="modal-sub">${loc(p.oneLiner)}</p>
        <div class="status-line"><span>${t("type.label")}: <b>${loc(p.type)}</b></span><span>${t("status.label")}: <b>${loc(p.status)}</b></span></div>
      </div>
      ${demoHtml(p)}
      ${section("sec.what", para(p.overview))}
      ${p.arabic ? `<div class="ms-block ar-block"><h4>${t("sec.arabic")}</h4><p>${p.arabic}</p></div>` : ""}
      ${section("sec.problem", para(p.problem))}
      ${section("sec.solution", para(p.solution))}
      ${section("sec.features", p.features ? listHtml(loc(p.features)) : "")}
      ${section("sec.how", para(p.howWorks))}
      ${section("sec.mywork", para(p.myWork))}
      ${section("sec.stack", p.stack ? stackGroupsHtml(p) : "")}
      ${section("sec.architecture", p.architecture ? listHtml(loc(p.architecture)) : "")}
      ${section("sec.highlights", p.highlights ? listHtml(loc(p.highlights)) : "")}
      ${section("sec.screens", screensHtml(p))}
      ${section("sec.lessons", p.lessons ? listHtml(loc(p.lessons)) : "")}
      ${codeHtml(p)}
    `;
}
