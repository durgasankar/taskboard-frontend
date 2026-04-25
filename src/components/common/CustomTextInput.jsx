import TextField from '@mui/material/TextField';

const CustomTextInput = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false,
    size = "small",
    error = false,
    helperText = ""
}) => {
    return (
        <TextField
            fullWidth
            margin="dense"
            label={ label }
            name={ name }
            value={ value }
            type={ type }
            size={ size }
            required={ required }
            onChange={ onChange }
            variant="outlined"
            error={ error }
            helperText={ helperText }
        />
    );
};

export default CustomTextInput;