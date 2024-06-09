import { Container } from "./common/styles"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (

    <Container>
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </Container>
  )
}

export default App
