import React from 'react'

const StatisticsCard = ({title, num, extraNum, icon, extraText = "than last month"}) => {
  return (
    <div
        className='w-full h-full bg-secondBackground p-3 px-4 col-span-4 row-span-3 rounded-lg flex flex-row items-center justify-between'
    >
        {/* data */}
        <div
            className='w-3/5 h-full flex flex-col gap-2'
        >
            <p
                className='text-xs'
            >
                {title}
            </p>
            <div
                className='flex flex-col h-full justify-between w-fit'
            >   
                <p
                    className='text-4xl font-semibold md:text-text-3xl'
                >
                    {num}
                </p>
                <p
                    className='text-xs flex flex-row items-center gap-2 pl-0.5 text-primary w-full'
                >
                    <span
                        className='p-0.5 px-1 rounded-lg border border-primary text-text text-(length:--font-size-xxs)'
                    >   
                        {extraNum > 0 ? `${extraNum}+` : `-${extraNum}`}
                    </span>
                    {extraText}
                </p>
            </div>
        </div>
        <div
            className='bg-thirdBackground rounded-full p-2 w-fit text-primary flex items-center'
        >
            {icon}
        </div>
    </div>
  )
}

export default StatisticsCard