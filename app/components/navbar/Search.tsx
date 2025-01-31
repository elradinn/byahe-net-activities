"use client";

import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import { differenceInDays } from "date-fns";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();
    const { getByValue } = useCountries();

    const locationValue = params?.get("locationValue");
    const startDate = params?.get("startDate");
    const endDate = params?.get("endDate");
    const guestCount = params?.get("guestCount");

    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label;
        }

        return "Anywhere";
    }, [locationValue, getByValue]);

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);
            let diff = differenceInDays(end, start);

            if (diff === 0) {
                diff = 1;
            }

            return `${diff} ${diff > 1 ? "Days" : "Day"}`;
        }

        return "Any Week";
    }, [startDate, endDate]);

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} ${
                parseInt(guestCount) > 1 ? "Hours" : "Hours"
            }`;
        }

        return "Hours";
    }, [guestCount]);

    return (
        <div
            onClick={searchModal.onOpen}
            className="
                border-[1px]
                w-full
                md:w-auto
                py-1.5
                rounded-full
                bg-white
                drop-shadow
                hover:shadow-md
                hover:drop-shadow-0
                hover:transition
                hover:ease-in-out
                transition
                cursor-pointer
                lg:absolute
                lg:left-1/2
                lg:-translate-x-1/2
                lg:transition-none
            "
        >
            <div className="flex flex-row items-center justify-between ">
                <div className="px-6 text-sm font-bold truncate ">
                    {locationLabel}
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-bold
                        px-6
                        border-x-[2px]
                        flex-1
                        text-center
                        truncate
                    "
                >
                    {durationLabel}
                </div>
                <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600 ">
                    <div className="hidden truncate sm:block">{guestLabel}</div>
                    <div
                        className="
                            p-1.5
                            bg-blue-500
                            rounded-full
                            text-white
                        "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
