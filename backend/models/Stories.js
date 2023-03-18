const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    storyTitle: {
        type: String,
        required: true
    },
    subStory: {
        type: [String],
        required: true
    },
    assignees: {
        type: [String],
        required: true
    },
    criteria: {
        type: String,
    }
});

module.exports = mongoose.model('Story', StorySchema);