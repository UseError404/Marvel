import {useState, useRef, useEffect} from "react";
import {NavLink, useLocation} from "react-router";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {BtnMenu} from "../../shared/ui/indes.jsx";
import {navigationMenu} from "./navigation_db.js";
import './style.scss';

export const Navigation = () => {
    const [toggleBtn, setToggleBtn] = useState(true);
    const handleToggleBtn = () => {
        if (toggleBtn) {
            setTimeout(() => setToggleBtn(!toggleBtn), 300)
        } else {
            setToggleBtn(!toggleBtn)
        }
    };

    //  проверка - если текущий путь не совпадает из меню -> активный первый пункт
    const location = useLocation();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    useEffect(() => {
        if (isFirstLoad && location.pathname !== '/') {
            setIsFirstLoad(false);
        }
    }, [location])

    // анимация меню
    const menuItems = useRef([]);
    useGSAP(() => {
        if (toggleBtn) {
            // Анимация появления пунктов
            gsap.fromTo(
                menuItems.current,
                {
                    opacity: 0,
                    x: -200
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: {
                        amount: .3,
                        from: "end"
                    },
                    ease: "back.inOut(4)",
                }
            );
        } else {
            // Анимация исчезновения пунктов
            gsap.to(
                menuItems.current,
                {
                    opacity: 0,
                    x: -200,
                    stagger: {
                        amount: .3,
                        from: "start"
                    },
                    ease: "back.inOut(4)",
                }
            );
        }
    }, [toggleBtn]);

    return (
        <nav className={`navigation ${!toggleBtn ? 'navigation-hidden' : ''}`}>
            <BtnMenu toggleBtn={toggleBtn} handleToggleBtn={handleToggleBtn}/>
            <ul
                className="navigation__menu"
            >
                {navigationMenu.map((itemMenu, index) => (
                    <li
                        key={itemMenu.key}
                        ref={el => menuItems.current[index] = el}
                        className="navigation__item"
                    >
                        <NavLink
                            to={itemMenu.link}
                            onClick={() => handleToggleBtn()}
                            className={({isActive}) =>
                                `navigation__link ${(isActive || (isFirstLoad && index === 0)) ? "navigation__link-active" : ""}`
                            }
                        >
                            {itemMenu.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};