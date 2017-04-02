class Action extends React.Component {

  componentDidUpdate() {
      componentHandler.upgradeDom();
      //or componentHandler.upgradeDom('MaterialTabs');
  }

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">{this.props.actionTitle}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            {this.props.actionDescription}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.props.customFunction}>
            Go!
            </a>
          </div>
        </div>
      );
  }
}

// ReactDOM.render(<Action actionTitle="Hire Freelance Developers" actionDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...Convert 10💰 to 8🤓." />, document.getElementById('actions'));