import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Form.module.css'

const Form = ({ setCategory }) => {
  const categories = [
    { value: 'general', label: 'General' },
    { value: 'technology', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'science', label: 'Science' },
    { value: 'health', label: 'Health' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'business', label: 'Business' },
  ]

  const [category, Select] = useSelect('general', categories)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategory(category)
  }


  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={handleSubmit}
        >
          <h2 className={styles.heading}>Encuentra categoria</h2>
          <Select></Select>
          <div className='input-field col s12'>
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
