import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./spent.scss";
const SpentItem = ({ item }) => {
  const handlerDelete = (item) => {
    /* if (actionDelete) {
      actionDelete(item);
    }*/
  };

  const handlerEdit = (item) => {
    /*if (actionEdit) {
      actionEdit(item);
    }*/
  };

  return (
    <div>
      <Card
      className="card-custom"
        sx={{
          width: 150,
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h6" textAlign="center" color="textPrimary">
            {item.value}
          </Typography>

          <Typography variant="body2" textAlign="center" color="textSecondary">
            {item.name}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handlerDelete(item)}
          >
            <DeleteIcon fontSize="small" />
          </Button>

          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => handlerEdit(item)}
            size="small"
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default SpentItem;
