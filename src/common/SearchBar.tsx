import React, { useState } from 'react';

type SearchBarProps = {
    className: string,
    placeholder: string,
    setSearchResult: any,
    errorMessage: string,
    searchBarStyles: string
}

export const SearchBar = ({ className, placeholder, setSearchResult, errorMessage, searchBarStyles }: SearchBarProps) => {
    const [showIcon, setShowIcon] = useState(true);
    {/** this margin makes sure the icon doesn't move the search bar */ }
    const [searchMargin, setSearchMargin] = useState('m-0');
    const [input, setInput] = useState('');

    const inputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(event.target.value);
        setSearchResult(event.target.value);
    };

    const clearInput = () => {
        setInput("");
        setSearchResult("");
    }

    return <>
        <div className={`${className}`}>

            {/** search bar an icon */}
            <div className='flex items-center'>
                {showIcon &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                }


                <form>
                    <input id="input"
                        className={`${searchMargin} ${searchBarStyles} bg-transparent p-3`} type="search" name="search" placeholder={placeholder}
                        onChange={inputChange}
                        value={input}
                        onFocus={() => {
                            if (errorMessage) return
                            setShowIcon(false);
                            setSearchMargin('ml-8')
                        }}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                setShowIcon(true);
                                setSearchMargin('m-0');
                            }
                        }}
                    ></input>
                </form>
            </div>
            {/** end search bar and icon */}

            {/** error message */}
            {errorMessage && <p className='bg-red-200 text-sm p-2 border-red-300 border-2'>
                {errorMessage}
            </p>}

            {/** try again/clear button */}
            {errorMessage && <div className='mt-5 text-xl font-kulim-park justify-center w-full'>
                <button onClick={clearInput}
                className="flex items-center justify-center w-full hover:text-2xl hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    Try again</button>
            </div>}

        </div>
    </>
}