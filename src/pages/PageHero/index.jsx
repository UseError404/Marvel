import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Logo, Title, AboutHero, FactsHero, ImageHero, Loading} from "../../shared/ui/indes.jsx";
import './style.scss';

export const PageHero = ({name, logo = {}, image = {}, aboutHero, facts}) => {
    const {heroId} = useParams();
    const heroRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

    // анимация элементов gsap
    useGSAP(() => {
        if (isLoading) return;

        const tl = gsap.timeline({defaults: {ease: "slow(0.7,0.7,false)"}});

        // Элементы анимации
        const logoEl = heroRef.current.querySelector('.hero__container > .logo');
        const titleEl = heroRef.current.querySelector('.hero__content > .circle > .title');
        const aboutEl = heroRef.current.querySelector('.hero__content > .about-hero');
        const heroEl = heroRef.current.querySelector('.hero__content > .hero__image > .imageHero');
        const factsEl = heroRef.current.querySelector('.hero__footer > .facts-hero');

        // Начальные стили
        gsap.set([logoEl, heroEl], {opacity: 0, filter: 'blur(10px)'});

        // Анимация
        tl
            .to(logoEl, {opacity: 1, filter: 'blur(0)', duration: 0.5})
            .fromTo(titleEl,
                {opacity: 0, filter: 'blur(3px)', xPercent: -20},
                {opacity: 1, filter: 'blur(0)', xPercent: 0, duration: 0.3},
                '-=0.3'
            )
            .fromTo(aboutEl,
                {opacity: 0, filter: 'blur(3px)', yPercent: -20},
                {opacity: 1, filter: 'blur(0)', yPercent: 0, duration: 0.3},
                '-=0.1'
            )
            .to(heroEl, {opacity: 1, filter: 'blur(0)', duration: 0.5}, '-=0.5')
            .fromTo(factsEl.querySelectorAll(".facts-hero__item"),
                {opacity: 0, filter: 'blur(3px)', yPercent: 20},
                {opacity: 1, filter: 'blur(0)', yPercent: 0, stagger: 0.4,},
            );

    }, {dependencies: [heroId, isLoading]});


    // принудительный вызов Loading
    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [heroId]);

    return (
        <div className={`hero ${heroId ? `hero-${heroId}` : 'hero-spider-man'}`} ref={heroRef}>
            {isLoading ? (
                <div className="hero__container hero__loading">
                    <Loading/>
                </div>
            ) : (
                <div className="hero__container">
                    {logo && <Logo webp={logo.webp} png={logo.png} avif={logo.avif}/>}
                    <div className="hero__content">
                        {name && <Title title={name}/>}
                        {aboutHero && <AboutHero aboutHero={aboutHero}/>}

                        {image && (
                            <div className={`hero__image ${heroId ? `hero__image-${heroId}` : 'hero__image-spider-man'}`}>
                                <div className={`hero__circle circle ${heroId ? `circle-${heroId}` : ''}`}/>
                                <ImageHero avif={image.avif} webp={image.webp} png={image.png}/>
                            </div>
                        )}
                    </div>
                    <div className="hero__footer">
                        {facts && <FactsHero facts={facts}/>}
                    </div>


                </div>
            )}
        </div>
    );
};