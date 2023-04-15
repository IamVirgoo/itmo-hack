import { useState } from "react";

import data from '../devtools/info';

import Card from "../components/card";
import Header from "../components/header";

import arrow from '../assets/arrow.svg'

export default function IndexPage() {
    const [choice, setChoice] = useState<string>("all")
    return <main>
        <Header/>
        <section className={'hero'}>
            <div className={'hero--container'}>
                <h1 className={'hero--container--title'}>Рекомендуемые темы</h1>
                <Card type={'main'} number_value={0.8}/>
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
}