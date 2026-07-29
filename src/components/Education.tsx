import { GraduationCap, ShieldCheck, Search, Brain, Lightbulb, Globe, Shield, BookOpen } from "lucide-react";

const competencies = [
  { icon: <ShieldCheck size={14} />, label: "Diplomacy", desc: "Strategic negotiation & cultural mediation." },
  { icon: <Search size={14} />, label: "Research", desc: "Data-backed qualitative & quantitative analysis." },
  { icon: <Brain size={14} />, label: "Critical Thinking", desc: "Deconstructing complex social systems." },
  { icon: <Lightbulb size={14} />, label: "Entrepreneurship", desc: "Venture building & opportunity identification." },
  { icon: <Globe size={14} />, label: "Geopolitics", desc: "International systems & ecosystem dynamics." },
  { icon: <BookOpen size={14} />, label: "Psychology", desc: "Community motivation & behavioral design." },
];

const courses = [
  "Elements of Diplomacy & Strategic Studies",
  "International Political Systems",
  "History of Science & Technology",
  "Research Methods & Statistics",
  "Entrepreneurship Skills",
  "Developmental Psychology",
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[#F9F6F2]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[#5B2BFF] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-[-0.04em] uppercase leading-none">
              Education<span className="text-[#5B2BFF]">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* Main Degree Card - UPDATED with transparency */}
          <div className="md:col-span-8 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-10 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5B2BFF]/30 to-transparent" />

            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-12 bg-[#5B2BFF]/10 border border-[#5B2BFF]/20 rounded-2xl flex items-center justify-center text-[#5B2BFF] group-hover:bg-[#5B2BFF]/20 transition-colors shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                  History &amp; Education
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-bold mt-1">
                  University of Ilorin · Bachelor of Arts (Ed.)
                </p>
                <p className="text-gray-300 font-mono text-xs mt-1">2018 — 2023</p>
              </div>
            </div>

            {/* Competencies grid - keeping these solid for readability */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {competencies.map((c, i) => (
                <div key={i} className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-xl p-3.5 transition-all">
                  <div className="flex items-center gap-2 text-[#5B2BFF] mb-1.5">
                    {c.icon}
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-700">{c.label}</span>
                  </div>
                  <p className="text-[9px] text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-3">

            {/* Relevant Courses - already had transparency with bg-[#5B2BFF]/5 */}
            <div className="flex-1 bg-[#5B2BFF]/5 backdrop-blur-sm border border-[#5B2BFF]/20 hover:border-[#5B2BFF]/40 rounded-[1.75rem] p-7 transition-all">
              <p className="text-[9px] font-black text-[#5B2BFF] uppercase tracking-[0.35em] mb-5">
                Relevant Courses
              </p>
              <ul className="flex flex-col gap-2.5">
                {courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#5B2BFF] mt-1.5 shrink-0" />
                    <span className="text-[10px] text-gray-500 font-medium leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NYSC Card - UPDATED with transparency */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-6 transition-all group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 bg-[#5B2BFF]/10 border border-[#5B2BFF]/20 rounded-xl flex items-center justify-center text-[#5B2BFF] group-hover:bg-[#5B2BFF]/20 transition-colors">
                  <Shield size={16} />
                </div>
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest font-mono">2023 — 2024</span>
              </div>
              <p className="text-[9px] font-black text-[#5B2BFF] uppercase tracking-[0.3em] mb-1">National Service</p>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">
                NYSC · Paramilitary
              </h4>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                One year national service as a paramilitary officer — building discipline, command structure, and team coordination under high-pressure conditions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;