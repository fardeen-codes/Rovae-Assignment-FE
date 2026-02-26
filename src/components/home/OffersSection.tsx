const offers = [
  {
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65381608ffd59aca70_Offer-Frame-one.png",
    label: "Weekend Offer",
    discount: "20% OFF!",
    desc: "Summit Sneakers! Hottest Deals Of The Month",
  },
  {
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65aacca81a46e142c0_Offer-Frame-two.png",
    label: "Weekend Offer",
    discount: "15% OFF!",
    desc: "TurboTrainers! Grab The Latest Shoes",
  },
  {
    image: "https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65b2cc4aa2b920c790_Offer-Frame-three.png",
    label: "Weekend Offer",
    discount: "10% OFF!",
    desc: "Refined Classics! Imported From USA",
  },
];

const OffersSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, i) => (
          <div key={i} className="relative overflow-hidden min-h-[300px] flex items-end">
            <img
              src={offer.image}
              alt={offer.desc}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="relative z-10 p-6 text-white">
              <span className="text-xs font-medium uppercase tracking-wider opacity-80">{offer.label}</span>
              <h3 className="text-2xl font-display mt-1">{offer.discount}</h3>
              <p className="text-sm mt-1 opacity-90">{offer.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
