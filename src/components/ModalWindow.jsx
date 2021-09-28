import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ModalWindow({show, handleClose, link}) {
    return (
        <Modal size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               show={show}
               onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Оформление заказа</Modal.Title>
            </Modal.Header>
            <Modal.Body>Подтверждаете?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Отмена
                </Button>
                <Link className="btn btn-success" onClick={handleClose} to={link}>
                    Подтверждаю
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWindow;