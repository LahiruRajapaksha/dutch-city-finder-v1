import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";

interface ErrorCardProps {
  open?: boolean;
  refetch: () => void;
}

const ErrorCard = (props: ErrorCardProps) => {
  const { open = true, refetch } = props;
  const handleClose = () => {
    refetch();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <DialogTitle>
          <Typography variant="h5">Something went wrong!</Typography>
        </DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Refetch Cities
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ErrorCard;
