"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
    price: number;
    dateRange: Range;
    totalPerNight: number;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates?: Date[] | [];
    daysCount?: number;
    fees: { name: string; amount: number }[] | [];
    tax: number;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPerNight,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates,
    daysCount,
    fees,
    tax,
}) => {
    return (
        <div
            className="
                bg-white
                rounded-xl
                border-[1px]
                border-neutral-300
                overflow-hidden
                drop-shadow-xl
                p-6
                min-w-xl
            "
        >
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">PHP {price}</div>
                {/* <div className="font-light next-neutral-600">night</div> */}
            </div>
            {/* <hr /> */}
            <Calendar
                value={dateRange}
                disabledDates={disabledDates}
                onChange={(val) => onChangeDate(val.selection)}
            />
            <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        </div>
    );
};

export default ListingReservation;
