import { useEffect, useState } from 'react';
import './PostCard.css'
import { ICard } from '../../types/interfaces';


export default function PostCard() {

    const [card, setCard] = useState<ICard>()
    useEffect(() => {
        setCard({
            id: 1,
            image: '#',
            text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            date: 'April 20, 2021',
            lesson_num: 1,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
            description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
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