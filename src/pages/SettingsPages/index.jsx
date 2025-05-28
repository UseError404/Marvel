import {useParams} from "react-router";
import {HeroDB} from "../../app/db/db.js";
import {PageHero, NotFound} from "../index.jsx";

export const SettingsPages = ({defaultHero = "spider-man"}) => {
    // Если heroId нет (главная страница), используем defaultHero
    const { heroId } = useParams()
    const heroName = heroId || defaultHero;
    const hero = HeroDB.find(hero =>
        hero.name.toLowerCase().replace(' ', '-') ===  heroName
    );

    return hero ? <PageHero {...hero}/> : <NotFound/>
};