import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import BedIcon from "../../assets/sellproperty/bed.png";
import BathIcon from "../../assets/sellproperty/bath.png";
import CarIcon from "../../assets/sellproperty/car.png";
import MeasureIcon from "../../assets/sellproperty/measure.png";

import Gallery1 from "../../assets/sellproperty/gallery1.png";
import Gallery2 from "../../assets/sellproperty/gallery2.png";
import Gallery3 from "../../assets/sellproperty/gallery3.png";

import Image1 from "../../assets/sellproperty/rightimg1.png";
import Image2 from "../../assets/sellproperty/rightimg2.png";
import Image3 from "../../assets/sellproperty/rightimg3.png";

import Container from "../Common/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SellProperties = () => {
  const bullets = useMemo(
    () => [
      "Live Music Concerts at Luviana",
      "Our SecretIsland Boat Tour is Just for You",
      "Live Music Concerts at Luviana",
      "Live Music Concerts at Luviana",
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "3", label: "Bedrooms", icon: BedIcon },
      { value: "2", label: "Bathrooms", icon: BathIcon },
      { value: "2", label: "Car parking", icon: CarIcon },
      { value: "3450", label: "Square Ft", icon: MeasureIcon },
    ],
    []
  );

  const thumbnails = useMemo(
    () => [
      { id: 1, image: Gallery1, sold: true },
      { id: 2, image: Gallery2, sold: false },
      { id: 3, image: Gallery3, sold: true },
    ],
    []
  );

  // production-ready: no alert, use state
  const [activeThumbId, setActiveThumbId] = useState(thumbnails[0]?.id ?? 1);

  const activeThumb = thumbnails.find((t) => t.id === activeThumbId);

  return (
    <section className="w-full bg-white py-[118px]">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-10 px-5 sm:px-0 lg:grid-cols-2 lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          {/* LEFT */}
          <motion.div className="space-y-6" variants={fadeUp}>
            {/* badge */}
            <div className="inline-flex rounded-full bg-[#FB5252]/10 px-7 py-1 text-[16px] font-bold text-[#FF5A3C] font-nunito">
              About Us
            </div>

            {/* title */}
            <h1 className="font-poppins text-[32px] font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-[44px]">
              Today Sells Properties
            </h1>

            {/* description */}
            <p className="max-w-lg font-nunito text-[16px] font-normal leading-6 text-[#5C727D]">
              Houzez allow you to design unlimited panels and real estate custom
              forms to capture leads and keep record of all information
            </p>

            {/* bullets */}
            <motion.ul className="space-y-3" variants={stagger}>
              {bullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center justify-start gap-3"
                >
                  <span className="h-[1px] w-[10px] shrink-0 bg-[#FB5252]/70" />
                  <span className="font-nunito text-[16px] font-bold leading-[1.1] text-[#0A2C3D]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              variants={stagger}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="space-y-1">
                  <div className="flex items-center gap-2 font-poppins text-[16px] font-semibold leading-[100%] text-[#0A2C3D]">
                    
                    <span>{s.value}</span>
                    <img
                      src={s.icon}
                      alt=""
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="font-nunito text-[14px] font-bold leading-[1.1] text-[#0A2C3D]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* thumbnails */}
            <motion.div className="flex flex-wrap gap-3 pt-2" variants={stagger}>
              {thumbnails.map((t) => {
                const isActive = t.id === activeThumbId;

                return (
                  <motion.button
                    key={t.id}
                    type="button"
                    variants={fadeUp}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveThumbId(t.id)}
                    className={[
                      "relative h-16 w-24 overflow-hidden border shadow-sm transition",
                      isActive
                        ? "border-[#FF5A3C] ring-2 ring-[#FF5A3C]/20"
                        : "border-slate-200 hover:border-slate-300",
                    ].join(" ")}
                    aria-label={`Select gallery image ${t.id}`}
                  >
                    <img
                      src={t.image}
                      alt={`Gallery thumbnail ${t.id}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />

                    {/* optional sold badge */}
                    {t.sold && (
                      <span className="absolute left-1 top-1 rounded bg-[#FF5A3C] px-2 py-[2px] text-[10px] font-bold text-white">
                        SOLD
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Optional: show active thumbnail preview text */}
            {activeThumb?.sold && (
              <div className="text-sm font-semibold text-[#FF5A3C]">
                This property is marked as SOLD.
              </div>
            )}
          </motion.div>

          {/* RIGHT: Image collage */}
          <motion.div
            variants={fadeUp}
            className="w-full"
            aria-label="Property image collage"
          >
            {/* Responsive collage */}
            <div className="grid grid-cols-2 gap-2">
              {/* big image */}
              <div className="col-span-2 overflow-hidden rounded-none lg:col-span-1 lg:row-span-2">
                <motion.img
                  key={activeThumbId} // smooth swap when thumbnail changes
                  src={Image1}
                  alt="Living room"
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[605px]"
                  loading="lazy"
                  initial={{ opacity: 0.4, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              {/* top right */}
              <div className="overflow-hidden">
                <motion.img
                  src={Image2}
                  alt="Interior"
                  className="h-[206px] w-full object-cover sm:h-[255px] lg:h-[300px]"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                />
              </div>

              {/* bottom right */}
              <div className="overflow-hidden">
                <motion.img
                  src={Image3}
                  alt="House exterior"
                  className="h-[206px] w-full object-cover sm:h-[255px] lg:h-[300px]"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SellProperties;
