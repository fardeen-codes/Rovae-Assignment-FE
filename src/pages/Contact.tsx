import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => (
  <>
    <AnnouncementBar />
    <Header />
    <main className="bg-background min-h-screen">
      <div className="container py-20 md:py-32 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-display text-foreground mb-8">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-10">Have a question or feedback? We'd love to hear from you.</p>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input className="w-full border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input type="email" className="w-full border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea rows={5} className="w-full border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder="Your message..." />
          </div>
          <button type="submit" className="bg-foreground text-background px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
