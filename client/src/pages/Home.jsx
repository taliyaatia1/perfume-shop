
import Layout from "../Layouts/Layouts"

import Product from "../components/Products"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productListAction } from "../Redux/Action/Product"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const brands =  ["Tom Ford", "Chloe","Prada", "CHANEL", "Roberto Cavalli", "Jo Malone London", "MontBlanc", "Creed"]


const Home = () => {
    const[productsCopy, setProductsCopy] = useState([])
    const productListReducer = useSelector((state) => state.productListReducer);
    const { loading, error, products } = productListReducer;
    const [showBrand,setShowBrand] = useState(false)
    const [showGender,setShowGender] = useState(false)
    const [showPriceRange, setShowPriceRange] = useState(false);


    const dispatch = useDispatch();

    const [genders,setGenders] = useState(new Map([["Men", true], ["Women", true], ["Unisex", true]]))
    const [selectedBrands,setSelectedBrands] = useState(new Map(brands.map(b => ([b, true]))))

    const [value, setValue] =  useState([85, 320]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
  

    const toggleGender = (gender, state) => {

        genders.set(gender,state)
        setGenders(new Map(genders.entries()))
    }
    const toggleBrand = (brand, state) => {

        selectedBrands.set(brand,state)
        setSelectedBrands(new Map(selectedBrands.entries()))
    }
  
    useEffect
    (() => {
  
      if(products && products.length >0) {
        setProductsCopy(products)
      }
    },[products])

    const [search,setSearch] = useState()

    useEffect
    (() => {
  
      if(products && products.length >0) {
        setProductsCopy(products.filter(p => {
            if(search) {
                return   genders.get(p.gender) && p.name.toLowerCase().includes(search)
                && p.price >= value[0] && p.price <= value[1]
                && Array.from(selectedBrands.entries()).filter(([b, selected]) => {
                    if(selected)
                        return p.name.toLowerCase().includes(b.toLowerCase())
                    return false
                }).length > 0
            }
            else {
                return   genders.get(p.gender)  && p.price >= value[0] && p.price <= value[1]
                && Array.from(selectedBrands.entries()).filter(([b, selected]) => {
                    if(selected)
                        return p.name.toLowerCase().includes(b.toLowerCase())
                    return false
                }).length > 0
            }
          
        }))
      }
    },[genders,products, value,selectedBrands])
  
    useEffect(() => {
      dispatch(productListAction());
    }, [dispatch]);


    return (<Layout>
      <center>
      <input style={{
            padding:'1rem',
            border: '1px solid lightgray'
        }} placeholder="Search something.." onChange={(e) => {
            if(e.target.value) {
                setProductsCopy(products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase())))
            }
            else {
                setProductsCopy(products)
            }
            setSearch(e.target.value)
        }}></input> 
        
        <div className="p-2 border-[1px] border-[lightgray] my-3">
  <div>
    <h5 className="font-bold" style={{ fontSize: '20px' }}>
      Sort by
    </h5>
  </div>

  <div className="flex flex-row items-center justify-center gap-4"> {/* New flex container for alignment */}
    {/* Gender Section */}
    <div className="flex flex-col items-center gap-2 justify-center ">
      <h4 className="font-bold" onClick={() => setShowGender(e => !e)}>Gender</h4>
      {showGender && (
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row items-center gap-2">
            <label>Male</label>
            <input type="checkbox" checked={genders.get("Men")} onChange={e => toggleGender("Men", e.target.checked)} />
          </div>
          <div className="flex flex-row items-center gap-2">
            <label>Female</label>
            <input type="checkbox" checked={genders.get("Women")} onChange={e => toggleGender("Women", e.target.checked)} />
          </div>
          <div className="flex flex-row items-center gap-2">
            <label>Unisex</label>
            <input type="checkbox" checked={genders.get("Unisex")} onChange={e => toggleGender("Unisex", e.target.checked)} />
          </div>
        </div>
      )}
    </div>

    {/* Brand Section */}
    <div className="flex flex-col items-center gap-2 justify-center ">
      <h4 className="font-bold" onClick={() => setShowBrand(e => !e)}>Brand</h4>
      {showBrand && (
        <div className="grid grid-cols-4 gap-2 place-items-center pb-6 ">
          {React.Children.toArray(selectedBrands.entries().map(([b, selected]) => (
            <div className="flex flex-row items-center gap-2 ">
              <label>{b}</label>
              <input type="checkbox" checked={selected} onChange={e => toggleBrand(b, e.target.checked)} />
            </div>
          )))}
        </div>
      )}
    </div>

    {/* Price Range Section */}
    <div className="flex flex-col items-center gap-2 justify-center mt-5 -mt-0.5">
  <h4 className="font-bold" onClick={() => setShowPriceRange(e => !e)}>Price range</h4>
  {showPriceRange && (
    <div className="flex flex-col items-center gap-2 ">
      <Slider
        min={85}
        max={320}
        className="max-w-[500px] mx-auto"
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      <span>{value[0]}$ - {value[1]}$</span>
    </div>
  )}
</div>
  </div>
</div>

         
      </center>
        <Product products={productsCopy}></Product>
    </Layout>)

    



}


export default Home;