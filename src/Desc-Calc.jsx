import React, { useState } from 'react';
import { FaPlus, FaXmark } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TiTimes } from 'react-icons/ti';
import AutoResizingTextarea from './AutoResizingTextArea';

export default function DescCalc() {
    const [lineItems, setLineItems] = useState([
        { id: 1, amount: '', quantity: '' }
    ]);

    const addLineItem = () => {
        const newId = lineItems.length > 0 ? Math.max(...lineItems.map(item => item.id)) + 1 : 1;
        setLineItems([...lineItems, { id: newId, amount: '', quantity: '' }]);
    };

    const removeLineItem = (id) => {
        if (lineItems.length > 1) {
            setLineItems(lineItems.filter(item => item.id !== id));
        }
    };

    const updateAmount = (id, value) => {
        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
            setLineItems(lineItems.map(item =>
                item.id === id ? { ...item, amount: value } : item
            ));
        }
    };

    const updateQuantity = (id, value) => {
        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
            setLineItems(lineItems.map(item =>
                item.id === id ? { ...item, quantity: value } : item
            ));
        }
    };

    const calculateTotal = (amount, quantity) => {
        const amountNum = amount === '' ? 0 : Number(amount);
        const quantityNum = quantity === '' ? 0 : Number(quantity);
        return (amountNum * quantityNum).toFixed(2);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className='rounded-md border border-gray-200'>
                {lineItems.map((item) => (
                    <div key={item.id} className="border-bottom border-1 border-gray-200 p-4">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-1">
                                    <div className="text-gray-500">Amount:</div>
                                    <div className="text-gray-600">
                                        {`US$${calculateTotal(item.amount, item.quantity)}`}
                                    </div>
                                </div>
                                <FaXmark
                                    className={`text-emerald-600 ${lineItems.length > 1 ? '' : 'hidden'} hover:text-emerald-700 transition-colors cursor-pointer`}
                                    onClick={() => removeLineItem(item.id)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <div className="relative inline-block">
                                        <BsCurrencyDollar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[.85rem] font-bold text-gray-500 z-10" />
                                        <input
                                            type="text"
                                            value={item.amount}
                                            onChange={(e) => updateAmount(item.id, e.target.value)}
                                            className="pl-7 pr-5 h-9 w-30 border text-gray-800 border-gray-300 rounded-md text-[12px] focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                                        />
                                    </div>
                                    <TiTimes className="text-gray-500" />
                                    <div className="">
                                        <input
                                            type="text"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                                            className="pl-4 pr-4 h-9 w-22 border max-sm:text-left md:text-right text-gray-800 border-gray-300 rounded-md text-[12px] focus:shadow-[0px_0px_3px_3px_#eee] outline-none"
                                        />
                                    </div>
                                </div>
                                <AutoResizingTextarea placeholder="Description of item/service..." wid="w-full" height="min-h-[15px]" />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <div
                onClick={addLineItem}
                className="flex items-center gap-[3px] w-fit py-[6px] px-3 border-[.6px] border-[#009e74] text-[#009e74] text-[10px] rounded-sm hover:bg-[#009e74] hover:text-white transition-all cursor-pointer"
            >
                <FaPlus /> Line Item
            </div>
        </div >
    );
}