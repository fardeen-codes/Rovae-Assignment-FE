import { Recycle, Shield, Truck, Leaf } from "lucide-react";

const features = [
  { icon: Recycle, title: "Sustainable Materials", desc: "We believe great style shouldn't come at the planet's expense." },
  { icon: Shield, title: "Warranty Included", desc: "Every pair comes with a hassle-free 6-month warranty" },
  { icon: Truck, title: "Delivery & Shipping", desc: "Your shoes will be dispatched within 1–2 business days" },
  { icon: Leaf, title: "Eco-Friendly Fabrics", desc: "Crafted with sustainability in mind, our shoes feature eco-friendly fabrics" },
];

const FeaturesBar = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary">
              <f.icon size={24} className="text-foreground" />
            </div>
            <h3 className="font-bold text-base mb-2 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesBar;
