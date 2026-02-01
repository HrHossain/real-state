import { motion } from "framer-motion";
import Icon1 from "../../assets/Focus/icon1.png"


const card = {
hidden: { opacity: 0, y: 18, scale: 0.98 },
show: {
opacity: 1,y: 0,scale: 1,transition: { duration: 0.55, ease: "easeOut" },
},
};

export default function FocusCard({ item, index }) {
const Icon = item.icon;


return (
<motion.div
variants={card}
whileHover={{ y: -6 }}
whileTap={{ scale: 0.99 }}
className={
"group bg-white px-[20px] pt-[38px] pb-[54px] text-center"
}
>
{/* bottom accent line (center card highlighted like screenshot) */}
<div
className={
"pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-transparent transition"
}
/>
{item.featured && (
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-orange-500" />
)}


{/* icon */}
<div className="mx-auto mb-1  grid  place-items-center w-[200px] h-[200px]  bg-[url('../../../public/path.png')] bg-contain bg-no-repeat bg-center ">
<motion.div
initial={{ rotate: 0 }}
whileHover={{ rotate: 6 }}
transition={{ type: "spring", stiffness: 300, damping: 18 }}
className="text-orange-500"
>
<img src={item.icon}/>
</motion.div>
</div>


<h3 className="text-[42px] font-bold text-slate-950 font-poppins leading-relaxed">
{item.title}
</h3>
<p className=" font-nunito font-normal mt-3 mb-5 text-[16px] leading-relaxed text-[#5C727D]">
{item.description}
</p>


<motion.a
href="#"
className=" text-[18px] font-bold text-[#FF5A3C] font-nunito leading-[100%] "
whileHover={{ x: 4 }}
transition={{ type: "spring", stiffness: 400, damping: 20 }}
>
{item.cta}
<span aria-hidden className="text-base">
→
</span>
</motion.a>
</motion.div>
);
}