// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    gameId: Number,
    "Routes": [Route]
  },
  { timestamps: true }
);

const Route = new Schema(
    {
        routeId: Number,
        "Chapters": [Chapter]
    }
);

const Chapter = new Schema(
    {
        chapterId: Number,
        "Stories": [Story]
    }
)

const Story = new Schema(
    {
        storyId: Number,
        "Pages": [Page]
    }
)

const Page = new Schema(
    {
        pageId: Number,
        Text: String,
        Speaker: String,
        Characters: [String],
        Background: String
    }
)


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Games", DataSchema, 'games');