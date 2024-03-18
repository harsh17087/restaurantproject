import {React,useState} from 'react'
import { Outlet } from 'react-router-dom'
import NavigationComp from './NavigationComp'
import FooterComp from './FooterComp'
import CarouselImage from './CarouselImage'
const HomeComp=()=>{
    

    
    return (
        <div>
            <div className='card mx-0 px-0'>
                <div className='card-header m-0 p-0'>
                    <NavigationComp />
                </div>
                <div className='card-body p-0 m-0'>
                    <Outlet/>
                    
                    
                </div>
                <div >
                    <FooterComp/>
                </div>

            </div>
        </div>
    )

}
export default HomeComp
