import first from "../public/images/1.jpg";
import second from "../public/images/2.jpg";
import third from "../public/images/3.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { LuPackageSearch } from "react-icons/lu";
import { PiChatsLight } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";

export const links = [
  {
    name: "Home",
    hash: "home",
  },
  {
    name: "About Us",
    hash: "aboutUs",
  },
  {
    name: "Services",
    hash: "services",
  },
  {
    name: "Contact Us",
    hash: "contact",
  },
] as const;

export const slideShowImages = [
  {
    heading1: "Global",
    heading2: "Logistic",
    heading3: "Expertise",
    number: 1,
    description: "Your company details will be shown here!",
    url: "0",
  },
  {
    heading1: "Efficeint",
    heading2: "Cargo",
    heading3: "Movement",
    number: 2,
    description: "Your company details will be shown here!",
    url: "1",
  },
  {
    heading1: "Secure",
    heading2: "Freight",
    heading3: "Handling",
    description: "Your company details will be shown here!",
    number: 3,
    url: "2",
  },
] as const;

export const imagesAddress = [0, 1, 2];

export const services = [
  {
    text1: "Real Time Cargo",
    text2: "Tracking",
    img: <LuPackageSearch />,
  },
  {
    text1: "Safety & Security",
    text2: "Services",

    img: <MdSecurity />,
  },
  {
    text1: "On Time",
    text2: "Delivery",
    img: <FaClockRotateLeft />,
  },
  {
    text1: "Optimized",
    text2: "Travel Cost",
    img: <LiaShippingFastSolid />,
  },
  {
    text1: "24/7",
    text2: "Clients Support",
    img: <PiChatsLight />,
  },
] as const;

export const promoImages = [
  {
    number: "01",
    heading: ["Implementing", "Sustainable", "Methods"],
    image: "promo_01.jpg",
  },
  {
    number: "02",
    heading: ["Logistics", "Strategy", "Development"],
    image: "promo_02.jpg",
  },
  {
    number: "03",
    heading: ["Internation", "Shipping", "Logistics"],
    image: "promo_03.jpg",
  },
  {
    number: "04",
    heading: ["E-commerce", "Delivery", "Optimization"],
    image: "promo_04.jpg",
  },
];

export const reviews = [
  {
    description:
      "Work is exceptional, and it's clear that you put a great deal of effort and thought into every aspect of it. Attention to detail is remarkable, and it sets a high standard for the rest of.",
    name: "Stefanie Rashford",
    img: "test1.jpg",
  },
  {
    description:
      "Service was exceptional, and it's clear that you have a genuine passion for what you do. The attention to detail and willingness to personalize the experience made it truly memorable. The commitment to providing the best.",
    name: "Patric Stone",
    img: "test2.jpg",
  },
  {
    description:
      "The work done was outstanding! The dedication and hard work put into it were evident and greatly appreciated. The level of skill and expertise demonstrated was truly impressive, and it made a significant impact on the.",
    name: "Hugo James",
    img: "test2.jpg",
  },

  {
    description:
      "The product delivered exceeded expectations! The attention to detail and commitment to quality were evident in every aspect. The level of customer service provided was also exceptional and greatly appreciated..",
    name: "Cassie Carleton",
    img: "test3.jpg",
  },
] as const;

export const contactInfo = [
  {
    img: <FaLocationDot size={50} />,
    heading: "Location",
    description: "29 Nicolas str, New York ",
    description2: "987597-50",
  },
  {
    img: <MdOutlineSettingsPhone size={50} />,
    heading: "Phones",
    description: "0(800) 890-90-609",
    description2: "0(800) 890-90-609",
  },
  {
    img: <MdOutlineEmail size={50} />,
    heading: "Email",
    description: "sale@like-example.com",
    description2: "sale@like-example.com",
  },
  {
    img: <FaRegClock size={50} />,
    heading: "Working Hours",
    description: "Wednesday - Sunday",
    description2: "7:00 AM - 5:00 PM",
  },
] as const;
