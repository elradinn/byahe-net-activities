"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser,
    });

    return (
        <div
            onClick={toggleFavorite}
            className="relative transition cursor-pointer  hover:opacity-80"
        >
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart
                size={25}
                className={
                    hasFavorited
                        ? "fill-red-500 -top-[2px] -right-[2px]"
                        : "fill-neutral-500/70 -top-[2px] -right-[2px]"
                }
            />
        </div>
    );
};

export default HeartButton;
