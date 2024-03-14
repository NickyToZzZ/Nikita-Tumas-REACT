import './title.css';

function Title({text}: {text: string}) {
    return ( 
        <>
        <div className="container">
            <div className="container__title">{text}</div>
        </div>
        </>
     )
}

export default Title