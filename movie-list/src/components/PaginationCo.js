import React from 'react'
import './paco.css'
import { Pagination } from 'react-bootstrap';
//this component take the pge count from the app component
// and display the Pagination bar with limit of 10 pages
export default function PaginationCo(props) {
    const pageLink = []
    for (let i = 1; i <= 10; i++) {
        pageLink.push(<Pagination.Item className="pagination" active={props.currentPage === i ? 'active' : ''} key={i} onClick={() => props.nextPage(i) || props.nextPageMain(i)}>{i}</Pagination.Item>)
    }
    return (
        <div>
            <Pagination className="pg">
                {props.currentPage > 1 ? <Pagination.Prev onClick={() => props.nextPage(props.currentPage - 1) || props.nextPageMain(props.currentPage - 1)}> {`<`} </Pagination.Prev> : ''}
                {pageLink}
                {props.currentPage >= 1 ? <Pagination.Next onClick={() => props.nextPage(props.currentPage + 1) || props.nextPageMain(props.currentPage + 1)}> {`>`}</Pagination.Next> : ''}
            </Pagination>
        </div>
    )
}

