import React, { useState, useRef } from 'react';
import './scan.css';
import add from '../Assets/add.png';

const Scan = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select your option");
    const [selectedIcon, setSelectedIcon] = useState("bx bx-chevron-down"); // Default icon
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [data, setData] = useState([]);
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

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            const newData = [...data, { input1: data.length + 1, input2: file.name }];
            setData(newData);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // For example, you can send selectedOption and selectedFile to a server
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
                                onChange={handleFileChange}
                                className="file-input2"
                                ref={fileInputRef}
                            />
                            <label htmlFor="file-input" className="file-label2" onClick={handleImageClick}>
                                <img className='img-add' src={add} alt="Upload File" />
                            </label>
                        </div>
                        <div className={`select-menu ${isActive ? 'active' : ''}`}>
                            <div className="select-btn" onClick={handleSelect}>
                                <span className="sBtn-text">{selectedOption}</span>
                                <i className={selectedIcon}></i>
                            </div>
                            <ul className="options">
                                <li className="option" onClick={() => handleOptionClick("Github", "bx bxl-github")}>
                                    <i className="bx bxl-github" style={{ color: '#171515' }}></i>
                                    <span className="option-text">Github</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Instagram", "bx bxl-instagram-alt")}>
                                    <i className="bx bxl-instagram-alt" style={{ color: '#E1306C' }}></i>
                                    <span className="option-text">Instagram</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Linkedin", "bx bxl-linkedin-square")}>
                                    <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
                                    <span className="option-text">Linkedin</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Facebook", "bx bxl-facebook-circle")}>
                                    <i className="bx bxl-facebook-circle" style={{ color: '#4267B2' }}></i>
                                    <span className="option-text">Facebook</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Twitter", "bx bxl-twitter")}>
                                    <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
                                    <span className="option-text">Twitter</span>
                                </li>
                            </ul>
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
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.input1}</td>
                                        <td>{item.input2}</td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleModifyButtonClick(index)}>تعديل</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index)}>حذف</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index)}>معالجة</button>
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
                                onChange={handleFileChange}
                                className="file-input2"
                                ref={fileInputRef}
                            />
                            <label htmlFor="file-input" className="file-label2" onClick={handleImageClick}>
                                <img className='img-add' src={add} alt="Upload File" />
                            </label>
                        </div>
                        <div className={`select-menu ${isActive ? 'active' : ''}`}>
                            <div className="select-btn" onClick={handleSelect}>
                                <span className="sBtn-text">{selectedOption}</span>
                                <i className={selectedIcon}></i>
                            </div>
                            <ul className="options">
                                <li className="option" onClick={() => handleOptionClick("Github", "bx bxl-github")}>
                                    <i className="bx bxl-github" style={{ color: '#171515' }}></i>
                                    <span className="option-text">Github</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Instagram", "bx bxl-instagram-alt")}>
                                    <i className="bx bxl-instagram-alt" style={{ color: '#E1306C' }}></i>
                                    <span className="option-text">Instagram</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Linkedin", "bx bxl-linkedin-square")}>
                                    <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
                                    <span className="option-text">Linkedin</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Facebook", "bx bxl-facebook-circle")}>
                                    <i className="bx bxl-facebook-circle" style={{ color: '#4267B2' }}></i>
                                    <span className="option-text">Facebook</span>
                                </li>
                                <li className="option" onClick={() => handleOptionClick("Twitter", "bx bxl-twitter")}>
                                    <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
                                    <span className="option-text">Twitter</span>
                                </li>
                            </ul>
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
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.input1}</td>
                                        <td>{item.input2}</td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleModifyButtonClick(index)}>تعديل</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index)}>حذف</button>
                                        </td>
                                        <td>
                                            <button className='btn-mod' onClick={() => handleDeleteButtonClick(index)}>معالجة</button>
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
