import Card from "../components/card";
import Header from "../components/header";

export default function IndexPage() {
    return <main>
        <Header/>
        <section className={'hero'}>
            <div className={'hero--container'}>
                <h1 className={'hero--container--title'}>Рекомендуемые темы</h1>
                <Card type={'main'}/>
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