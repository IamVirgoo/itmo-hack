import { Link } from "react-router-dom";

import bell from '../assets/bell.svg';
import question from '../assets/queshtion.svg';
import sun from '../assets/sun.svg';
import image from '../assets/image.png'

export default function Header() {
    return <header className={'header'}>
        <div className={'header--container'}>
            <div className={'header--container__left'}>
                <h1 className={'header--container__left--title'}>Портал Разработчика</h1>
                <div className={'header--container__left--navigation'}>
                    <Link to={""} className={'header--container__left--navigation--link'}>Моё обучение</Link>
                    <Link to={""} className={'header--container__left--navigation--link'}>Задачи</Link>
                </div>
            </div>
            <div className={'header--container__right'}>
                <div className={'header--container__right--icons'}>
                    <div className={'header--container__right--icons--wrapper'}>
                        <img src={bell} alt="#"/>
                    </div>
                    <div className={'header--container__right--icons--wrapper'}>
                        <img src={question} alt="#"/>
                    </div>
                    <div className={'header--container__right--icons--wrapper'}>
                        <img src={sun} alt="#"/>
                    </div>
                </div>
                <div className={'header--container__right--user'}>
                    <img className={'header--container__right--user--image'} src={image} alt=""/>
                    <p className={'header--container__right--user--username'}>Михаил Романов</p>
                </div>
            </div>
        </div>
    </header>
}