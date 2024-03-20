import React, { useEffect } from 'react'
import Product_Navigation from '../Product_Navigation/Product_Navigation'
import Footer from '../Footer/Footer'
import FooterImageHome from '../Footer/FooterImageHome'
import { Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material'
import HomeBikeImage from '../../../static/HomeBike_image.png';
import '../HomePage/HomePage.css';
import JerseyImage from '../../../static/jerset_Home_Image.png';
import SaleProduct from './SaleProduct'
import { useLocation, useNavigate, useParams } from 'react-router'



const HomePage = () => {
    const bikeFilters = [
        {
            id: 'type',
            name: 'Type',
            options: [
                { value: 'road-bike', label: 'Road Bike' },
                { value: 'time-trial-bike', label: 'Time Trial Bike' },
                { value: 'mountain-bike', label: 'Mountain Bike' },
                { value: 'track-bike', label: 'Track Bike' },
            ]
        },
        {
            id: 'wheelSize',
            name: 'Wheel Size',
            options: [
                { value: 'low-profile-wheel', label: 'Low Profile Wheel' },
                { value: 'mid-profile-wheel', label: 'Mid Profile Wheel' },
                { value: 'high-profile-wheel', label: 'High Profile Wheel' },
                { value: 'disc-wheel', label: 'Disc Wheel' }
            ]
        },
        {
            id: 'brand',
            name: 'Brand',
            options: [
                { value: 'basso', label: 'Basso' },
                { value: 'bmc', label: 'BMC' },
                { value: 'cervelo', label: 'Cervelo' },
                { value: 'giant', label: 'Giant' },
                { value: 'ridley', label: 'Ridley' },
                { value: 'polygon', label: 'Polygon' },
            ]
        }
    ]

    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/cycling/products/Jersey");
    }

    const handleProducts = () => {
        navigate("/ProductsHomePage");
    }


    const handleFilter = (value, sectionId) => {
        const searchParams = new URLSearchParams(location.search);
        let filterValue = searchParams.getAll(sectionId);

        if (value === "") {
            // If the selected value is None, remove the parameter from the URL
            searchParams.delete(sectionId);
        } else {
            if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
                filterValue = filterValue[0].split(",").filter((item) => item != value);
                if (filterValue.length === 0) {
                    searchParams.delete(sectionId);
                }
            } else {
                filterValue.push(value);
            }

            if (filterValue.length > 0) {
                searchParams.set(sectionId, filterValue.join(","));
            }
        }

        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    }

   


    return (
        <div>
            <Product_Navigation />
            <div>
                <div className='bike-section'>
                    <div className='font-bold text-6xl pt-10'>EXPLORE ! THE WORLD OF SPORTS</div>
                    <div className='text-3xl p-5'>Buy your new bike with our no cost EMI option</div>
                    <Button className="rounded-l-md w-[8rem] h-[3rem] " onClick={handleSubmit} style={{ backgroundColor: '#66cdaa', color: 'white', borderRadius: '20px' }}>BUY NOW</Button>
                    <div className="center-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img src={HomeBikeImage} alt='' />
                        <div style={{
                            position: 'absolute',
                            bottom: '-20%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'rgba(255, 255, 255, 1)',
                            padding: '20px',
                            border: '2px solid black',
                            borderRadius: '15px',
                        }}>
                            <div className='font-bold text-4xl'>EXPLORE ! THE WORLD OF SPORTS</div>
                            <div className='flex flex-row'>
                                {bikeFilters.map((filter) => (
                                    <div className='p-6' key={filter.id}>
                                        <h3 className='text-3xl pb-4 text-gray-300'>{filter.name}</h3>
                                        <Box>
                                            <FormControl className='rounded-form-control' sx={{ m: 1, minWidth: 250, borderRadius: '15px' }} size="small">
                                                <InputLabel id={filter.id}>{filter.name}</InputLabel>
                                                <Select
                                                    labelId={filter.id}
                                                    id={filter.id}
                                                    //value={location.search.get(filter.id) || ''}
                                                    onChange={(e) => handleFilter(e.target.value, filter.id)}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {filter.options.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                ))}

                                <div className='pt-20'>
                                    <Button className="rounded-l-md w-[8rem] h-[3rem]"
                                        onClick={handleSubmit} style={{ backgroundColor: '#66cdaa', color: 'white', borderRadius: '20px' }}>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-section pt-20 mt-20'>
                    <div className='mt-20 ml-auto ml-10'>
                        <div className='flex flex-row mx-20 mt-20 pl-30'>
                            <div className='Products-cover-grid w-[26rem] h-[18rem] p-10 m-20 relative' style={{ border: '2px solid black', borderRadius: '10px' }}>
                                <img src={JerseyImage} alt="Image Description" style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    right: '-10%',
                                    transform: 'translate(20%, -30%)',
                                    background: 'rgba(255, 255, 255, 1)',
                                    height: '250px',
                                    width: '250px',
                                }} />

                                <h2 className='pt-12 mt-10 text-left font-semibold text-3xl'>CLOTHING</h2>
                                <p className='pt-3 text-left'> WEAR THE LATEST</p>
                                <div className='pt-3'>
                                    <Button className="rounded-l-md w-[8rem] h-[2rem]"
                                        onClick={handleProducts} style={{ backgroundColor: '#66cdaa', color: 'white', borderRadius: '20px', border: '2px solid black' }}>VIEW MORE</Button>
                                </div>

                            </div>

                            <div className='nutrients-cover-grid w-[26rem] h-[18rem] p-10 m-20 relative' style={{ border: '2px solid black', borderRadius: '10px' }}>
                                <img src={JerseyImage} alt="Image Description" style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    right: '-10%',
                                    transform: 'translate(20%, -30%)',
                                    background: 'rgba(255, 255, 255, 1)',
                                    height: '250px',
                                    width: '250px',
                                }} />

                                <h2 className='pt-12 mt-10 text-left font-semibold text-3xl'>NUTRITIONS</h2>
                                <p className='pt-3 text-left'>GET MAXIMUM RESULTS</p>
                                <div className='pt-3'>
                                    <Button className="rounded-l-md w-[8rem] h-[2rem]" style={{ backgroundColor: '#66cdaa', color: 'white', borderRadius: '20px', border: '2px solid black' }}>VIEW MORE</Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='sales-offers-section scroll-container'>
                    <h1 className='pt-12 mt-10 text-left font-SEMIbold text-4xl px-20'>TOP PRODUCTS ON SALE</h1>
                    <div className=' flex flex-row justify-between mx-20'>
                        {[1, 1, 1, 1].map((saleProduct) => <SaleProduct />)};
                    </div>

                </div>
            </div>
            <FooterImageHome />
            <Footer />
        </div>
    )
}

export default HomePage