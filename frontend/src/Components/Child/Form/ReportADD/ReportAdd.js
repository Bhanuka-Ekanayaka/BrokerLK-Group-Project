import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './report.css';
import { useState } from 'react';

const ReprtAdd = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { name, email, reason, description };
        console.log(report);
    }

    return (
        <>
            <div className="report-content">

                <div className="report-header mb-3">
                    <h3>Report the Add</h3>
                </div>

                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" value={name} onChange={(e) => setName(e.target.value)} required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Please Select the Reason" className="mb-3">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setReason(e.target.value)}>
                            <option>Choose Your Reason</option>
                            <option value="1">Not a Property Add</option>
                            <option value="2">Property Not Available Any</option>
                            <option value="3">No Such a Property</option>
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Discription" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FloatingLabel>
                    <button>Submit Report</button>
                </Form>
                <p>{name}</p>
                <p>{email}</p>
                <p>{reason}</p>
                <p>{description}</p>
            </div>
        </>
    );
}

export default ReprtAdd;