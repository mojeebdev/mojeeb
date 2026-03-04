import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Read Before It’s Too Late: The 2026 Creator Systems",
      desc: "Talent isn't enough anymore. Exploring the Top 5 Creator Packs required to survive the 2026 barrier to entry.",
      link: "https://x.com/BlindspotLab/status/2009497216109695467?s=20",
      span: "md:col-span-2", 
      tag: "Strategy"
    },
    {
      title: "The Subtle Act of Not Giving a Fvck",
      desc: "Foundations of community building through Emotional Intelligence.",
      link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
      span: "md:col-span-1",
      tag: "Community"
    },
    {
      title: "The 2026 Product Blueprint",
      desc: "Strategic deep dive into the next wave of integrated ecosystem design.",
      link: "https:/x.com/BlindspotLab/status/2009997538267435511?s=20",
      span: "md:col-span-1",
      tag: "Research"
    },
    {
      title: "9k Followers & The Mistake After",
      desc: "Growth campaign deconstruction: what reshaped my strategy.",
      link: "https:/x.com/BlindspotLab/status/1971794428789461365",
      span: "md:col-span-1",
      tag: "Case Study"
    },
    {
      title: "Growth Hack: FEEDBACK",
      desc: "Turn raw input into a growth engine for your protocol.",
      link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
      span: "md:col-span-1",
      tag: "Growth"
    }
  ];

  return (
    <section id="blog" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-left">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">Intelligence Feed</span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Featured Posts.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <a 
              key={i} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`glass-card p-8 group hover:border-primary/50 transition-all flex flex-col justify-between ${post.span}`}
            >
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{post.tag}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

