import React, { useState } from "react";

import classes from "./New-article.module.scss";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const { TextArea } = Input;

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  text: yup.string().required(),
});

const ArticleForm = (
 { titleForm,
  tagList,
  title,
  description,
  body,
  onGetArticle}
) => {


  const { articles } = useSelector((store) => {
    return store.articlesReducer;
  });

if (articles) {
    tagList = articles.tagList;
    title = articles.title;
    description = articles.description;
    body = articles.body;
  }


  const [tagAdded, setTags] = useState([...tagList]);
  console.log(tagAdded);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      title: title,
      description: description,
      text: body,
    },
  });
  const onBtnAdd = (field) => {
    setTags((prevState) => {
      return [...prevState, ""];
    });
  };

  const onBtnDelete = (elIndex) => {
    const deleteTag = tagAdded.filter((_, i) => i !== elIndex);
    setTags(deleteTag);
  };

  const tagRender = tagAdded.map((el, i) => (
    <div className={classes.tags} key={Math.random() * 10000}>
      <Controller
        control={control}
        name={`tagAmount${i}`}
        defaultValue={el}
        render={({ field }) => (
          <>
            <Input
              {...field}
              placeholder="Title"
              size="large"
              className={classes.tagInput}
            />
            {tagAdded.length === 1 ? null : (
              <Button
                className={classes.deleteTag}
                size="large"
                danger
                onClick={() => onBtnDelete(i)}
              >
                Delete
              </Button>
            )}

            {i === tagAdded.length - 1 ? (
              <Button
                className={classes.addTag}
                size="large"
                onClick={() => {
                  if (field.value) onBtnAdd(field);
                }}
                status={errors.title && "error"}
              >
                Add tag
              </Button>
            ) : null}
          </>
        )}
      />
    </div>
  ));

  const onSubmit = (data) => {
    console.log(data);
    const { title, description, text, ...tag } = data;
    const tagList = Object.values(tag);
    console.log(tagList);

    onGetArticle({ title, description, body: text, tagList });

    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={classes.title}>{titleForm}</h3>

      <div className={classes.item}>
        <span>Title</span>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Title"
              size="large"
              defaultValue={title}
              status={errors.title && "error"}
            />
          )}
        />
      </div>
      <div className={classes.item}>
        <span>Short description</span>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Short description"
              size="large"
              defaultValue={description}
              status={errors.description && "error"}
            />
          )}
        />
      </div>
      <div className={classes.item}>
        <span>Text</span>
        <Controller
          control={control}
          name="text"
          render={({ field }) => (
            <TextArea
              {...field}
              rows={4}
              placeholder="Text"
              defaultValue={body}
              status={errors.text && "error"}
            />
          )}
        />
      </div>
      <div className={classes.item}>
        <span>Tags</span>
        {tagRender}
      </div>
      <input className={classes.send} type="submit" value="Send" />
    </form>
  );
};

ArticleForm.defaultProps = {
  titleForm: "",
  title: "",
  description: "",
  text: "",
  tagList: [""],
};

ArticleForm.propTypes = {
  titleForm: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  tagList: PropTypes.arrayOf(PropTypes.string),
};

export default ArticleForm;
