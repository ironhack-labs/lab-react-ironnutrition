import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import FoodForm from './FoodForm';




export default function ModalForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    };

    return (
        <div>
            <Stack direction="row" spacing={2}>

                <Button variant="contained" color="success" onClick={handleOpen}>
                    Add Food
                </Button>

            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <FoodForm />
            </Modal>
        </div>
    );
}
