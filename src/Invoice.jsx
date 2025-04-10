import FileInput from "./LogoInput";
import DescCalc from "./Desc-Calc";
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
        <div 
            className="
                border-1 border-gray-200 max-sm:w-full sm:w-full lg:w-[83%] lg:border-amber-600 xl:border-blue-700 bg-white max-sm:px-3 sm:pl-3 sm:pr-3
                 md:pl-5 md:pr-12 py-5 h-full shadow-[6px_6px_9px_1px_#bbb]">
            <div className="max-sm:w-full flex justify-between max-sm:gap-2 sm:gap-2 max-sm:flex-col sm:flex-col md:flex-row">
                <FileInput />
                <div className="max-sm:w-full md:w-fit flex flex-col max-sm:items-start sm:items-start md:items-end rounded-sm gap-2">
                    <div className="h-15">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="h-full max-sm:w-full sm:w-full md:w-70 text-gray-900 rounded-sm border-1 border-white hover:border-gray-300 
                        focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[2.4rem] max-sm:text-left sm:text-left md:text-right px-3 outline-none"
                        />
                    </div>
                    <div className="relative inline-block">
                        <GoHash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[.65rem] font-bold text-gray-500 z-10" />
                        <input
                            type="text"
                            className="
                        pl-10 pr-5 h-9 w-45 border max-sm:text-left md:text-right text-gray-800 border-gray-300 rounded-sm text-sm 
                        focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                        />
                    </div>
                </div>
            </div>



            <div className="my-6 h-auto flex max-sm:flex-col sm:flex-col md:flex-row sm:items-start md:items-end gap-15 sm:gap-13 md:gap-5 justify-between">
                <div className="h-auto max-sm:w-full sm:w-full md:w-auto flex flex-col gap-5 sm:gap-3">
                    <AutoResizingTextarea placeholder="Who is this from?" wid="w-full" midWid="sm:w-66" height="min-h-[55px]" />

                    <div className="flex max-sm:flex-col sm:flex-col md:flex-row justify-between sm:justify-start gap-3">
                        <div className="flex flex-col gap-1">
                            <div className="">
                                <input
                                    type="text"
                                    value={val1}
                                    onChange={(e) => setVal1(e.target.val1)}
                                    className="h-10 w-full text-gray-600 rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none "
                                />
                            </div>
                            <AutoResizingTextarea placeholder='Who is this to?' wid="w-full" height="min-h-[55px]" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="">
                                <input
                                    type="text"
                                    value={val2}
                                    onChange={(e) => setVal2(e.target.val2)}
                                    className="h-10 w-full text-gray-600 rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                                />
                            </div>
                            <AutoResizingTextarea placeholder='(optional)' wid="w-full" height="min-h-[55px]" />
                        </div>
                    </div>
                </div>



                <div className="w-full sm:w-full md:w-fit flex flex-col gap-1 max-sm:pr-10 sm:pr-10 md:pr-0">
                    <div className="flex gap-1 max-sm:w-full">
                        <div className="w-full">
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.date)}
                                className="h-9 w-full sm:w-full md:w-35 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <CustomDate />
                    </div>
                    <div className="flex gap-1 max-sm:w-full sm:w-full">
                        <div className="w-full">
                            <input
                                type="text"
                                value={terms}
                                onChange={(e) => setTerms(e.target.terms)}
                                className="h-9 w-full sm:w-full md:w-35 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <div className="">
                            <input
                                type="text"
                                className="
                                    pl-10 pr-5 h-9 w-35 text-[.75rem] text-gray-900 border text-right border-gray-300 rounded-sm text-sm 
                                    focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex gap-1 max-sm:w-full sm:w-full">
                        <div className="w-full">
                            <input
                                type="text"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.dueDate)}
                                className="h-9 w-full sm:w-full md:w-35 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <CustomDate />
                    </div>
                    <div className="flex gap-1 max-sm:w-full sm:w-full">
                        <div className="w-full">
                            <input
                                type="text"
                                value={po_num}
                                onChange={(e) => setPo_Num(e.target.po_num)}
                                className="h-9 w-full sm:w-full md:w-35 text-gray-600 text-right rounded-sm border-1 border-white hover:border-gray-300 
                                focus:border-gray-300 focus:shadow-[0px_0px_3px_3px_#eee] text-[.75rem] px-4 outline-none"
                            />
                        </div>
                        <div className="">
                            <input
                                type="text"
                                className="
                                    pl-10 pr-5 h-9 w-35 text-[.75rem35text-gray-900 border text-right border-gray-300 rounded-sm text-sm 
                                    focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <DescCalc />
        </div>
    );
};

export default Invoice;
