/**
 * Created by yangbo on 2016/12/27.
 */
var React = require('react');
var Item = require('./item');


module.exports = React.createClass({
    render: function () {
        var that = this;
        var questions = this.props.questions;
        if (!Array.isArray(questions)) throw new Error("must array");

        var questionComps = questions.map(function (i) {
            return <Item
                onVote={that.props.onVote}
                key={i.id}
                id={i.id}
                onVoteKey={i.id}
                title={i.title}
                desc={i.desc}
                voteCount={i.voteCount}
            />
        });

        return (
            <div id="questions" className="">
                {questionComps}
            </div>
        )
    }
})