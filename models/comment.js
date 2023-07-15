const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  lesson: [
    {
      type: Schema.Types.ObjectId,
      ref: "lesson"
    }
  ]
});

CommentSchema.statics.addLesson = function (id, content) {
  const Lesson = model("lesson");

  return this.findById(id).then((comment) => {
    const lesson = new Lesson({ content, comment });
    comment.lesson.push(lesson);
    return Promise.all([lesson.save(), comment.save()]).then(
      ([lesson, comment]) => comment
    );
  });
};

CommentSchema.statics.findLesson = function (id) {
  return this.findById(id)
    .populate("lesson")
    .then((comment) => comment.lesson);
};

model("comment", CommentSchema);
