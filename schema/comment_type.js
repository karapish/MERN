const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const lessonType = require("./lesson_type");
const Comment = require("../models/comment");

const commentType = new GraphQLObjectType({
  name: "commentType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lessons: {
      type: new GraphQLList(lessonType),
      resolve(parentValue) {
        return Comment.findLesson(parentValue.id);
      }
    }
  })
});

module.exports = commentType;
