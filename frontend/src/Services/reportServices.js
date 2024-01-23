import axios from 'axios';

const Report_URL = 'http://localhost:5001/Reports';

const ReportForm = async (name, email, reason, description) => {
    try{
        const response = await axios.post(`${Report_URL}/Reports`,{name, email, reason, description});
        return response;
    }catch(err){
        throw err;
    }
};



export {ReportForm};