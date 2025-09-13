import logo from './logo.svg';
import './App.css';


function App() {
  const name = "Max";
  const alt = "Maltese dog";
  const favoriteSite = {
    title: "Google",
    url: "https://www.google.com/"
  };
  const x = 6;
  const y = 7;
  const suma = x + y;
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>Welcome</p>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRq_yQwkfhlDxaOZQiQ67UKyTrIwmiRf_rk16dt3idDA0tbRCEL442lrPbU4Unc-kXTOTYtMSP8bxGtkTU78jf7DI9oNoclxU1s4iDfqo" alt={alt} />
        <a href={favoriteSite.url}>
          {favoriteSite.title}
        </a>
        <p>Сума: {suma}</p>
        <ul>{colors.map((color) => <li>{color}</li>)}</ul>
      </header>
    </div>
  );

}

export default App;
