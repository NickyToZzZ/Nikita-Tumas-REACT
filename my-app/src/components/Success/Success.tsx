import './Success.css'

export default function Success() {
    return ( 
        <>
        <div className="success-container">
            <header className="success-header">
                <div className="success-header__burger">
                    <img src="#" alt="#" />
                </div>
                <div className="success-header__empty"></div>
                <div className="success-header__search">
                    <img src="#" alt="#" />
                </div>
                <div className="success-header__user">
                    <img src="#" alt="#" />
                </div>
            </header>
            <div className="success-content">
                <nav className="success-content__back-btn">Back to home</nav>
                <h2 className="success-content__title">Success</h2>
                <div className="success-content-info">
                    <button className="success-content-info__btn">Back to home</button>
                </div>
                <div className='success-content__empty'></div>
            </div>
        </div>
        </>
     );
}