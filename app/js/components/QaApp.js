/**
 * Created by yangbo on 2016/12/27.
 */
var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var Form = require('./Form');
var DataList = require('./DataList');
var _ = require('lodash');


module.exports = React.createClass({

    getInitialState: function () {
        var questions = [
            {
                id: 1,
                title: '产品经理与程序员矛盾的本质是什么？',
                desc: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
                voteCount: 20
            },
            {
                id: 2,
                title: '热爱编程是一种怎样的体验？',
                desc: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
                voteCount: 20
            }
        ];
        return {
            questions: questions,
            formDisplayed: false
        }
    },

    onToggleForm: function () {
        this.setState({
            formDisplayed: !this.state.formDisplayed,
        })
    },

    addQuestion: function (newQuestion) {
        newQuestion.id = this.state.questions.length + 1;
        var newQuestions = this.state.questions.concat(newQuestion);
        this.setState({
            questions: newQuestions
        })
    },

    onVote: function (id, count) {
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions, function (qst) {
            return qst.id == id;
        });
        questions[index].voteCount = count;
        this.setState({
            questions: questions
        })
    },

    render: function () {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React问答</h1>
                        <ShowAddButton onToggleForm={this.onToggleForm}/>
                    </div>
                </div>
                <div className="main container">
                    <Form
                        addQuestion={this.addQuestion}
                        onToggleForm={this.onToggleForm}
                        formDisplayed={this.state.formDisplayed}/>
                    <DataList
                        onVote={this.onVote}
                        questions={this.state.questions}/>
                </div>
            </div>
        )
    }
});