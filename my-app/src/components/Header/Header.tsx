import './Header.css'

export default function Header({username}: {username: string}) {

    const initial = username.split(' ').reduce(((res, item) => res + item[0]), '')
    
    return ( 
        <>
        <header className='header'>
            <div className='header-burger'>
                <img src="#" alt="#" />
            </div>
            <div className='header-empty'></div>
            <div className='header-search'>
                <img src="#" alt="#" />
            </div>
            <div className='header-user'>
                <div className='header-user__initial'>{initial}</div>
                <div className='header-user__username'>{username} ⬇</div>
            </div>
        </header>
        </>
     );
}