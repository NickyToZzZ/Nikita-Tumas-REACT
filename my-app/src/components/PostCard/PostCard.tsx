import { useEffect, useState } from 'react';
import './PostCard.css'
import { ICard } from '../../types/interfaces';


export default function PostCard({date, image, title, description} : {date: string, image: string, title: string, description: string}) {

    const [card, setCard] = useState<ICard>()
    useEffect(() => {
        setCard({
            id: 1,
            image: image,
            text: '#',
            date: date,
            lesson_num: 1,
            title: title,
            description: description,
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
        <div className="post-card-container">
            <div className='post-card-content'>
                <div className='post-card-content-info'>
                    <p className='post-card-content-info__date'>{card?.date}</p>
                    <h3 className='post-card-content-info__title'>{card?.title}</h3>
                    <p className='post-card-content-info__description'>{card?.description}</p>
                </div>
                <div className='post-card-content-image'>
                    <img src={card?.image} alt="No image" />
                </div>
            </div>
            <div className='post-card-footer'>
                <div className='post-card-footer-block'>
                    <div className='post-card-footer-block__like' onClick={increment}>&#128077;</div>
                    <span className='post-card-footer-block__counter'>{counter}</span>
                    <div className='post-card-footer-block__like' onClick={dislikeIncrement}>&#128078;</div>
                    <span className='post-card-footer-block__counter'>{dislikeCounter}</span>
                </div>
                <div className='post-card-footer-block'></div>
                <div className='post-card-footer-block'></div>
                <div className='post-card-footer-block'>
                    <div className='post-card-footer-block__notes'>&#128209;</div>
                    <div className='post-card-footer-block__another'>...</div>
                </div>
            </div>
        </div>
        </>
     );
}