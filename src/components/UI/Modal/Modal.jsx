import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Dialog } from '@mui/material'
import axios from 'axios'
import InputMask from 'react-input-mask'
import Select from 'react-select'

import Success from './Succes'
import styles from './Modal.module.scss'
import { CloseIcon } from '../../svg.js'

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
    border: '1px solid rgba(0, 0, 0, 0.12) !important',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: 0,
    width: '100%',
    height: '48px'
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

function Modal({ open, handleClose, chooseCourse }) {
  const [success, setSuccess] = useState(false)
  const clickClose = () => setSuccess(false)
  const clickOpen = () => setSuccess(true)
  const router = useRouter()
  const [value, setValue] = useState(true)

  const initialValues = {
    major: '',
    name: '',
    number: ''
  }
  const [userData, setUserData] = useState(initialValues)

  const majorSlug = router.query.id

  const handleSubmit = (e) => {
    e.preventDefault()
    // const major = chooseCourse ? userData.major.value : majorSlug
    // const name = userData.name
    // const number = userData.number.replaceAll(' ', '')
    // const formData = { major, name, number }
    // console.log(JSON.stringify(formData))
    // axios
    //   .post(process.env.BASE_URL, {
    //     ...formData
    //   })
    //   .then((res) => {
    //     // console.log('success', res)
    //     setSuccess(true)
    //   })
    //   .catch((err) => {
    //     // console.log("errrrroooor", err);
    //   })
    //   .finally((item) => {
    //     setUserData(initialValues)
    //     handleClose()
    //   })
  }

  return (
    <>
      <Dialog open={open} onClose={() => handleClose()} id='dialog'>
        <div className={styles.dialog_content}>
          <button onClick={() => handleClose()} className={styles.close_icon}>
            <CloseIcon />
          </button>

          <div className={styles.dialog_context}>
            <h2>
              Kursga yozilish uchun formani to'ldiring
              {/* Fill out the form to register for the course */}
            </h2>
            <p>
              Agar kurs haqida savollaringiz bo'lsa yoki tanlashni bilmasangiz,
              raqamingizni qoldiring va bizning operatorlarimiz sizga qo'ng'iroq
              qilishadi
              {/* If you have questions about the course or do not know what to
              choose, leave your number and our operators will call you. */}
            </p>

            <form action='' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Ismingizni kiriting'
                value={userData?.name.replace(/[^a-zA-Z']/g, '')}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
              />

              {/* {chooseCourse && (
                <div style={{ position: 'relative' }}>
                  <Select
                    className={styles.select}
                    styles={customStyles}
                    options={options}
                    placeholder='Kursni tanlang'
                    value={userData?.major}
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
                        bottom: '16px',
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
                onChange={(e) =>
                  setUserData({ ...userData, number: e.target.value })
                }
                mask='+\9\9\8 99 999 99 99'
                maskChar={null}
                required
              />
              <button type='submit'>
                Malumotingizni Qoldiring
                {/* Register */}
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <Success open={success} close={() => clickClose(false)} />
    </>
  )
}

export default Modal
