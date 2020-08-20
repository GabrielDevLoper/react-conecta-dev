import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MessageIcon from "@material-ui/icons/Message";

import useStyles from "./styles";

function PostCard({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.postCard}>
      <CardHeader
        avatar={<Avatar src={post.autor.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <Box display="flex" alignItems="center">
            <Typography className={classes.title} variant="caption">
              {"Avaliado por"}{" "}
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              {post.autor.name}
            </Typography>
            <Typography className={classes.title} variant="subtitle2">
              {post.date}
            </Typography>
          </Box>
        }
      />
      <CardContent className={classes.content}>
        <Typography className={classes.message} variant="body1">
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} alt="image" className={classes.image} />
        </CardActionArea>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{ cursor: "pointer" }}
            color="textSecondary"
            variant="body2"
          >
            {"10"}
          </Typography>
        </IconButton>

        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            style={{ cursor: "pointer" }}
            color="textSecondary"
            variant="body2"
          >
            {"10"}
          </Typography>
        </IconButton>

        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
