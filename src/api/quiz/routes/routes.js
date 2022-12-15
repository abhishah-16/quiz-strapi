module.exports = {

    routes: [
        {
            method: "POST",
            path: "/quizzes/:id/score",
            handler: "quiz.score",
            config: {
                policies: [],
                auth: false
            }
        }
    ]

}