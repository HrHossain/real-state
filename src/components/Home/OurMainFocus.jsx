import Container from "../Common/Container";
import { motion } from "framer-motion";
import Icon1 from '../../assets/Focus/icon1.png'
import Icon2 from '../../assets/Focus/icon2.png'
import Icon3 from '../../assets/Focus/icon3.png'
import Shape from '../../assets/banner/shape.png'
import FocusCard from "../Common/FocusCard";
const items = [
{
title: "Buy a home",
description:
"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
cta: "Find A Home",
icon: Icon1,
},
{
title: "Rent a home",
description:
"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
cta: "Find A Home",
icon: Icon2,
featured: true,
},
{
title: "Sell a home",
description:
"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
cta: "Find A Home",
icon: Icon3,
},
];
const container = {
hidden: { opacity: 0 },
show: {
opacity: 1,
transition: {
staggerChildren: 0.12,
},
},
};

export default function OurMainFocus() {
return (
<section className="relative overflow-hidden bg-[#F8F7FC] py-16 md:py-25">
{/* faint decorative lines on left like the screenshot */}
<div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2  opacity-100">
<img src={Shape}/>
</div>


<Container>
{/* header */}
<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.6 }}
transition={{ duration: 0.6, ease: "easeOut" }}
className="text-center"
>
<span className="inline-flex items-center rounded-full bg-[#FB5252]/11 px-4 py-1 text-[16px] font-bold text-[#FF5A3C] font-nunito">
Our Services
</span>
<h2 className="mt-4 text-4xl leading-[100%] font-bold tracking-tight text-slate-950 font-poppins md:text-[48px]">
Our Main Focus
</h2>
</motion.div>


{/* cards */}
<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.35 }}
className="mt-12 grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-8"
>
{items.map((item, idx) => (
<FocusCard key={item.title} item={item} index={idx} />
))}
</motion.div>
</Container>
</section>
);
}