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
                <p>Projektin Github:</p>
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

export function Sikapeli () {
    return <ExpandingItem 
        name="Sikapeli" shortDesc="Firebase, Git, Tiimin johtaminen, Olio-ohjelmointi" github="https://github.com/rvirtaha/sikapeli22">
            <p>Sikapeli oli osa ainejärjestömme fuksijuhlien, Sikajuhlien, markkinointia. 
            Olin vastuussa juhlan <a href="https://sikajuhlat22.fi">nettisivun</a>{" "}
            ja <a href="https://sikajuhlat22.fi/game">Sikapelin</a> toteuttamisesta pienen tiimin kanssa.
            Sikapeli on ohjelmoitu JavaScriptillä Phaser-kirjastoa käyttäen. Nettisivun backend on 
            toteutettu serverlessinä Firebasen hostingia, autentikointia, Cloud Functionsia ja Firestorea 
            hyödyntäen.            
            </p>
        </ExpandingItem>
}

export function CVSivu () {
    return <ExpandingItem 
        name="Tämä sivu" shortDesc="React, CSS" github="https://github.com/rvirtaha/rvirtaha.github.io">
            <p>Tämä nettisivu on toteutettu Reactilla ja puhtaalla CSS:llä. Yritin saada
                sivun skaalautumaan eri kokoisille näytöille mahdollisimman hyvin. 
            </p>
        
    </ExpandingItem>
}

export function Sijaisuus () {
    return <ExpandingItem
        name="Lukion matematiikanopettajan sijainen" shortDesc="1.9. 30.9.2021 (1 kk)">
            <p>
                Sijaistin matematiikanopettajaa kuukauden ajan Kuopion Klassillisessa Lukiossa.
                Opetin viittä kurssia eli sijaisuus oli kokopäiväinen. Työhön kuului tuntien suunnittelu,
                pitäminen, kokeiden suunnittelu ja tarkastaminen.
            </p>
    </ExpandingItem>
}

export function Yrittäjä () {
    return <ExpandingItem
        name="Yrittäjä" shortDesc="kesät 2019 ja 2020">
            <p>
                Pidimme ystäväni kanssa kahdestaan AY-muotoista jäätelökioskia Juankoskella kesällä 2019.
                Seuraavana kesänä halusimme siirtyä Kuopion torille suuremman asiakaskunnan takia. Torin
                jäätelökioskipaikkoja oli kuitenkin rajattu määrä, joten myimme kuplavohveleita. Työhön kuului
                toiminnan suunnittelu, kioskilla työskentely, markkinointi, tuotekehitys ja AY:hyn liittyvä toiminta.
            </p>
        </ExpandingItem>
}

export function Fullstackopen () {
    return <ExpandingItem
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
}

export function Ohjelmointi_1 () {
    return <ExpandingItem
        name="Ohjelmointi 1" shortDesc="Aalto-yliopiston Scala-kurssi 5op.">
            <p>
                <a href="https://plus.cs.aalto.fi/o1/2022/">Ohjelmointi 1</a> on Aalto-yliopiston
                ensimmäienn ohjelmointikurssi. Kurssin kielenä on Scala ja se keskittyy sekä
                olio- että funktionaaliseen ohjelmointiin.
            </p>
        </ExpandingItem>
}

export function PCEPPCAP () {
    return <ExpandingItem
        name="Python essentials 1 & 2" shortDesc="Edube Interactiven PCEP ja PCAP kurssit">
            <p>
                Edube Interactiven Pythonin peruskurssit <a href="https://edube.org/study/pe1">1</a>{" "}
                ja <a href="https://edube.org/study/pe2">2</a>, jotka valmistavat Python Instituten 
                Certiefied Entry-Level Python Programmer (PCEP-30) ja Certiefied Associate-Level
                Python Programmer (PCAP-30) sertifiointeihin. En suorittanut PCAP-tenttiä hinnan 
                takia.
            </p>
    </ExpandingItem>
}