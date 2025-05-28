import {useParams} from "react-router";
import './style.scss';

export const Title = ({title}) => {
const {heroId} = useParams();
    return (
        <div className={`circle ${heroId ? `circle-${heroId}` : 'circle-spider-man'}`}>
            <div className="title">
                {title}
            </div>
        </div>
    );
};