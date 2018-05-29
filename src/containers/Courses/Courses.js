import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Courses.css';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <header>Amazing Udemy Courses</header>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link key={course.id} to={{pathname: this.props.match.url + '/course'}} > 
                                <article className="Course" >
                                {course.title}</article>
                                </Link> 
                                    )
                            
                           
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;