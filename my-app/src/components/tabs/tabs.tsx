import './Tabs.css'

export default function Tabs() {
    return ( 
        <>
        <div className='tabs-container'>
            <div className='tabs-container-content'>
                <nav className='tabs-container-content__bar'>All</nav>
                <nav className='tabs-container-content__bar'>My favorites</nav>
                <nav className='tabs-container-content__bar'>Popular</nav>
            </div>
            <div className='tabs-container-content'></div>
        </div>
        </>
     );
}

