import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { CustomContext } from "../../contexts/customContext";
import { withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const ratings = [
  {
    value: 5,
    label: "Excellent",
  },
  {
    value: 4,
    label: "Good",
  },
  {
    value: 3,
    label: "Average",
  },
  {
    value: 2,
    label: "Poor",
  },
  {
    value: 0,
    label: "Terrible",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
}));

const ReviewForm = ({ movie, history }) => {
  const classes = useStyles();
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  // eslint-disable-next-line
  const context = useContext(CustomContext);
  const [rating, setRating] = useState(3);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const onSubmit = (review) => {
    review.movieId = movie.id;
    review.rating = rating;
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="author"
          label="Author's name"
          name="author"
          autoFocus
          {...register("author", { required: "Author name required" })}
        />
        {errors.author && (
          <Typography variant="h6" component="p">
            {errors.author.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="content"
          label="Review text"
          id="content"
          multiline
          minRows={10}
          {...register("content", {
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" },
          })}
        />
        {errors.content && (
          <Typography variant="h6" component="p">
            {errors.content.message}
          </Typography>
        )}
        <TextField
          id="select-rating"
          select
          variant="outlined"
          label="Rating Select"
          value={rating}
          onChange={handleRatingChange}
          helperText="Don't forget your rating"
        >
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default withRouter(ReviewForm);