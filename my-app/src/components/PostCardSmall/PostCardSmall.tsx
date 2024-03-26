import { useEffect, useState } from 'react';
import './PostCardSmall.css'
import { ICard } from '../../types/interfaces';

export default function PostCardSmall() {

    const [smallCard, setsmallCard] = useState<ICard>()
    useEffect(() => {
        setsmallCard({
            id: 3,
            image: '#',
            text: '#',
            date: 'April 20, 2021',
            lesson_num: 3,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            description: '#',
            author: 0
        })
    }, [])

    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1)
    }

    const [dislikeCounter, setDislikeCounter] = useState(0)
    function dislikeIncrement() {
        setDislikeCounter(dislikeCounter + 1)
    }

    return ( 
        <>
        <div className="post-card-small-container">
            <div className='post-card-small-content'>
                <div className='post-card-small-content-info'>
                    <p className='post-card-small-content-info__date'>{smallCard?.date}</p>
                    <h3 className='post-card-small-content-info__title'>{smallCard?.title}</h3>
                </div>
                <div className='post-card-small-content-image'>
                    <img src={smallCard?.image} alt="No image" />
                </div>
            </div>
            <div className='post-card-small-footer'>
                <div className='post-card-small-footer-block'>
                    <div className='post-card-small-footer-block__like' onClick={increment}>&#128077;</div>
                    <span className='post-card-small-footer-block__counter'>{counter}</span>
                    <div className='post-card-small-footer-block__like' onClick={dislikeIncrement}>&#128078;</div>
                    <span className='post-card-small-footer-block__counter'>{dislikeCounter}</span>
                </div>
                <div className='post-card-small-footer-block'></div>
                <div className='post-card-small-footer-block'>
                    <div className='post-card-small-footer-block__notes'>&#128209;</div>
                    <div className='post-card-small-footer-block__another'>...</div>
                </div>
            </div>
        </div>
        </>
     );
}