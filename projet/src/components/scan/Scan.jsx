// Scan.js
import React, { useState, useRef } from 'react';
import './scan.css';
import add from '../Assets/add.png';

const Scan = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select your option");
    const [selectedIcon, setSelectedIcon] = useState("bx bx-chevron-down"); // Default icon
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef1 = useRef(null); // Separate ref for first file input
    const fileInputRef2 = useRef(null); // Separate ref for second file input
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleSelect = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = (optionText, iconClass) => {
        setSelectedOption(optionText);
        setSelectedIcon(iconClass);
        setIsActive(false);
    };

    const handleFileChange = (event, table) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            if (table === 1) {
                const newData = [...data1, { input1: data1.length + 1, input2: file.name }];
                setData1(newData);
            } else if (table === 2) {
                const newData = [...data2, { input1: data2.length + 1, input2: file.name }];
                setData2(newData);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // For example, you can send selectedOption and selectedFile to a server
    };

    const handleDeleteButtonClick = (index, table) => {
        if (table === 1) {
            const newData = [...data1];
            newData.splice(index, 1);
            setData1(newData);
        } else if (table === 2) {
            const newData = [...data2];
            newData.splice(index, 1);
            setData2(newData);
        }
    };

    const handleModifyButtonClick = (index, table) => {
        const selectedItem = table === 1 ? data1[index] : data2[index];
        setInput1(selectedItem.input1);
        setInput2(selectedItem.input2);
        handleDeleteButtonClick(index, table);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className='hello'>المرجو تصوير و فهرسة الوثائق</h1>
                </div>
                <div className='wrap-1'>
                    <div>
                        <div className="file-input-container2">
                            <input
                                type="file"
                                onChange={(event) => handleFileChange(event, 1)}
                                className="file-input2"
                                ref={fileInputRef1} // Assign ref for the first file input
                            />
                            <label htmlFor="file-input" className="file-label2" onClick={() => fileInputRef1.current.click()}>
                                <img className='img-add' src={add} alt="Upload File" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>رقم الملف</th>
                                    <th>إسم الملف</th>
                                    <th>تعديل</th>
                                    <th>حذف</th>
                                    <th>معالجة</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data1.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.input1}</td>
                                        <td>{item.input2}</td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleModifyButtonClick(index, 1)}>تعديل</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index, 1)}>حذف</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index, 1)}>معالجة</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h1 className='hello'>المرجو تصوير و فهرسة الملحقات</h1>
                </div>
                <div className='wrap-2'>
                    <div>
                        <div className="file-input-container2">
                            <input
                                type="file"
                                onChange={(event) => handleFileChange(event, 2)}
                                className="file-input2"
                                ref={fileInputRef2} // Assign ref for the second file input
                            />
                            <label htmlFor="file-input" className="file-label2" onClick={() => fileInputRef2.current.click()}>
                                <img className='img-add' src={add} alt="Upload File" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>رقم الملف</th>
                                    <th>إسم الملف</th>
                                    <th>تعديل</th>
                                    <th>حذف</th>
                                    <th>معالجة</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data2.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.input1}</td>
                                        <td>{item.input2}</td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleModifyButtonClick(index, 2)}>تعديل</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index, 2)}>حذف</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index, 2)}>معالجة</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className='btn-next' type="submit">التالي</button>
            </form>
        </div>
    );
};

export default Scan;
