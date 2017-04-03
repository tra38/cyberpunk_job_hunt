class Actions extends React.Component {
  render() {
    return (
     <div className="mdl-grid">
        {this.props.items.map(item => (
          <div className="mdl-cell mdl-cell--4-col">
            <Action actionTitle={item.actionTitle } actionDescription={item.actionDescription} customFunction={item.customFunction} />
          </div>
        ))}
      </div>
    );
  }
}

generateConvertFunction = function(object) {
  var originalResource = object["originalResource"]
  var newResource = object["newResource"]

  return function() {
    window[originalResource] -= object["oldResourceCost"]
    window[newResource] += object["newResourceGain"]
  }
}


actionArray = [
  {
    actionTitle: "Hire Developer", actionDescription: "If you do not have the technical talents, you can always engage in a little 'staff augmentation'. Convert 10💰 to 8🤓.", customFunction: generateConvertFunction({originalResource: "wealth", newResource: "power", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Hire Copywriter", actionDescription: "Copywriters write valuable content that bolsters your reputation as a Thought Leader. Convert 10💰 to 8🤔.", customFunction: generateConvertFunction({originalResource: "wealth", newResource: "influence", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Perform Consulting Work",  actionDescription: "Do the necessary grunt work for the mom-and-pop multinationals. Convert 10🤓 to 8💰.",customFunction: generateConvertFunction({originalResource: "power", newResource: "wealth", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Hold A Private Class", actionDescription: "Using your Thought Leadership to educate other people is rewarding for its own sake. But the money help. Convert 10🤔 to 8💰."
    , customFunction: generateConvertFunction({originalResource: "influence", newResource: "wealth", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Contribute to Open Source", actionDescription: "Writing code for other developers to use and abuse is a good way to boost your reputation. Convert 10🤓 to 7🤔."
    , customFunction: generateConvertFunction({originalResource: "power", newResource: "influence", oldResourceCost: 10, newResourceGain: 7})
  },
  {
    actionTitle: "Invent a Buzzword", actionDescription: "Buzzwords compress complicated ideologies into actionable frameworks that even developers can leverage. Convert 10🤔 to 7🤓.",
    customFunction: generateConvertFunction({originalResource: "influence", newResource: "power", oldResourceCost: 10, newResourceGain: 7})
  }
]


ReactDOM.render(<Actions items={actionArray} />, document.getElementById('actions'));