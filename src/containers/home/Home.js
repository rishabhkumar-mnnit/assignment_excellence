import React from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import Assignment1 from '../assignment1/Assignment1';
import Assignment2 from '../assignment2/Assignment2';
import './home.css';
import Card from './Card';
import { Container } from 'react-bootstrap';

const assignmentList = [
    {
        id:1,
        name:'Assigment 1',
        details:'Todo App.',
        url:'/assignment1'
    },
    {
        id:2,
        name:'Assigment 2',
        details:'Display a list of users.',
        url:'/assignment2'
    }
];
function Home() {
    const linkData =  assignmentList.map((val,index) => {
        return (
            <div key={val.id}>
                <Link  to={val.url} style={{textDecoration:"none"}}><Card  key={val.id} val = {val} /></Link>
            </div>
            
        );
    })
    return (
        <Router>
            <div className="home_container">
                {
                   linkData
                }
            </div>
            <br/>
            <Switch>
                <Route path="/assignment1">                    
                    <Container className="assignment_container">
                        <Assignment1 />
                    </Container>
                        
                    
                </Route>
                <Route path="/assignment2">
                    <Container className="assignment_container">
                        <Assignment2 />
                    </Container>
                    
                </Route>
                </Switch>
        </Router>
        
        
    )
}

export default Home
