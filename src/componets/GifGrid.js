import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [imageses, setImages] = useState([])

    // useEffect(() => {
    //     getGits(category)
    //         .then(img => setImages(img))
    // }, [category])

    const { datos: images, loading } = useFetchGifs(category);

    //getGit();
    return (
        <>
            <h2>{category}</h2>
            <div className='card-grid'>

                {loading && <p>Loading...</p>}
                {
                    images.map((img) => <GifGridItem {...img} key={img.id} />)
                }
            </div>
        </>


    )
}
