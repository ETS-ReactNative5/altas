
import React from 'react';
import './index.css';
import phone from './phone.png';


export default function MyPhone() {
  return (

    <div>
    <a class="phone_call" href="tel:+380637389193">

        <img src={phone} alt="phone"/>
        
        </a>

        </div>

    );
}
