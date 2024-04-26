import React from 'react'
import { useState } from 'react';
import './document.css'
const Document = () => {
    const [data, setData] = useState([]);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
  
    const handleInputChange1 = (event) => {
      setInput1(event.target.value);
    };
  
    const handleInputChange2 = (event) => {
      setInput2(event.target.value);
    };
  
    const handleAddButtonClick = () => {
      const newData = [...data, { input1, input2 }];
      setData(newData);
      setInput1('');
      setInput2('');
    };
  
    const handleDeleteButtonClick = (index) => {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    };
  
    const handleModifyButtonClick = (index) => {
      const selectedItem = data[index];
      setInput1(selectedItem.input1);
      setInput2(selectedItem.input2);
      handleDeleteButtonClick(index);
    };
  return (
    <div className='document-form'>
        <div className='addd-document3'>
      <form className="form-container3">
        <div>
          <label htmlFor="input1">رقم الوثيقة: </label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={handleInputChange1}
          />
        </div>
        <div>
          <label htmlFor="input2">إسم الوثيقة:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={handleInputChange2}
          />
        </div>
        <button className='btn-add3' type="button" onClick={handleAddButtonClick}>
          إظافة
        </button>
      </form>
      <table className="data-table3">
        <thead>
          <tr>
            <th>رقم الوثيقة</th>
            <th>إسم الوثيقة</th>
            <th>تعديل</th>
            <th>حذف</th>
            <th>معالجة</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.input1}</td>
              <td>{item.input2}</td>
              <td>
                <button className='btn-mod3' onClick={() => handleModifyButtonClick(index)}>تعديل</button>
              </td>
              <td>
                <button className='btn-mod3' onClick={() => handleDeleteButtonClick(index)}>حذف</button>
              </td>
              <td>
                <button className='btn-mod3' onClick={() => handleDeleteButtonClick(index)}>معالجة</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Document;