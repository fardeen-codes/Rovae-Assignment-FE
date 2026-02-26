import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => (
  <>
    <AnnouncementBar />
    <Header />
    <main className="bg-background min-h-screen">
      <div className="container py-20 md:py-32 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-display text-foreground mb-8">About SNIKEI</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          SNIKEI is a premium footwear brand dedicated to crafting timeless, high-quality shoes that blend modern aesthetics with traditional craftsmanship. Founded with a passion for detail, every pair is designed to elevate your everyday style.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our mission is to provide footwear that looks exceptional, feels comfortable, and lasts for years. We source the finest materials and work with skilled artisans to deliver products that exceed expectations.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From casual sneakers to refined oxfords, SNIKEI has something for every occasion. Join thousands of satisfied customers who trust us for their footwear needs.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
