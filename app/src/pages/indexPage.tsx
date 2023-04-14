import { Link } from "react-router-dom";

import Card from "../components/card";
import Header from "../components/header";

import arrow from '../assets/arrow.svg'

export default function IndexPage() {
    return <main>
        <Header/>
        <section className={'hero'}>
            <div className={'hero--container'}>
                <h1 className={'hero--container--title'}>Рекомендуемые темы</h1>
                <Card type={'main'}/>
                <div className={'hero--container--separator'}>
                    <div className={'line'}></div>
                    <a href={'#'} className={'hero--container--separator--button'}>
                        <p className={'hero--container--separator--button--link'}>Показать ещё</p>
                        <img src={arrow} alt=""/>
                    </a>
                    <div className={'line'}></div>
                </div>
            </div>
        </section>
        <section className={'selected'}>
            <div className={'selected--container'}>

            </div>
        </section>
        <section className={'catalog'}>
            <div className={'catalog--container'}>

            </div>
        </section>
    </main>
}