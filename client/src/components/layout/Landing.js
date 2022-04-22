import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Landing = () => {
    const [formData, setFormData] = useState({
        coinType: 'BTC',
    });

    const { coinType } = formData;

    const onChange = (e) => setFormData({ coinType: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const data = {
            coinType,
        };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            //const body = JSON.stringify(data);
            //console.log(da);

            await axios
                .post('/api/coins/getOutcome', data, config)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.buyFlag == 'true') {
                        Swal.fire(
                            'You should buy it',
                            'Last update on ' + res.data.timestamp,
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'You should not buy it',
                            'Last update on ' + res.data.timestamp,
                            'success'
                        );
                    }
                });
        } catch (error) {
            //console.error(error.data);
        }
    };

    return (
        <section className="landing">
            <div className="title">
                <h1> Should I Buy It?</h1>
            </div>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="select">
                    <h1> Please select the coin here:</h1>
                    <select
                        id="coins"
                        onChange={(e) => onChange(e)}
                        value={coinType}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                    </select>
                </div>
                <button className="btn">OK</button>
            </form>
        </section>
    );
};

export default Landing;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>index</title>
//     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//     <script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script>
// </head>
// <body>
//     <div class="title">
//         <h1> Should I Buy?</h1>
//     </div>

//     <div class="select">
//         <h1> Please select the coin here:</h1>
//         <select id="coins"
//             <option value="BTC">BTC</option>
//             <option value="ETH">ETH</option>
//             <option value="LTC">LTC</option>
//         </select>

//     </div class="container">
//         <button class="btn" onclick="process()">OK</button>
//         <script>
//             async function process() {
//                 //TODO: call backend to get the result output
//                 //var output = 'YES';
//             try{
//                 var coin = document.getElementById('coins');
//                 var selec_index = coin.selectedIndex;
//                 var coin_type = coin.options[selec_index].text;
//                 const config = {
//                   headers: {
//                     'Content-Type':'application/json'
//                   }
//                 }
//                 await axios
//                     .post(
//                     'api/coins/getOutcome',
//                     {coinType: coin_type},
//                     config
//                     )
//                     .then((res) => {
//                     swal('Result ' + res.body + '...');
//                     });
//             } catch (err) {
//                 console.log(err);
//             }
//                     //swal('processing on ' + coin_type + '...');
//                 //document.getElementById('result').textContent = output;
// }
//         </script>

//     <div>
// </body>
// </html>
