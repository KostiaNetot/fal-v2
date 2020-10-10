import React from 'react';

const Popup = () => {
  return (
    <div className="popup-underlay">
      <div className="popup-box">
        <svg className='top' width="627" height="145" viewBox="0 0 627 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M627 0C627 0 256.786 13.8885 134.357 42.2015C11.9277 70.5145 0 145 0 145V77.7536V10C0 4.47715 4.47715 0 10 0L627 0Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="8.15099" y1="141.493" x2="299.68" y2="-230.062" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC000"/>
              <stop offset="1" stopColor="#FF8A00"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="close-btn"></div>

        <h2>Свяжитесь с нами</h2>
        <form>
          <label htmlFor="input_name">Имя</label>
          <input id="input_name" type="text" placeholder='Juan'/>
          <label htmlFor="input_email">E-mail</label>
          <input id="input_email" type="email" placeholder='juan456@gmail.com'/>
          <label htmlFor="input_phone">Телефон</label>
          <input id="input_phone" type="tel" placeholder='+340486747662'/>
          <label htmlFor="input_message">Сообщение</label>
          <textarea name="input_message" id="input_message" placeholder='Your message'></textarea>
          <label className='label_agreement' htmlFor="input_agreement">
            <input className='input_agreement' id="input_agreement" type="checkbox"/>
            Я даю свое согласие на обработку <br/>
            персональных данных
          </label>
          <input className='btn' type="submit" value="Отправить"/>
        </form>

        <svg className='bottom' width="646" height="151" viewBox="0 0 646 151" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 151C0 151 381.432 136.537 507.571 107.052C633.711 77.5676 646 0 646 0V70.029V141C646 146.523 641.523 151 636 151H0Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="637.602" y1="3.65175" x2="333.253" y2="387.42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC000"/>
              <stop offset="1" stopColor="#FF8A00"/>
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  );
};

export default Popup;
