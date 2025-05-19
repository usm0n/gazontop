import { useState } from 'react';
import img from '../assets/images/contact.png';
import axios from 'axios';

const Contact = () => {
    const [error, setError] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('+998 ');
    const token = import.meta.env.VITE_TELEGRAM_TOKEN;

    const handleInputChange = (e: any) => {
        let input = e.target.value.replace(/\D/g, '').substring(3);
        let formattedNumber = '+998 ';

        switch (true) {
            case input.length <= 2:
                formattedNumber += `(${input})`;
                break;
            case input.length <= 5:
                formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2)}`;
                break;
            case input.length <= 7:
                formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2, 5)} ${input.slice(5)}`;
                break;
            default:
                formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2, 5)} ${input.slice(5, 7)} ${input.slice(7)}`;
                break;
        }

        setPhoneNumber(formattedNumber);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (phoneNumber.length !== 19) {
            setError('Telefon raqami to\'liq formatda kiritilishi kerak.');
            return;
        }
        try {
            const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: '5663095517',
                text: `Yangi telefon raqam: ${phoneNumber}`,
            });
            console.log('Telegramga yuborildi', response);
            setPhoneNumber('')
            setError("Tez orada siz bilan bog'lanamiz");
        } catch (error) {
            console.error('Telegramga yuborishda xatolik yuz berdi:', error);
        }
    };

    return (
        <section className="contact" id='contact'>
            <div className="container">
                <div className="contact-content">
                    <div className="contact-items">
                        <div className="contact-title_items">
                            <h3 className="contact-title">Hozir boshlang</h3>
                            <div className='contact-title_line'></div>
                        </div>
                        <h1 className="contact-main_title">
                            Barcha savolaringizga javob oling
                        </h1>
                        <form onSubmit={handleSubmit} className="contact-inputs">
                            <input
                                value={phoneNumber}
                                onChange={handleInputChange}
                                type="text"
                                className='contact-input'
                                placeholder='Telefon raqamingiz'
                                maxLength={19}
                                required
                            />
                            <button type='submit' className='contact-btn'>Yuborish</button>
                        </form>
                        <span className='contact-error'>{error}</span>
                        <p className="contact-subtitle">
                            Bizga telefon raqamingizni qoldiring va biz siz bilan bog'lanamiz
                        </p>
                    </div>
                    <div className="contact-image">
                        <img src={img} className='contact-img' alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;