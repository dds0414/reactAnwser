/**
 * Created by yangbo on 2016/12/27.
 */
var React = require('react');


module.exports = React.createClass({

    handleSubmit : function (e) {
        e.preventDefault();
        var newQuestion = {
            title : this.refs.title.value,
            desc : this.refs.desc.value,
            voteCount : 0,
        };
        this.refs.questionForm.reset();
        this.props.addQuestion(newQuestion);
    },

    render : function () {
        var styleObi = {
            display: this.props.formDisplayed ? 'block' : 'none',
        };
        return (
            <form ref="questionForm" style={styleObi} name="addQuestion" className="clearfix" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
                </div>
                <textarea ref="desc" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</button>
            </form>
        )
    }
});