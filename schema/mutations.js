const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
//const mongoose = require("mongoose");
const Lesson = require("../models/lesson"); //const Lesson = mongoose.model("lesson");
const Comment = require("../models/comment"); //const Comment = mongoose.model("comment");

const commentType = require("./comment_type");
const lessonType = require("./lesson_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addComment: {
      type: commentType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Comment({ title }).save();
      }
    },
    addLessonToComment: {
      type: commentType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Comment.addLyric(songId, content);
      }
    },
    likeLesson: {
      type: lessonType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lesson.like(id);
      }
    },
    deleteComment: {
      type: commentType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Comment.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
