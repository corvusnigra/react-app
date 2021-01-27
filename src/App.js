import './App.css';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Layout from "./components/LayoutComponent";

import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.jpg'

function App() {
    return (
        <>
            <Header
                title='This is title'
                descr='This is Description!'
            />
            <Layout
               title='Layout 1'
               desc='description layout 1'
               id='layout1'
               urlBg={bg1}
            />
            <Layout
                title='Layout 2'
                desc='description layout 2'
                id='layout2'
                colorBg='green'
            />
            <Layout
                title='Layout 3'
                desc='description layout 3'
                id='layout3'
                urlBg={bg3}
            />
            <Footer/>
        </>
    );
}

export default App;
