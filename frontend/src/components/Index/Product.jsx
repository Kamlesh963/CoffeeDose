import React, { useEffect, useState } from 'react'
import '../CSS/Product.css'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import product from '../Product.json'
import Category from './Category'


function Product() {
 
    const [category, setCategory] = useState([
        {
            "name": "Oleato™",
            "CoffeeId": "Oleato"
        },
        {
            "name": "Americanos",
            "CoffeeId": "Americanos"
        },
        {
            "name": "Brewed Coffees",
            "CoffeeId": "BrewedCoffees"
        },
        {
            "name": "Cappuccinos",
            "CoffeeId": "Cappuccinos"
        },
        {
            "name": "Espresso Shots",
            "CoffeeId": "EspressoShots"
        },
        {
            "name": "Flat Whites",
            "CoffeeId": "FlatWhites"
        },
        {
            "name": "Lattes",
            "CoffeeId": "Lattes"
        },
        {
            "name": "Macchiatos",
            "CoffeeId": "Macchiatos"
        },
        {
            "name": "Mochas",
            "CoffeeId": "Mochas"
        },
        {
            "name": "Chai Teas",
            "CoffeeId": "ChaiTeas"
        },
        {
            "name": "Black Teas",
            "CoffeeId": "BlackTeas"
        },
        {
            "name": "Green Teas",
            "CoffeeId": "GreenTeas"
        },
        {
            "name": "Herbal Teas",
            "CoffeeId": "HerbalTeas"
        },
        {
            "name": "Hot Chocolates",
            "CoffeeId": "HotChocolates"
        },
        {
            "name": "Juice",
            "CoffeeId": "Juice"
        },
        {
            "name": "Steamers",
            "CoffeeId": "Steamers"
        },
        {
            "name": "Coffee Frappuccino®",
            "CoffeeId": "CoffeeFrappuccino"
        },
        {
            "name": "Creme Frappuccino®",
            "CoffeeId": "CremeFrappuccino"
        },
        {
            "name": "Cold Brews",
            "CoffeeId": "ColdBrews"
        },
        {
            "name": "Nitro Cold Brews",
            "CoffeeId": "NitroColdBrews"
        },
        {
            "name": "Iced Americano",
            "CoffeeId": "IcedAmericano"
        },
        {
            "name": "Iced Coffees",
            "CoffeeId": "IcedCoffees"
        },
        {
            "name": "Iced Shaken Espresso",
            "CoffeeId": "IcedShakenEspresso"
        },
        {
            "name": "Iced Flat Whites",
            "CoffeeId": "IcedFlatWhites"
        },
        {
            "name": "Iced Lattes",
            "CoffeeId": "IcedLattes"
        },
        {
            "name": "Iced Macchiatos",
            "CoffeeId": "IcedMacchiatos"
        },
        {
            "name": "Iced Mochas",
            "CoffeeId": "IcedMochas"
        }
    ])
   
    return (
        <>
            <HomeNavbar />
            <div className="container-fluid">
                <div className="background_menu">
                    <h1 className='text-center my-3 background_text_posit'>Menu</h1>
                </div>
            </div>
            <div className="container-fluid mt-3" style={{overflow:'hidden'}}>
                {
                    category?.map((e, i) => (
                        <div className="row m-auto">
                            <div className="col-12 ms-0 ps-0 ms-sm-1 ps-sm-1">
                                <div className="title_coffee">{e.name} </div>
                                <div className="container-fluid px-1 px-sm-2 px-md-3 my-1">
                                    <Category data={e.CoffeeId}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <HomeFooter />
        </>
    )
}

export default Product