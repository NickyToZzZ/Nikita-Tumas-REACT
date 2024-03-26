import './Tabs.css'

export default function Tabs() {
    return ( 
        <>
        <div className="tabs-container">
            <h2 className='tabs-container__title'>Blog</h2>
            <div className='tabs-block'>
                <div className='tabs-block-content'>
                    <nav className='tabs-block-content__bar'>All</nav>
                    <nav className='tabs-block-content__bar'>My favorites</nav>
                    <nav className='tabs-block-content__bar'>Popular</nav>
                </div>
                <div className='tabs-block-content'></div>
            </div>
        </div>
        </>
     );
}

