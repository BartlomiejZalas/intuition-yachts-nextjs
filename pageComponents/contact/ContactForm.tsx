import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './Contact.module.css';
import useTranslation from '../../hooks/useTranslations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

enum SendingState {
  INITIAL,
  SENDING,
  SUCCESS,
  ERROR,
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, errors } = useForm<FormData>({
    validateCriteriaMode: 'all',
  });
  const [state, setState] = useState<SendingState>(SendingState.INITIAL);

  const send = async (data: FormData) => {
    try {
      setState(SendingState.SENDING);
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      reset();
      setState(SendingState.SUCCESS);
    } catch (e) {
      setState(SendingState.ERROR);
    }
  };

  if (state === SendingState.SUCCESS) {
    return <div className={styles.success}>{t('messageSent')}</div>;
  }

  return (
    <>
      <h2 className="subsectionTitle">{t('contactForm')}:</h2>
      <div className={styles.overlayContainer}>
        {state === SendingState.SENDING && (
          <div className={styles.overlay}>
            <LoadingSpinner />
          </div>
        )}
        <input
          type="text"
          className={styles.input}
          placeholder={t('nameLabel')}
          name="name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <div className={styles.e}>
          {errors?.name?.types?.required && <p>{t('requiredError')}</p>}
          {errors?.name?.types?.maxLength && <p>{t('toLongError')}</p>}
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder={t('emailLabel')}
          name="email"
          ref={register({
            required: true,
            maxLength: 200,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
        <div className={styles.e}>
          {errors?.email?.types?.required && <p>{t('requiredError')}</p>}
          {errors?.email?.types?.maxLength && <p>{t('toLongError')}</p>}
          {errors?.email?.types?.pattern && <p>{t('invalidEmailError')}</p>}
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder={t('subjectLabel')}
          name="subject"
          ref={register({ required: true, maxLength: 200 })}
        />
        <div className={styles.e}>
          {errors?.subject?.types?.required && <p>{t('requiredError')}</p>}
          {errors?.subject?.types?.maxLength && <p>{t('toLongError')}</p>}
        </div>
        <textarea
          className={styles.input + ' ' + styles.textarea}
          placeholder={t('messageLabel')}
          name="message"
          ref={register({ required: true, maxLength: 5000 })}
        />
        <div className={styles.e}>
          {errors?.message?.types?.required && <p>{t('requiredError')}</p>}
          {errors?.message?.types?.maxLength && <p>{t('toLongError')}</p>}
        </div>
        <div>
          <button className={styles.btn} onClick={handleSubmit(send)}>
            {t('sendButton')}
          </button>
          {state === SendingState.ERROR && (
            <span className={styles.error}>{t('sendingError')}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
