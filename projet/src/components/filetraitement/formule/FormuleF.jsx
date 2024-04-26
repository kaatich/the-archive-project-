import "./FormuleF.css"
export default function FormuleF(){
    return(
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
                                <input  type="text" name="" id="inputF" />
                            </p>
                            <p>
                                <label htmlFor="">نوع المستند:</label>
                                <input type="text" name="" id="inputF" />
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
                            <button type="submit">Submit</button>
                        </div>
                </div>
            </form>
        </div>
    )
}
