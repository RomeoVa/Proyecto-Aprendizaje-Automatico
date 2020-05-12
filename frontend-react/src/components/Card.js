import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';


const Card = (props) => {

	var img = { 
		backgroundImage: `url(${props.row.image})`,
		height:'100%',
		width:'100%',
		backgroundPosition:'center center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
        position: 'relative',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 255, 255, 0.25)'
	};
	
    return (
      <>
            <a href='top-by'>
                <div className='mainCardDiv'>
                    <div style = {img} className='hoverImage'></div>

                    <div className='Galery-textDiv'>
                        <Grid container direction="column" justify="space-between" alignItems="flex-start" style={{padding: '1em', textAlign: 'left', height: '100%'}}>
                            <Grid item>
                                <h1 className='titulo'>{props.row.name}</h1>
                                <p className='especialidad'>{props.row.year}</p>
                            </Grid>
                            <Grid item>
                                <h1 className='especialidad'>{props.row.type}</h1>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </a>
      </>
    );
  
}


export default Card;