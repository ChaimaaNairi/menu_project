import React from 'react'
import { Row, Col } from 'react-bootstrap'
//import Roll from 'react-reveal/Roll';

const Category = ({ filterbyCategory, allCategory }) => {

    //to filter by category
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <>
                    {
                        allCategory.length >= 1 ? (allCategory.map((cat) => {
                            return (
                                <div>
                                    <button onClick={() => onFilter(cat)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">{cat}</button>
                                </div>
                            )
                        })) : <h4>There are no ratings now</h4>
                    }
                </>
            </Col>
        </Row>
    )
}

export default Category