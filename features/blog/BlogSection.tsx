import SectionWrapper from "@/component/reusable/SectionWrapper";
import SectionHeader from "@/component/reusable/SectionHeader";
import Badge from "@/component/reusable/Badge";
import AmbientBackground from "@/component/reusable/AmbientBackground";
import BlogCard from "@/component/ui/BlogCard";

export default function BlogPage() {
  const blogPosts = [
    {
      image:
        "https://framerusercontent.com/images/mIe7TYwGkD9RQtqMyW9E5BHMaw.png?scale-down-to=512&width=2400&height=1260 512w,https://framerusercontent.com/images/mIe7TYwGkD9RQtqMyW9E5BHMaw.png?scale-down-to=1024&width=2400&height=1260 1024w,https://framerusercontent.com/images/mIe7TYwGkD9RQtqMyW9E5BHMaw.png?scale-down-to=2048&width=2400&height=1260 2048w,https://framerusercontent.com/images/mIe7TYwGkD9RQtqMyW9E5BHMaw.png?width=2400&height=1260 2400w",
      category: "ONLINE BUSINESS",
      date: "JUN 10, 2026",
      title:
        "Squarespace vs Framer: Which Should a Business Owner Actually Pick",
      link: "#",
    },
    {
      image:
        "https://framerusercontent.com/images/gHaNDkvJt4m9zwrrRCzQj2nU4M.png?scale-down-to=512&width=2400&height=1260 512w,https://framerusercontent.com/images/gHaNDkvJt4m9zwrrRCzQj2nU4M.png?scale-down-to=1024&width=2400&height=1260 1024w,https://framerusercontent.com/images/gHaNDkvJt4m9zwrrRCzQj2nU4M.png?scale-down-to=2048&width=2400&height=1260 2048w,https://framerusercontent.com/images/gHaNDkvJt4m9zwrrRCzQj2nU4M.png?width=2400&height=1260 2400w",
      category: "ONLINE BUSINESS",
      date: "JUN 5, 2026",
      title:
        "Webflow vs Framer: A Comparison for Business Owners (Not Designers)",
      link: "#",
    },
    {
      image:
        "https://framerusercontent.com/images/zlHvLMTXImXwdWtWwdZwYP8t8.png?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/zlHvLMTXImXwdWtWwdZwYP8t8.png?scale-down-to=1024&width=1920&height=1080 1024w,https://framerusercontent.com/images/zlHvLMTXImXwdWtWwdZwYP8t8.png?width=1920&height=1080 1920w",
      category: "SEO STRATEGY",
      date: "MAY 28, 2026",
      title: "How to Optimize Your Framer Site for Search Engines in 2026",
      link: "#",
    },
    {
      image:
        "https://framerusercontent.com/images/oBNkilYmA2O5zTy5uUYNW1BCT7E.png?scale-down-to=512&width=1200&height=630 512w,https://framerusercontent.com/images/oBNkilYmA2O5zTy5uUYNW1BCT7E.png?scale-down-to=1024&width=1200&height=630 1024w,https://framerusercontent.com/images/oBNkilYmA2O5zTy5uUYNW1BCT7E.png?width=1200&height=630 1200w",
      category: "CONVERSION",
      date: "MAY 15, 2026",
      title: "5 Landing Page Tweaks That Instantly Boost Your Conversion Rate",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <section className="relative w-full flex flex-col ">
        <AmbientBackground
          flip={false}
          fadeDirection="bottom"
          heightClass="h-[120vh]"
          positionClassName="top-0 left-0"
          scaleClass="scale-[1.5]"
        />

        <SectionWrapper className="relative z-10 w-full flex flex-col border-x border-[#212121]">
          <div className="flex flex-col items-center pt-[180px] pb-[80px] px-[40px] text-center gap-[32px]">
            <Badge
              text="BLOG"
              className="bg-[#1a1a1a] border border-white/5 text-gray-300"
            />

            <SectionHeader
              as="h1"
              align="center"
              titleClassName="text-5xl md:text-[5.5rem] font-serif leading-[1.1] text-white tracking-tight"
              title={"Where Framer\nmeets business"}
              description={
                "Weekly posts by the creator behind 2,000+ template sales."
              }
              className="max-w-3xl mx-auto mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#212121]">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                category={post.category}
                date={post.date}
                title={post.title}
                link={post.link}
              />
            ))}
          </div>
        </SectionWrapper>

        <div className="w-full border-b border-[#212121] relative z-10" />
      </section>
    </main>
  );
}
