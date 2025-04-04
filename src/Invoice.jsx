import FileInput from "./LogoInput";
import { GoHash } from "react-icons/go";
import AutoResizingTextarea from "./AutoResizingTextArea";
import CustomDate from "./CustomDate";
import { useState } from 'react';

const Invoice = () => {
    const [value, setValue] = useState("INVOICE");
    const [val1, setVal1] = useState("Bill To");
    const [val2, setVal2] = useState("Ship To");
    const [date, setDate] = useState("Date");
    const [terms, setTerms] = useState("Payment Terms");
    const [dueDate, setDueDate] = useState("Due Date");
    const [po_num, setPo_Num] = useState("PO Number");




    return (
        <div className="border-1 border-gray-200 w-[83%] bg-white pl-5 pr-15 py-5 h-full">
            <div className="flex justify-between">
                <FileInput />
                <div className="w-fit flex flex-col items-end rounded-sm gap-2">
                    <div className="h-15">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="h-full w-70 text-gray-900 rounded-sm border-1 border-white hover:border-gray-300 
                        focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[2.4rem] text-right px-3 outline-none"
                        />
                    </div>
                    <div className="relative inline-block">
                        <GoHash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[.65rem] font-bold text-gray-500 z-10" />
                        <input
                            type="text"
                            className="
                        pl-10 pr-5 h-9 w-45 border text-right border-gray-300 rounded-sm text-sm 
                        focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                        />
                    </div>
                </div>
            </div>



            <div className="my-6 h-auto flex justify-between items-end">
                <div className="h-auto w-fit flex flex-col gap-3">
                    <AutoResizingTextarea placeholder="Who is this from?" wid="w-94" />
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="w-fit">
                                <input
                                    type="text"
                                    value={val1}
                                    onChange={(e) => setVal1(e.target.val1)}
                                    className="h-10 w-70 text-gray-600 rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                                />
                            </div>
                            <AutoResizingTextarea placeholder='Who is this to?' wid="w-70" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-fit">
                                <input
                                    type="text"
                                    value={val2}
                                    onChange={(e) => setVal2(e.target.val2)}
                                    className="h-10 w-70 text-gray-600 rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                                />
                            </div>
                            <AutoResizingTextarea placeholder='(optional)' wid="w-70" />
                        </div>
                    </div>
                </div>

                <div className="w-fit flex flex-col gap-1">
                    <div className="flex gap-1 w-fit">
                        <div className="w-fit">
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.date)}
                                className="h-10 w-54 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <CustomDate />
                    </div>
                    <div className="flex gap-1 w-fit">
                        <div className="w-fit">
                            <input
                                type="text"
                                value={terms}
                                onChange={(e) => setTerms(e.target.terms)}
                                className="h-10 w-54 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <div className="">
                            <input
                                type="text"
                                className="
                                    pl-10 pr-5 h-10 w-41 text-[.75rem] text-gray-900 border text-right border-gray-300 rounded-sm text-sm 
                                    focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex gap-1 w-fit">
                        <div className="w-fit">
                            <input
                                type="text"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.dueDate)}
                                className="h-10 w-54 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <CustomDate />
                    </div>
                    <div className="flex gap-1 w-fit">
                        <div className="w-fit">
                            <input
                                type="text"
                                value={po_num}
                                onChange={(e) => setPo_Num(e.target.po_num)}
                                className="h-10 w-54 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <div className="">
                            <input
                                type="text"
                                className="
                                    pl-10 pr-5 h-10 w-41 text-[.75rem] text-gray-900 border text-right border-gray-300 rounded-sm text-sm 
                                    focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
