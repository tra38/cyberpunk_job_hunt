class Actions extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Action actionTitle={item.actionTitle } actionDescription={item.actionDescription} customFunction={item.customFunction} />
        ))}
      </div>
    );
  }
}

generateConvertFunction = function(object) {
  var originalResource = object["originalResource"]
  var newResource = object["newResource"]

  return function() {
    window[originalResource] -= 10
    window[newResource] += 8
  }
}


actionArray = [
  {
    actionTitle: "Hire Developer", actionDescription: "If you do not have the technical talents, you can always engage in a little 'staff augmentation'. Convert 10💰 to 8🤓.", customFunction: generateConvertFunction({originalResource: "wealth", newResource: "power"})
  },
  {
    actionTitle: "Hire Copywriter", actionDescription: "Copywriters write valuable content that bolsters your reputation as a Thought Leader. Convert 10💰 to 8🤔.", wealth: 10, influence: 8, customFunction: generateConvertFunction({originalResource: "wealth", newResource: "influence"})
  },
  {
    actionTitle: "Perform Consulting Work",  actionDescription: "Do the necessary grunt work for the mom-and-pop multinationals. Convert 10🤓 to 8💰.",customFunction: generateConvertFunction({originalResource: "power", newResource: "wealth"})
  },
  {
    actionTitle: "Hold A Private Class", actionDescription: "Using your Thought Leadership to educate other people is rewarding for its own sake. But the money help. Convert 10🤔 to 8💰."
    , customFunction: generateConvertFunction({originalResource: "influence", newResource: "wealth"})
  },
  {
    actionTitle: "Contribute to Open Source", actionDescription: "When you write code for other developers to use and abuse, you are increasing your reputation as a selfless Thought Leader. Convert 10🤓 to 8🤔."
    , customFunction: generateConvertFunction({originalResource: "power", newResource: "influence"})
  },
  {
    actionTitle: "Ask For Help on HFSE", actionDescription: "When you are a Thought Leader, followers naturally arrive. Convert 10🤔 to 8🤓.",
    customFunction: generateConvertFunction({originalResource: "influence", newResource: "power"})
  }
]


ReactDOM.render(<Actions items={actionArray} />, document.getElementById('actions'));