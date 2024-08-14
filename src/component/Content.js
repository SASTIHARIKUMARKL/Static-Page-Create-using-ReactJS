import React from 'react';
import './Content.css';

const Content=()=>{
    return(
        <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone No:</th>
                <th>City</th>
            </tr>
            <tr>
                <td>Sabari.G</td>
                <td>20</td>
                <td>7708299024</td>
                <td>Karimangalam</td>
            </tr>
            <tr>
                <td>Ramu.V</td>
                <td>20</td>
                <td>9159516097</td>
                <td>Mottur</td>
            </tr>
            <tr>
                <td>Sathis.S</td>
                <td>20</td>
                <td>9025845474</td>
                <td>Erappati</td>
            </tr>
            <tr>
                <td>Sasti HariKumar.KL</td>
                <td>21</td>
                <td>8078109630</td>
                <td>Changaramkulam</td>
            </tr>
        </table>
        <form>
            <input placeholder='UserName :'></input><br></br>
            <input placeholder='Password :'></input><br></br>
            <button>Submit</button>
            <button>Clear</button>
        </form>
        </div>
    );
}
export default Content;