import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpeg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat6 from '../assets/cat6.jpg';
import cat7 from '../assets/cat7.jpg';
import cat8 from '../assets/cat8.jpg';
import '../styles/MyCarousel.css';

const ReactSimplyCarouselExample: React.FC<{}> = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        lineHeight: 1,
                        textAlign: 'center',
                    },
                    children: <span><FontAwesomeIcon className="text-coral hover:text-turquoise" icon={solid('circle-right')} size="2x" /></span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        lineHeight: 1,
                        textAlign: 'center',
                    },
                    children: <span><FontAwesomeIcon className="text-coral hover:text-turquoise" icon={solid('circle-left')} size="2x" /></span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div className='container'>
                    <img src={cat1} alt='cat1' />
                </div>
                <div className='container'>
                    <img src={cat2} alt='cat2' />
                </div>
                <div className='container'>
                    <img src={cat3} alt='cat3' />
                </div>
                <div className='container'>
                    <img src={cat4} alt='cat4' />
                </div>
                <div className='container'>
                    <img src={cat6} alt='cat6' />
                </div>
                <div className='container'>
                    <img src={cat7} alt='cat7'/>
                </div>
                <div className='container'>
                    <img src={cat8} alt='cat8' />
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default ReactSimplyCarouselExample;