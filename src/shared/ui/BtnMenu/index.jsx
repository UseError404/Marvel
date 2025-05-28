import './style.scss';

export const BtnMenu = ({toggleBtn, handleToggleBtn}) => {

    return (
        <div className={`btn-menu ${toggleBtn ? 'btn-menu__active' : ''}`}
             onClick={handleToggleBtn}>
            <div id="bar1" className="btn-menu__bars"></div>
            <div id="bar2" className="btn-menu__bars"></div>
            <div id="bar3" className="btn-menu__bars"></div>
        </div>
    );
};