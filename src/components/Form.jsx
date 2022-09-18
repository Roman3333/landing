import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function Form({ popupVisible, setPopupVisible }) {
  const useRefForm = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm('service_ow8s3xp', 'template_gf15uyp', useRefForm.current, '6qyznvT5gYn0B0MbA')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    useRefForm.current.reset();

    // let faffaa = document.getElementById('form');
    // console.log(faffaa);
    // alert(JSON.stringify(data));

    // let formData = new FormData(faffaa);
    // formData.append('данные', data);

    // let response = await fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (response.ok) {
    //   let result = await response.json;
    //   alert(result.message);
    //   faffaa.reset();
    // } else {
    //   alert('ошибка');
    // }
  };

  return popupVisible === true ? (
    <div onClick={() => setPopupVisible(false)} className="popup">
      <form
        ref={useRefForm}
        onClick={(e) => e.stopPropagation()}
        className="form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="form__title">Заказать ообратный звонок</div>
        <div onClick={() => setPopupVisible(false)} className="form__close">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="form__item">
          <input
            className="form__input"
            {...register('fullname', {
              required: true,
              maxLength: 40,
              minLength: 2,
              pattern: /^[A-Za-zА-Яа-я ]+$/i,
            })}
            placeholder="Имя(обязательно)"
            type="name"
            name="fullname"
          />
          {errors.fullname && <p className="form__p">Только буквы и не менее 3 символов</p>}
        </div>
        <div className="form__item">
          <input
            className="form__input"
            {...register('phone', {
              required: true,
              maxLength: 30,
              minLength: 2,
            })}
            placeholder="Телефон(обязательно)"
            type="phone"
            name="phone"
          />
          {errors.fullname && <p className="form__p">Введите телефон</p>}
        </div>
        <div className="form__item">
          <input
            className="form__input"
            {...register('email', {
              maxLength: 40,
              minLength: 2,
            })}
            placeholder="Email"
            type="email"
            name="email"
          />
        </div>
        <div className="form__item">
          <textarea
            className="form__input area"
            {...register('message', {})}
            placeholder="Сообщение"
            name="message"
          />
        </div>
        <input className="form__submit" type="submit" />
      </form>
    </div>
  ) : (
    <span style={{ display: 'none' }}>нет</span>
  );
}
