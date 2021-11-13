import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
    
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'e6aaefbca7msh9096a04f78b3d29p1138a7jsn77e40b8589ed'
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}