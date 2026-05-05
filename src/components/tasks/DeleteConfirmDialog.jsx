import {
    Dialog, DialogTitle, DialogContent,
    DialogActions, Button
} from "@mui/material";

const DeleteConfirmDialog = ({ open, onClose, onConfirm }) => (
    <Dialog open={ open } onClose={ onClose }>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            Are you sure you want to delete this task?
        </DialogContent>
        <DialogActions>
            <Button onClick={ onClose }>Cancel</Button>
            <Button color="error" onClick={ onConfirm }>
                OK
            </Button>
        </DialogActions>
    </Dialog>
);

export default DeleteConfirmDialog;