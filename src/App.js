import './App.css';
import Header from './componentes/Header';
import ProductCategory from './componentes/ProductCategory';
import MainImage from './componentes/MainImage';
import SecondaryImagenText from './componentes/SecondaryImageText';
import Main from './componentes/Main';
import NavigationBarText from './componentes/NavigationBarText';
import FooterText from './componentes/FooterText';
import SectionText from './componentes/SectionText';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavigationBarText />
      <MainImage />
      <SecondaryImagenText />
      <Main />
      <SectionText />
      <ProductCategory />
      <FooterText />
    </div>
  );
}
export default App;
