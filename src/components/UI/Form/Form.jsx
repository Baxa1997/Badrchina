import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/router'
import axios from 'axios'
import Select from 'react-select'

import Succes from '../Modal/Succes'
import styles from './form.module.scss'

const options = [
  { value: 'android-ios-developer', label: 'Mobile' },
  { value: 'backend-developer', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'frontend-developer', label: 'Frontend' },
  { value: 'qa', label: 'QA' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'foundation', label: 'Foundation' }
]

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: 0,
    width: '100%'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 16px',
    cursor: 'pointer'
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '24px',
    color: '#000'
  }),
  indicatorSeparator: () => {},
  option: (provided) => ({
    ...provided,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '23px',
    color: '#000',
    padding: '8px 16px',
    cursor: 'pointer'
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.08)',
    marginTop: 0,
    padding: '12px 0'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#6E7C87'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#48535b'
  })
}

function Form({ title, subtitle, singleFormClass, feedbackInvisible }) {
  const [success, setSuccess] = useState(false)
  const handleClick = () => setSuccess(true)
  const handleClose = () => setSuccess(false)
  const router = useRouter()
  const [value, setValue] = useState(true)

  const initialValues = {
    major: '',
    name: '',
    number: ''
  }

  const [userData, setUserData] = useState(initialValues)

  const majorSlug =
    router.query.id === 'frontend' ? 'frontend-developer' : router.query.id

  const handleSubmit = (e) => {
    // e.preventDefault()
    // const major = singleFormClass ? majorSlug : userData.major.value
    // const name = userData.name
    // const number = userData.number.replaceAll(' ', '')
    // const formData = { major, name, number }
    // console.log(JSON.stringify(formData))
    // console.log('Form data', formData)
    // axios
    //   .post(process.env.BASE_URL, {
    //     ...formData
    //   })
    //   .then((res) => {
    //     // console.log("success", res);
    //     setSuccess(true)
    //   })
    //   .catch((err) => {
    //     // console.log("errrrroooor", err);
    //   })
    //   .finally((item) => {
    //     setUserData(initialValues)
    //   })
  }

  return (
    <>
      <div
        className={`${styles.form} ${
          singleFormClass && !feedbackInvisible && styles.singleFormActive
        }`}
        id='form'
      >
        <Container className='container'>
          <div className={styles.form_content}>
            <div className={styles.form_content_text}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>

            <form
              action=''
              className={styles.form_panel}
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                placeholder='Ismingizni kiriting'
                value={userData?.name.replace(/[^a-zA-Z']/g, '')}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
              />
{/* 
              {singleFormClass || (
                <div style={{ position: 'relative' }}>
                  <Select
                    styles={customStyles}
                    options={options}
                    placeholder='Kursni tanlang'
                    value={userData?.major}
                    className={styles.form_panel_select}
                    isSearchable={false}
                    onChange={(e) => setUserData({ ...userData, major: e })}
                    theme={(theme) => ({
                      ...theme,
                      border: 0,
                      borderRadius: '12px',
                      colors: {
                        ...theme.colors,
                        primary25: 'transparent',
                        primary: 'transparent'
                      }
                    })}
                  />
                  {!userData.major && (
                    <select
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0,
                        zIndex: '-1'
                      }}
                      title='Please choose a course'
                      required
                    />
                  )}
                </div>
              )} */}

              <InputMask
                type='tel'
                placeholder='+998'
                value={userData?.number}
                onChange={(e) =>
                  setUserData({ ...userData, number: e.target.value })
                }
                mask='+\9\9\8 99 999 99 99'
                maskChar={null}
                required
              />
              <button type='submit'>
                Malumotni jo'natish
                {/* Register */}
              </button>
            </form>
          </div>
        </Container>
      </div>

      <Succes open={success} close={() => handleClose(false)} />
    </>
  )
}

export default Form
