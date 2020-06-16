import Axios from 'axios';
import * as Config from './../constants/config';
export default function CallApi( url, method, body ) {
    return (
        Axios( {
            method: method
            , url: `${Config.CONFIG_URL}/${url}`
            , data: body
        } ).catch( err => {
            console.log( err )
        } )
    )
}
