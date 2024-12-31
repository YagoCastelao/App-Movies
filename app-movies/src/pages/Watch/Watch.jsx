import styles from './Watch.module.css'

import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'

function Watch() {

    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Assistir</h1>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Watch