import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import NotFound from './../components/NotFound/NotFound';
import Loading from '../components/Loading/Loading';
import Loadable from 'react-loadable';
import pageComponents from '../components/components';
/**
 * This helps us set a kind of dynamic routing wherein we need to just specify the routes and their components
 * A single route will be an array of this kind:
 * [ 'url-for-page','ComponentName']
 * */
let routes = [
    ['home','Home'],
    ['contact','Contact'],
    ['members','MembersListing'],
    ['member/:username','MemberDetails'],
    ['works','WorkDetails'],
    ['work/:name','WorksListing'],
    ['blog/:id','BlogSingle'],
    ['blog','Blog'],
    ['rants','Rants']
];
class AppRoute extends Component {
    routesList(){
        let k = 0;
        return routes.filter(r=>pageComponents.hasOwnProperty(r[1])).map(r=>{
            let loadingIndicator = pageComponents.hasOwnProperty([r[1]+'Loader']) ? pageComponents[r[1]+'Loader'] : Loading;
            return <Route path={'/'+r[0]} key={k++} component={
                Loadable({
                    loader: () => pageComponents[r[1]],
                    loading: loadingIndicator
                })
            } />
        });
    }
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Switch>
                    {this.routesList()}
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
export default AppRoute;