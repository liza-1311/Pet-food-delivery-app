import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    };

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ zIndex: "10" }}>
                            <img src="golden-retriever.jpg" className="d-block w-100" alt="Golden Retriever" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ zIndex: "20", bottom: '20%', top: 'auto' }}>
                                <form className="d-flex justify-content-center">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="pet.jpg" className="d-block w-100" alt="Pet" />
                        </div>
                        <div className="carousel-item">
                            <img src="eating.jpg" className="d-block w-100" alt="Eating Pet" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container'>
                {
                    foodCat.length > 0
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3' key={data._id}>
                                    <div className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodItem.length > 0
                                            ?
                                            foodItem
                                                .filter(item =>
                                                    item.CategoryName === data.CategoryName &&
                                                    item.name.toLowerCase().includes(search.toLowerCase())
                                                )
                                                .map(filterItems => {
                                                    return (
                                                        <div className="col-12 col-md-6 col-lg-3" key={filterItems._id}>
                                                            <Card
                                                                foodItem={filterItems}
                                                                options={filterItems.options[0]}
                                                                
                                                            />
                                                        </div>
                                                    )
                                                })
                                            : <div>No items found in this category</div>
                                    }
                                </div>
                            );
                        })
                        : <div>No categories found</div>
                }
            </div>
            <div><Footer /></div>
        </div>
    );
}
