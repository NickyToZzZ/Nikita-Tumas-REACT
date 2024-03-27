import './SelectedPost.css'
import Header from '../Header/Header';
import { ICard } from '../../types/interfaces';
import { useEffect, useState } from 'react';

export default function SelectedPost({id, image, text, title} : {id: number, image: string, text: string, title: string}) {

    const [card, setCard] = useState<ICard>()
    useEffect(() => {
        setCard({
            id: id,
            image: image,
            text: text,
            date: '#',
            lesson_num: 1,
            title: title,
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
        <div className="SelectedPost">
            <Header username='Nikita Tumas'/>
            <div className="SelectedPost-container">
                <div className="SelectedPost-container-info">
                    <nav className="SelectedPost-container-info__home">Home</nav>
                    <p className="SelectedPost-container-info__post">| Post: <span className="SelectedPost-container-info__post-id">{card?.id}</span></p>
                </div>
                <h2 className="SelectedPost-container__title">{card?.title}</h2>
                <div className="SelectedPost-container__image">
                    <img src={card?.image} alt="#" />
                </div>
                <p className="SelectedPost-container__text">{card?.text}</p>
                <div className="SelectedPost-container-footer">
                    <div className='SelectedPost-footer-block'>
                        <div className='SelectedPost-footer-block__like' onClick={increment}>&#128077;</div>
                        <span className='SelectedPost-footer-block__counter'>{counter}</span>
                        <div className='SelectedPost-footer-block__like' onClick={dislikeIncrement}>&#128078;</div>
                        <span className='SelectedPost-footer-block__counter'>{dislikeCounter}</span>
                    </div>
                    <div className='SelectedPost-footer-block__empty'></div>
                    <button className='SelectedPost-footer-block__button'>&#128209; Add to favorites</button>
                </div>
            </div>
            <footer className="SelectedPost-footer">
                    <div className="SelectedPost-footer-block">
                        <div className="SelectedPost-footer-block__arrow">🠔</div>
                        <div className="SelectedPost-footer-block-info">
                            <nav className="SelectedPost-footer-block-info__navigation">Prev</nav>
                            <p className="SelectedPost-footer-block-info__title">10 Things to Know About Salvador Dalí</p>
                        </div>
                    </div>
                    <div className="SelectedPost-footer-block-empty"></div>
                    <div className="SelectedPost-footer-block">
                        <div className="SelectedPost-footer-block-info">
                            <nav className="SelectedPost-footer-block-info__navigation">Next</nav>
                            <p className="SelectedPost-footer-block-info__title">8 Beautiful Villas Belonging to Artists You Need to See</p>
                        </div>
                        <div className="SelectedPost-footer-block__arrow">🠖</div>
                    </div>
                </footer>
        </div>
        </>
     );
}