const { Schema, model } = require("mongoose");

const LessonSchema = new Schema({
  comment: {
    type: Schema.Types.ObjectId,
    ref: "comment"
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

LessonSchema.statics.like = function (id) {
  const Lesson = model("lesson");

  return Lesson.findById(id).then((lesson) => {
    ++lesson.likes;
    return lesson.save();
  });
};

model("lesson", LessonSchema);
