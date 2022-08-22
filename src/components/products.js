import React, { useState, useEffect, useContext } from "react";
import '../style/product.css'
// import axios from 'axios'
import Footer from '../components/footer'
import { Link } from "react-router-dom";
import CartContext from '../context'
import ReactPaginate from 'react-paginate'

function Product() {
    const { add } = useContext(CartContext)
    let [data, setData] = useState([]);
    useEffect(() => {
        const fakeStore = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const js = await res.json()
            setData(js);
        }
        fakeStore();
    }, []);
    const sendFunc = (id) => {
        add(id)
    }
    /////////////////////////////////////////////////////////////////////////////////////// PAGINATION
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    //////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <section className="d-flex justify-content-start flex-wrap justify-content-around m-5" id="sec-pro">
                {
                    currentItems.map(value => {
                        return (
                            <div className="card d-flex  justify-content-center m-2 p-3 border-dark-1 " id="box-1" >
                                <img className="card-img-top mb-4" src={value.image} alt="s" id="img-product" />
                                {/* <div className="card-body d-flex felx-column justify-content-center"> */}
                                <h5 className="card-title ">{value.title}</h5>
                                <p className="card-text ">{value.price} $</p>
                                <Link to='/productPage' className="btn btn-primary" onClick={() => sendFunc(value.id)}>خرید</Link>
                                {/* </div> */}
                            </div>
                        )

                    })}
            </section>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                disabledClassName='page-link'
                previousClassName='page-link'
                nextClassName='page-link'
            />
            <Footer />
        </>
    );
}

export default Product;
