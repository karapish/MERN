const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Lesson = require("../models/lesson");

const lessonType = new GraphQLObjectType({
  name: "lessonType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    comment: {
      type: require("./comment_type"),
      resolve(parentValue) {
        return Lesson.findById(parentValue)
          .populate("comment")
          .then((lesson) => {
            console.log(lesson);
            return lesson.comment;
          });
      }
    }
  })
});

module.exports = lessonType;
