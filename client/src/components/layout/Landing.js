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
                    if (res.data.buyFlag === 'true') {
                        Swal.fire(
                            'You should buy it',
                            'Last update on ' + res.data.timestamp,
                            'success'
                        ).then(function () {
                            window.location.reload();
                        });
                    } else {
                        Swal.fire(
                            'You should not buy it',
                            'Last update on ' + res.data.timestamp,
                            'error'
                        ).then(function () {
                            window.location.reload();
                        });
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
                    </select>
                </div>
                <button className="btn">OK</button>
            </form>
        </section>
    );
};

export default Landing;
