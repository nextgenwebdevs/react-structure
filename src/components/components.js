import React, { Component } from 'react'
/**
 * Just a custom loader for Home Page, that over rides the default Loader
 * It can be used with the keyword Loader appended to the component name, like in given example our Home page component is 'Home' so we will put 'HomeLoader' as our custom loader component to override on home page.
 * */
class Loading extends Component {
    render() {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <div className="loader">Custom Loader</div>
                    </div>
                </section>
            </div>
        )
    }
};



const components = {
    Home:import('../components/Home/Home'),
    HomeLoader:Loading,
    Contact:import('../components/Contact/Contact'),
    Blog:import('../components/Blog/Blog'),
    BlogSingle:import('../components/Blog/BlogSingle'),
    MemberDetails:import('../components/Member/MemberDetails'),
    MembersListing:import('../components/Member/MembersListing'),
    WorksListing:import('../components/Works/WorksListing'),
    WorkDetails:import('../components/Works/WorkDetails'),
};

export default components;