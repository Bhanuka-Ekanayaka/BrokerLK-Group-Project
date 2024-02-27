
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Message = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Confirmation Message!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong><i class="bi bi-emoji-smile-fill"></i> Success!</strong> Your data has been added successfully!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" as={Link} to='/' >Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Message;