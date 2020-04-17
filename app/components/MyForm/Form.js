import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import $ from 'jquery';
import accepted_icon from './checkmark.svg';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_hsjTwTVo',
        e.target,
        'user_gVUee7bxzx7Obe10GOfuU',
      )
      .then(
        result => {
          console.log(result.text);
          document.getElementById('window_container').style.display = 'block';
          /* document.location.reload(true); */

          /* if (document.location.onload = (true)){alert('window onload');} */
        },
        error => {
          console.log(error.text);
        },
      );
  }

  $(document).ready(function() {
    if ($(window).width() < 1201) {
      $('#FormSubmit').attr('value', 'Заказать');
    }
  });

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Предварительный заказ</label>
      <hr />

      <input required type="text" placeholder="Ваше ФИО*" name="user_name" />

      <input
        required
        minLength="10"
        type="text"
        placeholder="Номер телефона*"
        name="user_phone"
      />

      <input type="email" placeholder="E-mail" name="user_email" />

      <input
        id="FormSubmit"
        type="submit"
        value="Сделать заказ"
        data-abbr="Заказать"
      />

      <div id="window_container">
        <div id="okno">
          <p>Спасибо! Мы свяжемся с вами в ближайшее время</p>
          <img src={accepted_icon} alt="accepted" />
        </div>
      </div>
    </form>
  );
}
