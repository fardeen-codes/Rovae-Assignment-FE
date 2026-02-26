import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Harper Jackson",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg",
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697d0c6439129efa3a1_d0b5175a471ff8d16ea8c272dcd617a616f365d6.jpg",
    text: "I've never worn shoes this stylish that also feel like walking on clouds. The quality is top-notch, and I get compliments everywhere I go!",
    rating: 5,
  },
  {
    name: "Mason Jack",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68935d2912795d5a43a13801_Ellipse%202%20(1).png",
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697a855547004670bcf_263e7fc5d2420ad9299a110f78131c67a0b745b3.jpg",
    text: "Finding shoes that fit well is always a struggle for me. But here, the sizing guide was spot on and the shoes feel custom-made. Highly recommend!",
    rating: 5,
  },
  {
    name: "Avery Wyatt",
    avatar: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a09cad8bbd3e84a18dc902_6f59301a62fbf9bc224efbfdc89a3d0a2e0790a4.png",
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a09ff49bd5ca0f002e9160_testimonial-3.png",
    text: "I've never worn shoes this stylish that also feel like walking on clouds. The quality is top-notch, and I get compliments everywhere I go!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-10 text-foreground">What People Says</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="overflow-hidden border border-border">
            <img src={t.image} alt={`${t.name} testimonial`} className="w-full h-64 object-cover" loading="lazy" />
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-star text-star" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
