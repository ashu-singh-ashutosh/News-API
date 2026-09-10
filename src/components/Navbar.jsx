import React, { useState } from 'react'
/* 


https://saurav.tech/NewsAPI/everything/bbc-news.json


*/
const Navbar = ({setcategory}) => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href=""><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="nav-link fs-5  "style={{cursor:'pointer'}} aria-current="page" onClick={()=>setcategory("home")} >Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5 " style={{cursor:'pointer'}}  onClick={()=>setcategory("business")}>business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5" style={{cursor:'pointer'}}   onClick={()=>setcategory("entertainment")}>entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5" style={{cursor:'pointer'}}  onClick={()=>setcategory("general")}>general</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link fs-5" style={{cursor:'pointer'}}  onClick={()=>setcategory("health")}>health</div>
                            </li>
                            <li className="nav-item dropdown fs-5">
                                <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TOPICS
                                </div>
                                <ul className="dropdown-menu">
                                    <li><div className="dropdown-item" style={{cursor:'pointer'}}   onClick={()=>setcategory("science")}>science</div></li>
                                    <li><div className="dropdown-item" style={{cursor:'pointer'}}  onClick={()=>setcategory("sports")} >sports</div></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><div className="dropdown-item" style={{cursor:'pointer'}}  onClick={()=>setcategory("technology")}>technology</div></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar