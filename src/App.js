import HomePage from "./routes/Home";
import {useRouteMatch, Route, Switch, useLocation} from "react-router-dom"
import MenuHeader from "./components/MenuHeaderComponent";
import Footer from "./components/FooterComponent";
import s from './style.module.css'
import cn from 'classnames'
import {Redirect} from 'react-router-dom'
import GamePage from "./routes/Game/routes";


const App = () => {
    const match = useRouteMatch('/');
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';
    return (

        <Switch>
            <Route path="/404" render={() => (
                <h1>404</h1>
            )}/>
            <Route>
                <>
                    <MenuHeader bgActive={isPadding}/>
                    <div className={cn(s.wrap, {
                        [s.isHomePage]: isPadding
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" render={() => (
                                <h1>This is about page</h1>
                            )}/>
                            <Route path="/contact" render={() => (
                                <h1>This is contact page</h1>
                            )}/>

                            <Route render={() => (
                                <Redirect to="/404"/>
                            )}/>
                        </Switch>

                    </div>
                    <Footer/>
                </>
            </Route>

        </Switch>

    )

};

export default App;
