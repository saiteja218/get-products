import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Products() {
    const [products,getProducts]=useState([]);

    useEffect(()=>{
        async function getData(){
            const data=await axios.get('https://fakestoreapi.com/products').then((data)=>data.data)
            console.log(data);
            getProducts(data);
        }
        getData()
    },[]) 

  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
        {
            products.map((product,index)=>{
                return(
                    
                    
                        <Card sx={{ maxWidth: 320,margin:2, display:"inline-block" }} key={index}>
                    <CardMedia
                      sx={{ height: 300, width:300,padding:1 }}
                      image={product.image}
                      title="product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       {product.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                      </Typography>
                      <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        Price: {product.price}
                      </Typography>
                    </CardContent>
                    
                  </Card>
                    
                )

            })
        }
      
    </div>
  )
}
