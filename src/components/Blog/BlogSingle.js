import React, { Component } from 'react'
import './Blog.css'
import ReactMarkdown from 'react-markdown'
import Button from './../../ui/NavButton/NavButton'
import axios from 'axios';

class BlogSingle extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
            markdownSrc: [
                '# Testing single page',
                '\n* React app loads faster',
                '\n* Load only the component that is needed and preload the others\n',
                '\n## A quote\n\n<blockquote>\n    A man who splits his code ',
                'is a wise man.\n</blockquote>\n\n## How about some code?\n',
                '```js\nimport React, { Component } from \'react\';\nimport asyncComponent from \'./AsyncComponent\'',
                '\n\nimport {\n' +
                '    BrowserRouter as Router,\n' +
                '    Route,\n' +
                '    Switch,\n' +
                '    Link\n' +
                '} from \'react-router-dom\'\n```\n\n\n'
            ].join(''),

            htmlMode: 'raw'
        };
        
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
                .then((res)=>{

                });
    }
    render () {
        return (
            <div className="container">
                <ReactMarkdown source={this.state.markdownSrc} />
                <Button name="Back" link="/blog" />
            </div>
        )
    }
}

export default BlogSingle