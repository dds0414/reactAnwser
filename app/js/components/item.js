/**
 * Created by yangbo on 2016/12/27.
 */
var React = require('react');


module.exports = React.createClass({

    voteUp : function () {
        var newCount = parseInt(this.props.voteCount, 10) + 1;
        this.props.onVote(this.props.onVoteKey, newCount)
    },
    voteDown : function () {
        var newCount2 = parseInt(this.props.voteCount, 10) - 1;
        this.props.onVote(this.props.onVoteKey, newCount2)
    },

    render : function () {
        return (
            <div className="media" key={this.props.id}>
                <div className="media-left">
                    <button onClick={this.voteUp} className="btn btn-default">
                        <span  className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.voteCount}</span>
                    </button>
                    <button onClick={this.voteDown} className="btn btn-default">
                        <span  className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
});