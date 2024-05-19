"use client";

import Container from "../Container";

import {
    FaCity,
    FaLandmark,
    FaRunning,
    FaArtstation,
    FaSpa,
    FaChild,
    FaShoppingBag,
    FaTheaterMasks,
    FaChalkboardTeacher,
    FaShip,
    FaCameraRetro,
    FaCalendarAlt,
    FaBinoculars,
    FaMountain,
    FaBiking,
    FaLeaf,
    FaHelicopter,
    FaUtensils,
} from "react-icons/fa";
import {
    GiWildfires,
    GiClassicalKnowledge,
    GiMountainClimbing,
} from "react-icons/gi";
import { MdOutlineWater, MdWineBar, MdOutlineNightlife } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";
import { IoMdSwitch } from "react-icons/io";
import useSearchModal from "@/app/hooks/useSearchModal";
// import { useState, useRef, useEffect } from "react";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
// import { IoMdSwitch } from "react-icons/io";

export const categories = [
    {
        label: "City",
        icon: FaCity,
        description:
            "Explore the highlights and hidden gems of vibrant cities with guided tours.",
    },
    {
        label: "History",
        icon: FaLandmark,
        description:
            "Visit famous landmarks and immerse yourself in the rich history of different regions.",
    },
    {
        label: "Nature",
        icon: GiWildfires,
        description:
            "Experience the beauty of nature and observe wildlife in their natural habitats.",
    },
    {
        label: "Adventure",
        icon: FaRunning,
        description:
            "Get your adrenaline pumping with activities like skydiving, bungee jumping, and white-water rafting.",
    },
    {
        label: "Water",
        icon: MdOutlineWater,
        description:
            "Enjoy water-based activities such as kayaking, snorkeling, and jet skiing.",
    },
    {
        label: "Food",
        icon: MdWineBar,
        description:
            "Savor local cuisine and fine wines with food tours and tastings.",
    },
    {
        label: "Culture",
        icon: GiClassicalKnowledge,
        description:
            "Immerse yourself in the local culture through traditional music, dance, and crafts.",
    },
    {
        label: "Hiking",
        icon: GiMountainClimbing,
        description:
            "Explore scenic trails and enjoy the great outdoors with guided hikes and treks.",
    },
    {
        label: "Museums",
        icon: FaArtstation,
        description:
            "Discover art, history, and science through visits to museums and galleries.",
    },
    {
        label: "Wellness",
        icon: FaSpa,
        description:
            "Unwind with spa treatments, yoga classes, and wellness retreats.",
    },
    {
        label: "Family",
        icon: FaChild,
        description:
            "Find activities and attractions that the whole family will enjoy.",
    },
    {
        label: "Nightlife",
        icon: MdOutlineNightlife,
        description:
            "Experience the local nightlife with visits to bars, clubs, and live music venues.",
    },
    {
        label: "Shopping",
        icon: FaShoppingBag,
        description:
            "Shop for unique souvenirs, local crafts, and luxury goods.",
    },
    {
        label: "Theater",
        icon: FaTheaterMasks,
        description:
            "Enjoy live performances, including theater, concerts, and comedy shows.",
    },
    {
        label: "Workshops",
        icon: FaChalkboardTeacher,
        description:
            "Learn new skills with workshops and classes in various fields.",
    },
    {
        label: "Boating",
        icon: FaShip,
        description:
            "Explore coastlines, rivers, and lakes with scenic boat tours.",
    },
    {
        label: "Photography",
        icon: FaCameraRetro,
        description: "Capture stunning photos with guided photography tours.",
    },
    {
        label: "Festivals",
        icon: FaCalendarAlt,
        description:
            "Join in the celebrations with local festivals and events.",
    },
    {
        label: "Safaris",
        icon: FaBinoculars,
        description:
            "Experience the thrill of wildlife safaris and observe animals in their natural habitat.",
    },
    {
        label: "Extreme",
        icon: FaMountain,
        description:
            "Test your limits with extreme sports like rock climbing, paragliding, and more.",
    },
    {
        label: "Biking",
        icon: FaBiking,
        description: "Discover cities and countryside on guided bike tours.",
    },
    {
        label: "Eco",
        icon: FaLeaf,
        description:
            "Explore the natural environment responsibly with eco-friendly tours.",
    },
    {
        label: "Helicopter",
        icon: FaHelicopter,
        description:
            "Get a bird’s-eye view of stunning landscapes with helicopter tours.",
    },
    {
        label: "Cooking",
        icon: FaUtensils,
        description:
            "Learn to cook local dishes with hands-on cooking classes.",
    },
    {
        label: "Sightseeing",
        icon: FaBinoculars,
        description:
            "Discover the most iconic and picturesque sights with guided sightseeing tours.",
    },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get("category");
    const pathname = usePathname();
    const searchModal = useSearchModal();

    // const [showRightScroll, setShowRightScroll] = useState(false);
    // const containerRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const container = containerRef.current;

    //     if (container) {
    //         setShowRightScroll(container.scrollWidth > container.clientWidth)
    //     }
    // }, []);

    // const handleRightScroll = () => {
    //     const container = containerRef.current;

    //     if (container) {
    //         container.scrollBy({
    //             left: container.clientWidth,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    const isMainPage = pathname === "/";

    if (!isMainPage) return null;

    return (
        <Container categoryContainer>
            <div
                // ref={containerRef}
                className="flex flex-row items-center justify-between w-full gap-4 pt-2 overflow-x-auto "
            >
                {/* {showRightScroll && (
                    <div className="w-[220px] h-1/2 flex flex-row items-center justify-end gap-4 absolute right-[80px] bg-gradient-to-r from-transparent from-10% via-white via-30% to-white to-90%">
                        <button
                            className="p-2 bg-white border rounded-full shadow-md text-neutral-800"
                            onClick={handleRightScroll}
                        >
                            <AiOutlineRight />
                        </button>
                        <div className="px-3 py-4 bg-white border text-neutral-800 rounded-xl">
                            <div className="flex flex-row items-center gap-4">
                            <IoMdSwitch /> Filters
                            </div>
                        </div>
                    </div>
                )} */}
                {categories.map((item, index) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                        firstCategory={index === 0}
                        lastCategory={index === categories.length - 1}
                    />
                ))}
            </div>
            <div
                onClick={searchModal.onOpen}
                className="flex-row items-center hidden gap-2 p-3 text-xs font-bold transition duration-150 ease-in-out border cursor-pointer sm:flex border-neutral-400 text-semibold rounded-xl hover:shadow-md ml-14"
            >
                <IoMdSwitch size={21} /> Filters
            </div>
            {/* <div className="p-1 border rounded-full cursor-pointer border-neutral-400">
                <FiChevronRight size={21}/>
            </div> */}
        </Container>
    );
};

export default Categories;
