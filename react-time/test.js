/**
 * Created by liuyuhang on 2016/1/5.
 */
var Timer = React.createClass({
    getInitialState:function(){
        return {
            time:(new Date()).toString()
        };
    },
    render:function(){
        this.timer = setInterval(function(){
            this.setState({
                time:(new Date()).toString()
            });
        }.bind(this),1000);
        return (
            <span>{this.state.time}</span>
        );
    }
});
React.render(
    <Timer />,
    document.body
);
