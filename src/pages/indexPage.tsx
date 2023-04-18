import { useState } from "react";

import data from '../devtools/info';

import Card from "../components/card";
import Header from "../components/header";

import arrow from '../assets/arrow.svg'

import Flickity from "react-flickity-component";
import { useSelector } from "react-redux";
import { AppState } from "../stores/appStore";
import {dataApi} from "../middlewares/dataMiddleware";

export default function IndexPage() {
    const flickityOptions = {
        freeScroll: true,
        contain: true,
// disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
    }

    const [choice, setChoice] = useState<string>("all")
    const [isHidden, setIsHidden] = useState<string>("Скрыть пройденные")

    const USER = useSelector((state : AppState) => state.user)
    const AUTH = useSelector((state : AppState) => state.user.auth)

    const DATA = dataApi

    if (AUTH) return <main>
        <Header username={USER.name}/>
        <section className={'hero'}>
            <div className={'hero--container'}>
                <h1 className={'hero--container--title'}>Рекомендуемые темы</h1>
                <Card type={'main'} number_value={0.8}/>
                <div className={'hero--container--separator'}>
                    <div className={'line'}></div>
                    <a href={'#carousel'} className={'hero--container--separator--button'}>
                        <p className={'hero--container--separator--button--link'}>Показать ещё</p>
                        <img src={arrow} alt=""/>
                    </a>
                    <div className={'line'}></div>
                </div>
            </div>
        </section>
        <section className={'carousel'} id={'carousel'}>
            <div className={'carousel--container'}>
                <div className={'carousel--container--heading'}>
                    <h1 className={'carousel--container--heading--title'}>Путь Front End Developer</h1>
                    <p className={'carousel--container--heading--button'} onClick={() => {
                        if (isHidden == "Скрыть пройденные") setIsHidden("Показать все")
                        else setIsHidden("Скрыть пройденные")
                    }}>{isHidden}</p>
                </div>
                <div className={'next'} style={{height: '32px', width: '32px', backgroundColor: "#FFFFF"}}></div>
                <Flickity
                    className={'slider'} // default ''
                    elementType={'div'} // default 'div'
                    disableImagesLoaded={false} // default false
                    options={flickityOptions}
                    reloadOnUpdate // default false
                    static // default false
                >
                    { data.map((value) =>
                        <div className={'slider-path'}>
                            { isHidden == "Скрыть пройденные"
                                ? <Card
                                    type={value.cardType}
                                    title={value.title}
                                    info={value.info}
                                    description={value.description}
                                    cardProgressType={value.cardProgressType}
                                    number_value={value.number_value}
                                />
                                : <>
                                    { value.cardProgressType != 'done'
                                        ? <Card
                                            type={value.cardType}
                                            title={value.title}
                                            info={value.info}
                                            description={value.description}
                                            cardProgressType={value.cardProgressType}
                                            number_value={value.number_value}
                                        />
                                        : <></>
                                    }
                                </>
                            }
                        </div>)
                    }
                </Flickity>
            </div>
        </section>
        <section className={'catalog'}>
            <div className={'catalog--container'}>
                <h1 className={'catalog--container--title'}>Каталог тем</h1>
                <div className={'catalog--container--choose'}>
                    <p className={'catalog--container--choose--path'} onClick={() => {
                        setChoice("all")
                    }}>Все</p>
                    <p className={'catalog--container--choose--path'} onClick={() => {
                        setChoice("workspace")
                    }}>Рабочая среда</p>
                    <p className={'catalog--container--choose--path'} onClick={() => {
                        setChoice("libs")
                    }}>Библиотеки</p>
                    <p className={'catalog--container--choose--path'} onClick={() => {
                        setChoice("passed")
                    }}>Пройденные</p>
                    <p className={'catalog--container--choose--path'} onClick={() => {
                        setChoice("not passed")
                    }}>Не пройденные</p>
                </div>
                <div className={'catalog--container--content'}>
                    { choice == "all"
                        ? <>
                            { data.map((value) =>
                                <Card
                                    type={value.cardType}
                                    title={value.title}
                                    info={value.info}
                                    description={value.description}
                                    cardProgressType={value.cardProgressType}
                                    number_value={value.number_value}/>)

                            }
                        </>
                        : <>
                            { choice == "workspace"
                                ? <>
                                    { data.map((value) => <>
                                        { value.title.includes("рабоч") || value.title.includes("сред")
                                            ? <Card
                                                type={value.cardType}
                                                title={value.title}
                                                info={value.info}
                                                description={value.description}
                                                cardProgressType={value.cardProgressType}
                                                number_value={value.number_value}/>
                                            : <></>
                                        }</>)
                                    }
                                </>
                                : <>
                                    { choice == "libs"
                                        ? <>
                                            { data.map((value) => <>
                                                { value.title.includes("библиотек") || value.title.includes("Библиотек")
                                                    ? <Card
                                                        type={value.cardType}
                                                        title={value.title}
                                                        info={value.info}
                                                        description={value.description}
                                                        cardProgressType={value.cardProgressType}
                                                        number_value={value.number_value}/>
                                                    : <></>
                                                }</>)
                                            }
                                        </>
                                        : <>
                                            { choice == "passed"
                                                ? <>
                                                    { data.map((value) => <>
                                                        { value.cardProgressType == 'done'
                                                            ? <Card
                                                                type={value.cardType}
                                                                title={value.title}
                                                                info={value.info}
                                                                description={value.description}
                                                                cardProgressType={value.cardProgressType}
                                                                number_value={value.number_value}/>
                                                            : <></>
                                                        }</>)
                                                    }
                                                </>
                                                : <>
                                                    { choice == "not passed"
                                                        ? <>
                                                            { data.map((value) => <>
                                                                { value.cardProgressType != 'done' && value.cardProgressType != "not started"
                                                                    ? <Card
                                                                        type={value.cardType}
                                                                        title={value.title}
                                                                        info={value.info}
                                                                        description={value.description}
                                                                        cardProgressType={value.cardProgressType}
                                                                        number_value={value.number_value}/>
                                                                    : <></>
                                                                }</>)
                                                            }
                                                        </>
                                                        : <></>
                                                    }
                                                </>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    </main>
    else return <>
        {window.location.href='/welcome'}
    </>
}