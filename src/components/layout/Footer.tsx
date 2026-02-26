import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display mb-4">SNIKEI</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Discover premium footwear crafted with sustainable materials and timeless design.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "Shop", "Categories", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link to={item === "Shop" || item === "Categories" ? "/products" : "/"} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2.5">
            {["Sneakers", "Boots", "Formal", "Running", "Oxford", "Loafers"].map((item) => (
              <li key={item}>
                <Link to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Subscribe to get special offers and updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
              aria-label="Email for newsletter"
            />
            <button className="px-5 py-2.5 bg-primary-foreground text-primary text-sm font-semibold hover:bg-primary-foreground/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © 2026 SNIKEI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
