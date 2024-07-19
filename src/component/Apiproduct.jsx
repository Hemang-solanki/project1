import React from 'react'

function Apiproduct({arr}) {
  return (
    <div>
          <section className="section" id="products">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Latest Products</h2>
                        <span>Check out all of our products.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">

                {
                    arr.map((el)=>{
                        return (
                            <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={el.imageURL} alt={el.title}/>
                                </div>
                                <div className="down-content">
                                    <h4>{el.title}</h4>
                                    <span>{el.price}</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                <div className="col-lg-12">
                    <div className="pagination">
                        <ul>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li className="active">
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Apiproduct
