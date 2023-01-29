import '../styles/expandingItem.css'
import { useState } from 'react'

export function ExpandingItem ({ name, shortDesc, github, children, peekName, peekInfo }) {
    const [ isOpen, setOpen ] = useState(false)
    function expand () {
        setOpen(true)
        document.getElementById(`${name}-expand`).classList.add('expand-open')
        document.getElementById(`${name}-expand`).classList.remove('expand-closed')
    }
    function collapse () {
        setOpen(false)
        document.getElementById(`${name}-expand`).classList.add('expand-closed')
        document.getElementById(`${name}-expand`).classList.remove('expand-open')
    }
    return <div className="expanding-item" id={name} onClick={() => {
        isOpen ? collapse() : expand()
    }}>
        <div className='flex-container'>
            <h2>{name}</h2>
            <p>{shortDesc}</p>
        </div>
        {peekInfo && peekName ? <div className='flex-container'>
            <p>{peekName}</p>
            <p>{peekInfo}</p>
        </div> : <></>}
        <div className='expand-closed' id={`${name}-expand`}>
            {children}
            {github 
            ? <div className='github-repo'>
                <p>Github:</p>
                <a href={github}>
                    <img className="icon" 
                        src="github.png"
                        alt="github icon"
                    />
                </a>
            </div>
            : <></>}
        </div>
    </div>
}

export function Sikapeli ({ language : l }) {
    return l === 'fi' ? <ExpandingItem 
        name="Sikapeli" shortDesc="Firebase, Git, Tiimin johtaminen, Olio-ohjelmointi" github="https://github.com/rvirtaha/sikapeli22">
            <p>Sikapeli oli osa ainejärjestömme fuksijuhlien, Sikajuhlien, markkinointia. 
            Olin vastuussa juhlan <a href="https://sikajuhlat22.fi">nettisivun</a>{" "}
            ja <a href="https://sikajuhlat22.fi/game">Sikapelin</a> toteuttamisesta pienen tiimin kanssa.
            Sikapeli on ohjelmoitu JavaScriptillä Phaser-kirjastoa käyttäen. Nettisivun backend on 
            toteutettu serverlessinä Firebasen hostingia, autentikointia, Cloud Functionsia ja Firestorea 
            hyödyntäen.            
            </p>
        </ExpandingItem>
        : <ExpandingItem 
        name="The Sika-Game" shortDesc="Firebase, Git, Leadership, Object-Oriented programming" github="https://github.com/rvirtaha/sikapeli22">
            <p>The Pig-Game was a part of our freshmen partys marketing. I was responsible for
            developing the <a href="https://sikajuhlat22.fi">webpage</a> and the {' '}
            <a href="https://sikajuhlat22.fi/game">Game itself</a> with a small team.
            The game is written in JavaScript using Phaser.js. We used a serverless backend with
            Firebase hosting, authentication, Cloud functions and Firestore.            
            </p>
        </ExpandingItem>
}

export function CVSivu ({ language : l }) {
    return l === 'fi' ? <ExpandingItem 
        name="Tämä sivu" shortDesc="React, CSS" github="https://github.com/rvirtaha/rvirtaha.github.io">
            <p>Tämä nettisivu on toteutettu Reactilla ja puhtaalla CSS:llä. Yritin saada
                sivun skaalautumaan eri kokoisille näytöille mahdollisimman hyvin. 
            </p>
        
    </ExpandingItem>
    :<ExpandingItem 
    name={l === 'fi' ? "Tämä sivu" : 'This page'} shortDesc="React, CSS" github="https://github.com/rvirtaha/rvirtaha.github.io">
        <p>This webpage uses React and native CSS. It should scale quite well on different
            size displays. 
        </p>
    
</ExpandingItem>
}

export function Sijaisuus ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Lukion matematiikanopettajan sijainen" shortDesc="1.9. 30.9.2021 (1 kk)">
            <p>
                Sijaistin matematiikanopettajaa kuukauden ajan Kuopion Klassillisessa Lukiossa.
                Opetin viittä kurssia eli sijaisuus oli kokopäiväinen. Työhön kuului tuntien suunnittelu,
                pitäminen, kokeiden suunnittelu ja tarkastaminen.
            </p>
    </ExpandingItem> :
    <ExpandingItem
    name={l === "fi" ? 'Lukion matematiikanopettajan sijainen' : 'High school math teacher'} shortDesc={l === "fi" ? '1.9. - 30.9.2021 (1 kk)' : '1.9. - 30.9.2021 (1 mo)'}>
        <p>
            I was a substitute math teacher in Kuopion Klassillinen Lukio -high school.
            I taught five courses, which means I had full-time hours. The job also included 
            planning the lessons and exams. 
        </p>
</ExpandingItem>
}

export function Yrittäjä ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Yrittäjä" shortDesc="kesät 2019 ja 2020">
            <p>
                Pidimme ystäväni kanssa kahdestaan AY-muotoista jäätelökioskia Juankoskella kesällä 2019.
                Seuraavana kesänä halusimme siirtyä Kuopion torille suuremman asiakaskunnan takia. Torin
                jäätelökioskipaikkoja oli kuitenkin rajattu määrä, joten myimme kuplavohveleita. Työhön kuului
                toiminnan suunnittelu, kioskilla työskentely, markkinointi, tuotekehitys ja AY:hyn liittyvä toiminta.
            </p>
        </ExpandingItem>
        : <ExpandingItem
        name={l === 'fi' ? "Yrittäjä" : 'Entrepreneur'} shortDesc={l === 'fi' ? "kesät 2019 ja 2020" : 'summers of 2019 and 2020'}>
            <p>
                I ran an ice cream shop with a friend of mine in Juankoski during the summer of 2019.
                The next year we wanted to move to a bigger market and moved to Kuopio. We also 
                started selling bubble waffles instead of ice cream due to regulation. The work included
                planning and operating the shop, product development, marketing and accounting.
            </p>
        </ExpandingItem>
}

export function Fullstackopen ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Full stack open" shortDesc="Full stack kehitystä MERN-stackilla, 9op.">
            <p>
                Helsingin Yliopiston ylläpitämä <a href="https://fullstackopen.com">Fullstack-kurssi</a>, osat 1-9 eli 9 opintopisteen edestä.
            </p>
            <p>
                MongoDB, Express, React, Node, Redux, TypeScript, GraphQL, Jest, Cypress
            </p>
            <p className='blurb'>
                Ota haltuusi React, Redux, Node.js, MongoDB, GraphQL ja TypeScript! Kurssilla tutustutaan 
                JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston 
                avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa 
                REST-rajapinnoissa.
            </p>
    </ExpandingItem>
    : <ExpandingItem
    name="Full stack open" shortDesc="Full stack development using the MERN-stack, 9 ects">
        <p>
            Parts 1-9 of the Helsinki Univeristy's <a href="https://fullstackopen.com/en">Fullstack-course</a>.
        </p>
        <p>
            MongoDB, Express, React, Node, Redux, TypeScript, GraphQL, Jest, Cypress
        </p>
        <p className='blurb'>
            Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! 
            This course will introduce you to modern JavaScript-based web development. 
            The main focus is on building single page applications with ReactJS that 
            use REST APIs built with Node.js.
        </p>
</ExpandingItem>
}

export function Ohjelmointi_1 ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Ohjelmointi 1" shortDesc="Aalto-yliopiston Scala-kurssi 5op.">
            <p>
                <a href="https://plus.cs.aalto.fi/o1/2022/">Ohjelmointi 1</a> on Aalto-yliopiston
                ensimmäinen ohjelmointikurssi. Kurssin kielenä on Scala ja se keskittyy sekä
                olio- että funktionaaliseen ohjelmointiin.
            </p>
        </ExpandingItem>
        : <ExpandingItem
        name="Programming 1" shortDesc="Aalto-univeristy Scala programming 5 ects">
            <p>
                <a href="https://plus.cs.aalto.fi/o1/2022/">Programming 1</a> is the
                introduction to programming course taught in Aalto-Univeristy. It is
                focused in both object-oriented and functional programming. The language
                used is Scala.
            </p>
        </ExpandingItem>
}

export function PCEPPCAP ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Python essentials 1 & 2" shortDesc="Edube Interactiven PCEP ja PCAP kurssit">
            <p>
                Edube Interactiven Pythonin peruskurssit <a href="https://edube.org/study/pe1">1</a>{" "}
                ja <a href="https://edube.org/study/pe2">2</a>, jotka valmistavat Python Instituten 
                Certiefied Entry-Level Python Programmer (PCEP-30) ja Certiefied Associate-Level
                Python Programmer (PCAP-30) sertifiointeihin. En suorittanut PCAP-tenttiä hinnan 
                takia.
            </p>
    </ExpandingItem>
    : <ExpandingItem
    name="Python essentials 1 & 2" shortDesc="Edube Interactive PCEP & PCAP courses">
        <p>
            The introduction to Python courses <a href="https://edube.org/study/pe1">1</a>{" "}
            and <a href="https://edube.org/study/pe2">2</a> by Edube Interactive, which are aligned
            to the Python Institute Certiefied Entry-Level Python Programmer (PCEP-30) 
            and Certiefied Associate-Level Python Programmer (PCAP-30) certifications. 
            I haven't taken the PCAP-30 exam due to its price.
        </p>
</ExpandingItem>
}

export function Tietokannat ({ language : l }) {
    return l === 'fi' ? <ExpandingItem
        name="Tietokannat" shortDesc={"Aalto-yliopiston Tietokannat-kurssi 5op."}>
            <p>
                <a href="https://mycourses.aalto.fi/course/info.php?id=28154">CS-A1150</a> on
                tietokantojen peruskurssi, jossa käsitellään lähinnä relaatiotietokantoja. Kurssi 
                järjestetään 6.2.2023 - 19.5.2023 eli suoritan sen ennen kesää.
            </p>
        </ExpandingItem>
        : <ExpandingItem
        name="Databases" shortDesc={"Aalto-univeristy course in Databases"}>
            <p>
                <a href="https://mycourses.aalto.fi/course/info.php?id=28154">CS-A1150</a> is the
                basic databases-course which is mostly about relational databases. The course is 
                held 6.2.2023 - 19.5.2023 so I will have completed it by summer.
            </p>
        </ExpandingItem>
}