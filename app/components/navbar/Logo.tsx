"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push("/")}
            alt="Logo"
            className="hidden mr-5 cursor-pointer md:block max-h-md"
            width="222"
            height="33"
            src="/images/NewLogo.svg"
        />
    );
};

export default Logo;
