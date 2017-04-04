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

generateIncomeFunction = function(object) {
  var originalResource = object["originalResource"]
  var newResource = object["newResource"]

  var newResourceIncome = newResource + "Income"

  return function() {
    window[originalResource] -= object["oldResourceCost"]
    window[newResourceIncome] += object["newResourceGain"]
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
  },
  {
    actionTitle: "Create Software (with CoolTech)", actionDescription: "Build the brand new 'Software as a Service' using the latest cool technology. Costs 100🤓. Generates 1💰/tick.",
    customFunction: generateIncomeFunction({originalResource: "power", newResource: "wealth", oldResourceCost: 100, newResourceGain: 1})
  },
  {
    actionTitle: "Fund Research (in CoolTech)", actionDescription: "Sponsor research (i.e, promotional blog posts) into the latest cool technology. Costs 100💰. Generates 1🤔/tick.",
    customFunction: generateIncomeFunction({originalResource: "wealth", newResource: "influence", oldResourceCost: 100, newResourceGain: 1})
  },
  {
    actionTitle: "Train Junior Developers (to use CoolTech)", actionDescription: "CoolTech is the future...once you finish training the future, that is. Costs 100🤔. Generates 1🤓/tick.",
    customFunction: generateIncomeFunction({originalResource: "influence", newResource: "power", oldResourceCost: 100, newResourceGain: 1})
  }
]


ReactDOM.render(<Actions items={actionArray} />, document.getElementById('actions'));

// Write Blog Posts -
// 1) Write a Technical Blog Post (convert paper to power)
// 2) Write a Cultural Blog Post (convert paper to influence)
// 3) Write a Native Ad (convert paper to money)