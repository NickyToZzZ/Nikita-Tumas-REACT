import { useEffect, useState } from 'react';
import './PostCardMedium.css'
import { ICard } from '../../types/interfaces';

export default function PostCardMedium() {

    const [mediumCard, setMediumCard] = useState<ICard>()
    useEffect(() => {
        setMediumCard({
            id: 2,
            image: '#',
            text: '#',
            date: 'April 20, 2021',
            lesson_num: 2,
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
        <div className="post-card-medium-container">
            <div className="post-card-medium-container__image">
                <img src={mediumCard?.image} alt="No image" />
            </div>
            <div className="post-card-medium-container__date">{mediumCard?.date}</div>
            <div className="post-card-medium-container__title">{mediumCard?.title}</div>
            <div className="post-card-medium-container-footer">
                <div className='post-card-footer-medium-block'>
                    <div className='post-card-footer-medium-block__like' onClick={increment}>&#128077;</div>
                    <span className='post-card-footer-medium-block__counter'>{counter}</span>
                    <div className='post-card-footer-medium-block__like' onClick={dislikeIncrement}>&#128078;</div>
                    <span className='post-card-footer-medium-block__counter'>{dislikeCounter}</span>
                </div>
                <div className='post-card-footer-medium-block'></div>
                <div className='post-card-footer-medium-block'>
                    <div className='post-card-footer-medium-block__notes'>&#128209;</div>
                    <div className='post-card-footer-medium-block__another'>...</div>
                </div>
            </div>
        </div>
        </>
     );
}