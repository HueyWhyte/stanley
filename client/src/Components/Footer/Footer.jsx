import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoLinkedin,
} from "react-icons/io";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import "./style.css";

// export default function Footer() {
//   return (

//   );
// }

// import React from 'react'

export default function Footer() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <footer>
      <section className="firstSection">
        <img
          src={require("../../assets/img/stan.png")}
          style={{ width: 60 }}
          alt=""
        />
        <p style={{ textAlign: "center" }}>Website made by Me with Love</p>
      </section>
      <section className="secendSection">
        {/* <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleX: scrollYProgress,
              backgroundColor: "red",
              width: 50,
              height: 50,
            }}
          />
        </motion.div> */}
      </section>
      <section className="socialIcons">
        <a
          href="https://www.linkedin.com/in/stanleykwaminaotabil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size={25} color="#0000d1" />
        </a>
        <a
          href="https://www.instagram.com/kwamina_whyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram size={25} color="red" />
        </a>
        <a
          href="https://twitter.com/HueyWhyte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter size={25} color="#1da1f2" />
        </a>
        <a
          href="https://www.pinterest.com/hueywhyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoPinterest size={25} color="red" />
        </a>
      </section>
    </footer>
  );
}

// const { scrollYProgress } = useViewportScroll();
// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
// return (
//   <motion.div style={{ scale }}>
//     <motion.div
//       style={{
//         scaleY: scrollYProgress,
//       }}
//     />
//   </motion.div>
// );

// const constraintsRef = useRef(null);
// const x = useMotionValue(0);
// const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
//   clamp: false,
// });
// return (
//   <motion.div ref={constraintsRef} style={{ rotateY }}>
//     <motion.div drag="x" dragConstraints={constraintsRef} style={{ x }} />
//   </motion.div>
// );

// const icon = {
//   hidden: {
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)",
//   },
//   visible: {
//     pathLength: 1,
//     fill: "rgba(255, 255, 255, 1)",
//   },
// };
// return (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//     <motion.path
//       d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
//       variants={icon}
//       initial="hidden"
//       animate="visible"
//     />
//   </svg>
// );
