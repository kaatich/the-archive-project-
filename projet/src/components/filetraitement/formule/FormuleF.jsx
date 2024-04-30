import "./FormuleF.css";

export default function FormuleF() {
    // JavaScript
    

    return (
        <div>
            <form className="formFF" action="">
                <div className="formF">
                    <div>
                        <h3 className="Nforme">الملف رقم:</h3>
                    </div>
                    <div className="form-containerF">
                        <div className="form-section">
                            <p>
                                <label htmlFor="">تاريخ الصرف:</label>
                                <input type="text" name="" id="inputF" />
                            </p>
                            <p>
                                <label htmlFor="">نوع المستند:</label>
                                <input type="text" list="Type" id="inputF" placeholder="اكتب النوع هنا"/>
                                <datalist id="Type">
                                    <option value="تقرير (pv)">تقرير (pv)</option>
                                    <option value="تقرير (rapport)">تقرير (rapport)</option>
                                    <option value="تصريح (autorisation)">تصريح (autorisation)</option>
                                    <option value="مراسيم (arretés)">مراسيم (arretés)</option>
                                    <option value="CPS (cps)">CPS (cps)</option>
                                </datalist>
                            </p>
                        </div>
                        <div className="form-section">
                            <p>
                                <label htmlFor="">قسم الصرف:</label>
                                <input type="text" name="" id="inputF" />
                            </p>
                            <p>
                                <label htmlFor="">الصلاحية الإدارية:</label>
                                <input type="text" name="" id="inputF" />
                            </p>
                        </div>
                        <div className="form-section">
                            <p>
                                <label htmlFor="">الهوية:</label>
                                <input type="text" name="" id="inputF" />
                            </p>
                            <p>
                                <label htmlFor="">المستند ذو الصلة:</label>
                                <input type="text" name="" id="inputF" />
                            </p>
                        </div>
                    </div>
                    <div className="button-section">
                        <button type="submit">ارسال</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
