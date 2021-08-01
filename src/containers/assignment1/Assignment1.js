import React, { useState, useEffect } from 'react'
import '../assignment1/assignment1.css';
import { Card, Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import { GrAdd } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';


function Assignment1() {
    console.log("assignement1");
    var data;
    if (localStorage.getItem('task')) {
        console.log("iff");
        data = JSON.parse(localStorage.getItem('task'));
    } else {
        localStorage.setItem('task', JSON.stringify([]));
        data = [];
    }
    
        console.log({ data });
        const [inputValue, setInputValue] = useState('');
        const [taskList, setTaskList] = useState(data);
        const [id, setId] = useState(1001);
        const [showHide, setShowHide] = useState(false);
        const [activeTaskContent, setActiveTaskContent] = useState('');
        const [activeTaskId, setActiveTaskId] = useState(null);

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                addNewTask()
            }
          }

        useEffect(() => {
            localStorage.setItem('task', JSON.stringify(taskList));
        }, [taskList])

        const onChangeHandler = (event) => {
            setInputValue(event.target.value);
        }

        const handleClose = () => {
            setShowHide(prev => !prev);
        }


        const addNewTask = () => {

            setId(prevId => prevId + 1);
            setTaskList(prevValue => {
                let newData = {};
                newData['id'] = id;
                newData['tasks'] = inputValue;
                return (
                    [...taskList,
                        newData]
                )
            }
            )
            setInputValue('');
        }

        const saveHandler = (event) => {
            taskList[activeTaskId].tasks = activeTaskContent;
            handleClose();
        }
        const editTask = (event) => {
            setActiveTaskContent(event.target.value)
        }
        const editTaskHandler = (event) => {
            let objId = Number(event.target.id);
            handleClose();
            setActiveTaskContent(taskList[objId].tasks);
            setActiveTaskId(objId);
        }
        const deleteTask = (event) => {
            const id = Number(event.target.id);
            setTaskList(taskList.filter(item => item.id !== id))
        }
        return (
            <>
                <Container>
                    <Row>
                        <h4 style={{marginTop:'1%'}}>Total Tasks:- {taskList.length}</h4>
                    </Row>
                    <br />
                    <Row>
                        <Col xs md lg="10">
                            <input type="text" className="input_box" value={inputValue}  placeholder="Type task here..." onKeyPress={handleKeyPress} defaultValue="" onChange={onChangeHandler} />
                        </Col>
                        <Col xs md lg="2">
                            <Button variant="success" onClick={addNewTask}>Add New</Button>
                        </Col>

                    </Row>
                </Container>
                <hr />
                <Container style={{minHeight:'10vh'}}>
                    <div className="tasks_container">
                        {
                            (taskList.length > 0) ? (
                                taskList.map((val, index) => {
                                    return (
                                        <div key={index}>
                                            <div key={val.id} className="items_container">
                                                <input type="text" className="task_input_box" value={val.tasks} defaultValue="" disabled />

                                                <Button variant="primary" id={index} onClick={editTaskHandler}>Edit</Button>


                                                <Button variant="danger" id={val.id} onClick={deleteTask}>Delete</Button>


                                            </div>
                                            <br />
                                        </div>
                                    );
                                })
                            ) : (<div style={{ textAlign: 'center' }}>Nothing to show</div>)
                        }
                    </div>
                </Container>
                <Modal show={showHide} size="lg" onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" className="task_input_box" value={activeTaskContent} onChange={editTask} defaultValue="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveHandler}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    export default Assignment1
