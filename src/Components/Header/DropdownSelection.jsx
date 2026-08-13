import { useState } from 'react'
import Down from '../../assets/icons/down.png'

function DropdownSelection() {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState("ALL");

    const options = ["ALL", "Complete", "Incomplete"];


    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className='bg-[#6C63FF] hover:bg-[#5850DD] w-27 h-9 rounded-[5px] relative flex items-center px-1 cursor-pointer'>
                <p className='font-medium text-[16px] text-white'>{selectedOption}</p>
                <p><img src={Down} alt="down" className={`w-2 h-1 m absolute right-2.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} /></p>
            </button>

            {isOpen && (
                <div className='absolute left-0 mt-0 w-23 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10'>
                    <ul className="py-1">
                        {options.map((option, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleSelect(option)}
                                className="w-full text-left px-1 py-2 text-[16px] font-kanit font-normal text-[#6C63FF] hover:bg-[#6C63FF33] transition-colors cursor-pointer"
                            >
                                {option}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropdownSelection
