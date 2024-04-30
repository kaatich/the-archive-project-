import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
import ar from '../../Assets/ar.png';
import fr from '../../Assets/fr.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('ar'); // Default language
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = [
        { code: 'ar', name: 'Arabic', flag: ar },
        { code: 'fr', name: 'French', flag: fr },
        // Add more languages as needed
    ];

    const handleLanguageChange = (languageCode) => {
        setSelectedLanguage(languageCode);
        setShowDropdown(false);
        // You can add logic here to change the language of your website based on the selected language
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    

    return (
        <>
            <div className='navbar'>
            <Link to='/home'><div className='logo2'>
                    <img className='logo-home' src={logo} alt="" />
                    <div className='name-home'>
                        <span>Centre D'archive Et Documentation</span><br />
                        <span>مركز الارشيف والتوثيق</span>
                    </div>
                </div></Link>
                <div className='left'>
                    <div className='language-select'>
                        <div className='selected-language' onClick={toggleDropdown}>
                            <img className='img-lang' src={languages.find(lang => lang.code === selectedLanguage)?.flag} alt="" />
                            <i className={`fa-solid fa-arrow-${showDropdown ? 'up' : 'down'}`}></i>
                        </div>
                        {showDropdown && (
                            <div className='dropdown'>
                                {languages.map(language => (
                                    <div key={language.code} className='dropdown-item' onClick={() => handleLanguageChange(language.code)}>
                                        <img className='img-lang2' src={language.flag} alt="" />
                                        <span>{language.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <Link to='/'><div className='profile'>
                        <button className='login-btn'><i class="fa-regular fa-user"></i> تسجيل الدخول </button>
                    </div></Link>
                </div>
            </div>
            
            <div className="main-navbar">
                <ul className='navbar-ul'>
                    <Link to='/Dossiers'><li>إستقبال الملفات</li></Link>
                    <Link to='/sousDossiers'><li>إدخال الملفات الفرعية</li></Link>
                    <Link to='/Documents'><li>إدخال الوثائق</li></Link>
                    <Link to='/FileTraitement'><li>معالجة الوتائق</li></Link>
                    <Link to='/scan'><li>تصوير و فهرسة الوثائق</li></Link>
                    <Link to='/Archive'><li>تخزين الوثائق</li></Link>
                    <Link to='/search'><li>البحت</li></Link>
                </ul>

            </div>


        </>
    )
}

export default Navbar;
