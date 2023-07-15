const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const lessonType = require("./lesson_type");
const commentType = require("./comment_type");
const Lesson = require("../models/lesson");
const Comment = require("../models/comment");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    comments: {
      type: new GraphQLList(commentType),
      resolve() {
        return Comment.find({});
      }
    },
    comment: {
      type: commentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Comment.findById(id);
      }
    },
    lesson: {
      type: lessonType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Lesson.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
