import { ExpandingItem, Sikapeli, CVSivu, Sijaisuus, Yrittäjä, Fullstackopen, Ohjelmointi_1, PCEPPCAP, Tietokannat } from "./expandingItem"
import { Sertifikaatti } from "./sertifikaatti"
import '../styles/content.css'


function ContentElement (props) {
    return <div className="content-element">
        {props.children}
    </div>
}

export function Koulutus ({language : l}) {
    return <ContentElement className="koulutus">
        <h1>{l === 'fi' ? 'Koulutus' : 'Education'}</h1>
        <ExpandingItem
            name={l === 'fi' ? "Tuotantotalouden kandidaattiopinnot" : 'Industrial Engineering and Management'}
            peekInfo="2021 ->" peekName={l === 'fi' ? "Aalto-yliopisto" : 'Aalto-Univeristy'}>
            <div className="info-container">
                <p className="school">{l === 'fi' ? 'Keskiarvo' : 'GPA'}</p>
                <p className="year">5.0</p>
            </div>
            <div className="info-container">
                <p className="school">{l === 'fi' ? 'Opintopisteet' : 'Credits'}</p>
                <p className="year">25</p>
            </div>
        </ExpandingItem>
        <ExpandingItem
            name={l === 'fi' ? "Lukio / Ylioppilastutkinto" : 'High school'}
            peekName="Kuopion Klassillinen Lukio"
            peekInfo="2018-2020">
            <h2>{l === 'fi' ? 'Ylioppilastutkinto' : 'Matriculation examination results'}</h2>
            <div className="info-container">
                <p className="school">{l === 'fi' ? 'Pitkä matematiikka' : 'Mathematics (advanced syllabus)'}</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">{l === 'fi' ? 'Fysiikka' : 'Physics'}</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">{l === 'fi' ? 'Kemia' : 'Chemistry'}</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container"> 
                <p className="school">{l === 'fi' ? 'Äidinkieli' : 'Finnish'}</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">{l === 'fi' ? 'Pitkä englanti' : 'English'}</p>
                <p className="year">Laudatur</p>
            </div><div className="info-container">
                <p className="school">{l === 'fi' ? 'Biologia' : 'Biology'}</p>
                <p className="year">Laudatur</p>
            </div>        
        </ExpandingItem>

    </ContentElement>
}

export function Profiili ({language : l}) {
    return l === 'fi' ? <ContentElement className="profiili">
        <h1>Profiili</h1>
        <p>
            Olen kaikesta teknologiasta ja softasta kiinnostunut Tuotantotalouden opiskelija, jolla riittää
            harrastuneistuutta ja itseohjautuvuutta. Esimerkiksi yrittäjänä toimiminen vaati paljon oma-aloitteisuutta.
        </p>
        <p>
            Minulla on myös hyvät yhteistyötaidot. Olen esimerkiksi osallistunut aktiivisesti yhteistyöprojekteihin, kuten 
            ainejärjestömme webbitiimiin, Slushiin ja pelinkehitykseen fuksijuhliamme varten, josta olin viime syksynä vastuussa.
            Webbitiimissä tällä hetkellä rakennan Cypress-integraatiota CI/CD-putkeen.
            Tuotantotalouden opinnot myös sisältävät paljon ryhmä- ja projektitöitä.
        </p>
        <p>
            Tavoitteenani on saada kokemusta henkilökohtaisia projekteja suurempien sovellusten kehityksestä ja
            kosketusta ammattimaisen sovelluskehityksen maailmaan.
        </p>
    </ContentElement>
    : <ContentElement className="profiili">
        <h1>Profile</h1>
        <p>
            I am an Industrial Engineering and Management student whose interested in all things tech. I can work 
            independently and take initiative, for example I was an entrepreneur for two summers.
        </p>
        <p>
            I also have good teamwork skills. I have actively participated in group projects such as developing
            a game for our freshmen party and Slush. I am also part of our student guilds web-team. At the moment I am
            integrating Cypress devcontainers to our CI/CD pipeline.
            IEM studies also include alot of groupwork and projects.
        </p>
        <p>
            My goal is to get more concrete experience and professional experience working in larger projects
            and in bigger teams. 
        </p>
</ContentElement>
}

export function Portfolio ({language : l}) {
    return <ContentElement className="portfolio">
        <h1>Portfolio</h1>
        <Sikapeli language={l} />
        <CVSivu language={l} />
    </ContentElement>
}

export function Teknologiat ({language : l}) {
    return <ContentElement className="teknologiat">
        <h1>{l === 'fi' ? 'Teknologiaosaaminen' : 'Technologies'}</h1>
        <h2>{l === 'fi' ? 'Kielet' : 'Languages'}</h2>
        <p>JavaScript, Scala, Python, TypeScript</p>
        
        <h1>{l === 'fi' ? 'Kurssit' : 'Courses'}</h1>
        <Fullstackopen language={l} />
        <Ohjelmointi_1 language={l} />
        <PCEPPCAP language={l} />
        <Tietokannat language={l} />

        <h1>{l === 'fi' ? 'Sertifioinnit' : 'Certifications'}</h1>
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

export function Harrastukset ({language : l}) {
    return l === 'fi' ? <ContentElement className="harrastukset">
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
    : <ContentElement className="harrastukset">
        <h1>Hobbies</h1>
        <p>
            My hobbies are lifting weights and hiking / trekking. I have been on several hikes 
            over the last few years, mostly in the Finnish Lapland.
        </p>
        <p>
            I also enjoy skiing, cooking and reading. Also my interest in tech could be considered
            a hobby as well, since I like to tinker around with little projects. At the moment I am 
            interested in trying Rust.
        </p>
    </ContentElement>
}

export function Työkokemus ({language : l}) {
    return <ContentElement className="työkokemus">
        <h1>{l === 'fi' ? 'Työkokemus' : 'Employment'}</h1>
        <Sijaisuus language={l} />
        <Yrittäjä language={l} />
    </ContentElement>
}

export function Kielitaito ({language : l}) {
    return <ContentElement className="kielitaito">
        <h1>{l === 'fi' ? 'Kielitaito' : 'Language skills' }</h1>
        <div className="info-container">
            <p className="language">{l === 'fi' ? 'suomi' : 'Finnish' }</p>
            <p className="ability">{l === 'fi' ? 'äidinkieli' : 'Native' }</p>
        </div>
        <div className="info-container">
            <p className="language">{l === 'fi' ? 'englanti' : 'English' }</p>
            <p className="ability">{l === 'fi' ? 'erinomainen' : 'Excellent' }</p>
        </div>
    </ContentElement>
}