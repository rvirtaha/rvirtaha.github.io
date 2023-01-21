import { ExpandingItem, Sikapeli, CVSivu, Sijaisuus, Yrittäjä, Fullstackopen, Ohjelmointi_1, PCEPPCAP } from "./expandingItem"
import { Sertifikaatti } from "./sertifikaatti"
import '../styles/content.css'

function ContentElement (props) {
    return <div className="content-element">
        {props.children}
    </div>
}

export function Koulutus () {
    return <ContentElement className="koulutus">
        <h1>Koulutus</h1>
        <ExpandingItem
            name="Tuotantotalouden kandidaattiopinnot"
            peekInfo="2021 ->" peekName="Aalto-yliopisto">
            <div className="info-container">
                <p className="school">Keskiarvo</p>
                <p className="year">5.0</p>
            </div>
            <div className="info-container">
                <p className="school">Opintopisteet</p>
                <p className="year">25</p>
            </div>
        </ExpandingItem>
        <ExpandingItem
            name="Lukio / Ylioppilastutkinto"
            peekName="Kuopion Klassillinen Lukio"
            peekInfo="2018-2020">
            <div className="info-container">
                <p className="school">Pitkä matematiikka</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">Fysiikka</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">Kemia</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container"> 
                <p className="school">Äidinkieli</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">Pitkä englanti</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">Biologia</p>
                <p className="year">Laudatur</p>
            </div>        
        </ExpandingItem>

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