import './styles/App.css';
import {
  Page,
  Header,
  Koulutus,
  Profiili,
  Portfolio,
  Teknologiat,
  Harrastukset,
  Työkokemus,
  Kielitaito,
  Footer,
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Page>
          <Profiili />
          <Koulutus />
          <Portfolio />
          <Työkokemus />
          <Kielitaito />
        </Page>
        <Page>
          <Teknologiat />
          <Harrastukset />
        </Page>
      </div>
      <Footer />
    </div>
  );
}

export default App;
 