'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp
                duration={3}
                decimals={2}
                end={amount}
                decimal='.'
                prefix='$'
            />
        </div>
    )
}

export default AnimatedCounter
