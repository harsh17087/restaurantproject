import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


class ServicesComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             details: [
                {srno : 100 , menu :"Idli" , price : 1000, type :"Veg"  },
                {srno : 101 , menu :"Dosa" , price : 1000, type :"Veg" },
                {srno : 102 , menu :"Utpam" , price : 500, type :"Veg" },
                {srno : 103 , menu :"Paneer" , price : 1500, type :"Veg" },
                {srno : 104 , menu :"Naan" , price : 2000, type :"Veg" },
                {srno : 105 , menu :"Vada-Pav" , price : 200, type :"Veg" },
                // {srno : 106 , menu :"Thali" , price : 400, type :"Veg" },
                // {srno : 107 , menu :"Biryani" , price : 800, type :"Non-Veg" },
                // {srno : 108 , menu :"Fish" , price : 700, type :"Non-Veg" },
                // {srno : 109 , menu :"Prawns" , price : 1000, type :"Non-Veg" }
             ]      
        }
    }
    
    
    
    
    
    
    render() {
        
        const {details} = this.state;
        
        return (
            <React.Fragment>
                <h1><u style={{margin:"auto"}}>Menu Details</u></h1>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th >SR. No</th>
                            <th >ITEMS</th>
                            <th >PRICE</th>
                            <th >TYPE</th>
                            

                        </tr>
                    </thead>
                    
                    <tbody>
                        {details.length>0 && details.map((val,index)=>{
                            return (<tr>
                                <td >{val.srno}</td>
                                <td >{val.menu}</td>
                                <td >{val.price}</td>
                                <td >{val.type}</td>
                                
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default ServicesComp

