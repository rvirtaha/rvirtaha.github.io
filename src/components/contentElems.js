import { ExpandingItem, Sikapeli, CVSivu, Sijaisuus, Yrittäjä, Fullstackopen, Ohjelmointi_1, PCEPPCAP } from "./expandingItem"
import { Sertifikaatti } from "./sertifikaatti"

function ContentElement (props) {
    return <div className="content-element">
        {props.children}
    </div>
}

export function Koulutus () {
    return <ContentElement className="koulutus">
        <h1>Koulutus</h1>
        <h2>Tuotantotalouden kandidaattiopinnot</h2>
        <div className="info-container">
            <p className="school">Aalto-yliopisto</p>
            <p className="year">2022 -{'>'}</p>
        </div>
        <h2>Lukio / Ylioppilastutkinto</h2>
        <div className="info-container">
            <p className="school">Kuopion Klassillinen Lukio</p>
            <p className="year">2018 - 2021</p>
        </div>
    </ContentElement>
}

export function Profiili () {
    return <ContentElement className="profiili">
        <h1>Profiili</h1>
        <p>
            Olen kaikesta teknologiasta ja softasta kiinnostunut Tuotantotalouden opiskelija, jolla riittää
            harrastuneistuuta ja itseohjautuvuutta, esimerkiksi yrittäjänä toimiminen vaati paljon oma-aloitteisuutta.
            Olen myös itseoppinut web-sovelluskehityksen lisäksi myös yhtä ja toista sovelluskehityksen infrapuolelta.
        </p>
        <p>
            Minulla on myös hyvät yhteistyötaidot, sillä olen ohjelmoinut osana tiimiä. 
            Olen nykyään osa ainejärjestömme webbitiimiä ja olin viime syksynä vastuussa pelin kehittämisestä.
        </p>
        <p>
            Tavoitteenani on saada kokemusta henkilökohtaisia projekteja suurempien sovellusten kehityksestä ja
            kosketusta ammattimaisen sovelluskehityksen maailmaan.
        </p>
    </ContentElement>
}

export function Portfolio () {
    return <ContentElement className="portfolio">
        <h1>Portfolio</h1>
        <Sikapeli />
        <CVSivu />
    </ContentElement>
}

export function Teknologiat () {
    return <ContentElement className="teknologiat">
        <h1>Teknologiaosaaminen</h1>
        <h2>Kielet</h2>
        <p>JavaScript, Scala, Python, TypeScript</p>
        
        <h1>Kurssit</h1>
        <Fullstackopen />
        <Ohjelmointi_1 />
        <PCEPPCAP />

        <h1>Sertifioinnit</h1>
        <Sertifikaatti img="AZ-900.png" name="Azure Fundamentals"
            verify="https://www.credly.com/badges/cf346ebf-5e2c-49ee-8a52-4caf8d0cd3ea/public_url">
            <p>Microsoft Certiefied: Azure Fundamentals</p>
        </Sertifikaatti>
        <Sertifikaatti img="DP-900.png" name="Azure Data Fundamentals"
            verify="https://www.credly.com/badges/341872ac-7d18-430b-b451-a7c3b631466c/public_url">
            <p>Microsoft Certified: Azure Data Fundamentals</p>
        </Sertifikaatti>
        <Sertifikaatti img="pcep-30-01.png" name="pcep-30-01"
            verify="https://www.credly.com/badges/f257df21-8a75-4f7c-8faa-0830af6faf63/public_url">
            <p>PCEP - Certified Entry-Level Python Programmer</p>
        </Sertifikaatti>
        
    </ContentElement>
}

export function Harrastukset () {
    return <ContentElement className="harrastukset">
        <h1>Harrastukset</h1>
        <p>
            Harrastan kuntosalin lisäksi vaeltamista. Olenkin käynyt useilla vaelluksilla vuodessa
            viimeisen kolmen vuoden ajan mm. Kilpisjärvellä, Kuusamossa ja Pallaksella. Seuraava pidempi
            vaellus sijoittuu toivottavasti Norjaan tai Ruotsin lappiin. 
        </p>
        <p>
            Lisäksi ykkään lasketella, laittaa ruokaa ja lukea. Olen tällä hetkellä myös kiinnostunut
            Rust-kielestä, mutten ole vielä kokeillut käyttää sitä.
        </p>
    </ContentElement>
}

export function Työkokemus () {
    return <ContentElement className="työkokemus">
        <h1>Työkokemus</h1>
        <Sijaisuus />
        
        <Yrittäjä />
    </ContentElement>
}

export function Kielitaito () {
    return <ContentElement className="kielitaito">
        <h1>Kielitaito</h1>
        <div className="info-container">
            <p className="language">suomi</p>
            <p className="ability">äidinkieli</p>
        </div>
        <div className="info-container">
            <p className="language">englanti</p>
            <p className="ability">erinomainen</p>
        </div>
    </ContentElement>
}