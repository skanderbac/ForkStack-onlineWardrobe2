
import DateView from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {Field,ErrorMessage} from "formik";

export default function DatePiker(props){
    const{label,name,...rest}=props;
    return(
        <div className="form-control">
            <label>{label}</label>


        </div>
    )
}
