import { React, useState, useEffect } from 'react'
import Unsplash from '../api/Unsplash'
import ImgData from './ImgData';
const GetImg = () => {
    const [myImg, setmyImg] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await Unsplash.get('/photos')
            console.log(response)
            setmyImg(response.data)
        }
        fetchData();
    }, [])
    return (
        <>
            <ImgData imagelist={myImg}/>
        </>
    )
}

export default GetImg