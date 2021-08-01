import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { COLUMNS } from './columns';
import RenderTable from './RenderTable';
import '../assignment2/assignment2.css';

const base_url = "https://reqres.in/api/users?page=";

function Assignment2() {
    const [apiData, setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [canPreviousPage,setCanPreviousPage] = useState(true);


    const apiCall = () => {
        axios.get(`${base_url}${currentPage}`)
            .then((res) => {
                const response = res.data;
                console.log(response.data);
                setApiData(response.data);
                setIsLoading(!isLoading);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const nextPageHandler = () => {
        
        setCurrentPage(prevPage => prevPage + 1)
        console.log({currentPage})
        setCanPreviousPage(false)
        setIsLoading(!isLoading);
    }
    
    const  previousPageHandler = () => {
        console.log({currentPage})
        if (currentPage === 1 ) {
            setCurrentPage(1)
            setCanPreviousPage(true)
        }else
        {
            setCurrentPage(prevPage => prevPage - 1)
            setIsLoading(!isLoading);
        }
        
    }
    
    useEffect(() => {
        apiCall()
        if(currentPage === 1) {
            setCanPreviousPage(true)
        }       
    }, [currentPage])

    
    if (isLoading) {
        return <div className="table_container">Loading...</div>;
    }
    return (
        <div className="table_container">
            <br/>
            <RenderTable columnsData={COLUMNS} canPreviousPage={canPreviousPage} currentPage={currentPage} nextPageHandler={nextPageHandler} previousPageHandler={previousPageHandler} value={apiData} />
        </div>
    )
}

export default Assignment2
