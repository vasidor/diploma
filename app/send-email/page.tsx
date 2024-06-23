"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

const mail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/send-email', { email, name, message, captcha });
      console.log(response.data);
      setFormMessage(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormMessage('Ошибка отправки сообщения');
    }
  };

  return (
    <><Header /><div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-8 mb-4">Форма для отправки сообщения</h1>
      {formMessage && <p className={formMessage.includes('успешно') ? 'text-green-500' : 'text-red-500'}>{formMessage}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Имя</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Сообщение</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Текст вашего сообщения"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}></div>
          <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Отправить сообщение
        </button>
      </form>
    </div></>
  );
};

export default mail;
