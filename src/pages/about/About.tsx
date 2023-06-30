import './About.css';

export function About() {
    return (
        // <main className='about'>
        //     <div id='sh'>
        //         <h1 id='h1about'>Sobre nós</h1>
        //         <p className='para'>
        //             Bem-vindo ao nosso site, onde você encontrará informações sobre o Teta Sesh, um grupo de DJs apaixonados pela música eletrônica. Somos um coletivo formado por talentosos artistas que buscam proporcionar experiências sonoras únicas e envolventes para o público.
        //             Nossos DJs têm estilos distintos que abrangem diversas vertentes da música eletrônica. Conheça nossos artistas:
        //         </p>
        //         <br />
        //         <p className='para'>
        //             <strong>Bemaventurado, Laomer e Costai</strong>: O trio formado por Teta, Laomer e Costai é conhecido por suas performances de tech house animadas e envolventes. Com uma combinação de elementos dançantes e melodias cativantes, eles garantem uma experiência musical contagiante.
        //             <br />
        //             <br />
        //             <p className='para'><strong>Dabague</strong> e <strong>Zanqueta</strong>: Apaixonados pelo psytrance, Dabague e Zanqueta são verdadeiros especialistas em criar uma atmosfera energética e psicodélica, com batidas pulsantes e melodias cativantes.</p>
        //             <br />
        //             <p className='para'><strong>Oghthraxx:</strong> Com sua paixão pelo techno, Oghthraxx traz uma mistura única de sonoridades que cativam os ouvintes e os levam a uma jornada musical envolvente.</p>
        //             <br />
        //             <strong>Spinnenkopf</strong>: Especializado em techno, Spinnenkopf é um mestre em criar paisagens sonoras hipnóticas e poderosas que fazem o público se entregar à música.
        //         </p>
        //         <br />
        //         <p className='para'>
        //             Nosso formato de eventos e resenhas é projetado para oferecer ao público uma diversidade de estilos musicais. Cada um de nossos DJs tem a oportunidade de mostrar sua arte durante uma hora de set, proporcionando uma experiência única e dinâmica. Nosso objetivo é levar você a uma jornada sonora memorável, cheia de ritmo e energia.
        //             Embora sejamos um coletivo de DJs iniciantes, estamos comprometidos em aprimorar constantemente nossas habilidades e levar nossa música a um público cada vez maior. Estamos abertos a novas oportunidades e colaborações, sempre buscando expandir nossos horizontes musicais.
        //         </p>
        //         <br />
        //         <p className='para'>
        //             Acompanhe nosso site para ficar atualizado sobre nossa agenda de eventos, resenhas e novidades. Estamos entusiasmados em compartilhar nossa paixão pela música eletrônica com você e estamos ansiosos para levar a energia do Teta Sesh aos seus ouvidos.
        //             Junte-se a nós nessa jornada musical e descubra o poder da música eletrônica em todas as suas formas!
        //         </p>
        //     </div>
        // </main>

        <main className="about">
            <section id='sh'>
                <h1 id='h1about'>Sobre nós</h1>
                <p className='para'>
                    Bem-vindo ao nosso site, onde você encontrará informações sobre o <strong><abbr title="Label de Artistas Dj's">Teta Sesh</abbr></strong>, um grupo de DJs apaixonados pela música eletrônica. Somos um coletivo formado por talentosos artistas que buscam proporcionar experiências sonoras únicas e envolventes para o público.
                    Nossos DJs têm estilos distintos que abrangem diversas vertentes da música eletrônica. Conheça nossos artistas:
                </p>
                <br />
                <h3 id='h1about'>A - Z</h3>
                <ul>
                    <li>
                        <strong>Bemaventurado</strong> e <strong>Laomer</strong>: Tocam <strong>house</strong>.
                    </li>
                    <li>
                        <strong>Costai</strong>: Toca <strong>deephouse</strong>.
                    </li>
                    <li>
                        <strong>Dabague</strong> e <strong>Zanqueta</strong>: Tocam <strong>psytrance</strong>, com preferência de Zanqueta pelo <strong>psytechno</strong> e Dabague pelo <strong>hitech</strong> e <strong>fullon</strong>.
                    </li>
                    <li>
                        <strong>Oghthraxx</strong>: Toca <strong>phonk</strong> e <strong>techno</strong>.
                    </li>
                    <li>
                        <strong>Spinnenkopf</strong>: Toca <strong>techno peaktime</strong>, <strong>raw</strong>, <strong>hipnotic</strong> e <strong>dark</strong>.
                    </li>
                </ul>
                <br />
                <p className='para'>
                    Nosso formato de eventos e resenhas é projetado para oferecer ao público uma diversidade de estilos musicais. Cada um de nossos DJs tem a oportunidade de mostrar sua arte durante uma hora de set, proporcionando uma experiência única e dinâmica. Nosso objetivo é levar você a uma jornada sonora memorável, cheia de ritmo e energia.
                    Embora sejamos um coletivo de DJs iniciantes, estamos comprometidos em aprimorar constantemente nossas habilidades e levar nossa música a um público cada vez maior. Estamos abertos a novas oportunidades e colaborações, sempre buscando expandir nossos horizontes musicais.
                </p>
                <br />
                <p className='para'>
                    Acompanhe nosso site para ficar atualizado sobre nossa agenda de eventos, resenhas e novidades. Estamos entusiasmados em compartilhar nossa paixão pela música eletrônica com você e estamos ansiosos para levar a energia do <strong><abbr title="Label de Artistas Dj's">Teta Sesh</abbr></strong> aos seus ouvidos.
                    Junte-se a nós nessa jornada musical e descubra o poder da música eletrônica em todas as suas formas!
                </p>
            </section>
        </main>
    );
}