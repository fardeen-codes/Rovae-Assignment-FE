import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Moon, Sun, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const navLinks = [
  { label: "Categories", href: "/products" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const { cartCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="text-2xl font-display tracking-tight text-foreground" aria-label="SNIKEI Home">
          SNIKEI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/products" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Search products">
            <Search size={20} />
          </Link>
          <Link to="/" className="relative p-2 rounded-full hover:bg-secondary transition-colors" aria-label={`Cart with ${cartCount} items`}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="hidden md:flex p-2 rounded-full hover:bg-secondary transition-colors" aria-label="User account">
            <User size={20} />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background py-4 px-4 space-y-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-base font-medium text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
