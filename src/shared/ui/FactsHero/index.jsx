import './style.scss';

export const FactsHero = ({facts}) => {
    return (
        <ul className="facts-hero">
            {facts.length>0 &&
                facts.map((fact, key)=> (
                    <li className='facts-hero__item'
                        key={key}>
                        <p>{fact.length > 200 ? `${fact.slice(0, 100)}...` : fact}</p>
                    </li>
                ))}
        </ul>
    );
};