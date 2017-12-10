class Actions extends React.Component {
  render() {
    return (
     <div className={ "mdl-grid " + (this.props.isActive ? "" : "hidden") }>
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
    actionTitle: "Perform Consulting Work",  actionDescription: "Do the necessary grunt work for the mom-and-pop multinationals. Convert 10🤓 to 8💰.",customFunction: generateConvertFunction({originalResource: "power", newResource: "wealth", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Contribute to Open Source", actionDescription: "Writing code for other developers to use and abuse is a good way to boost your reputation. Convert 10🤓 to 7🤔."
    , customFunction: generateConvertFunction({originalResource: "power", newResource: "influence", oldResourceCost: 10, newResourceGain: 7})
  },
  {
    actionTitle: "Practice Whiteboarding",
    actionDescription: "Anyone can write code, but only a few know how to invert binary trees blindfolded. Convert 10🤓 to 8📚.",
    customFunction: generateConvertFunction({originalResource: "power", newResource: "whiteboard", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Build Networks",
    actionDescription: "Rich people are impressed by technical knowledge. Convert 10📚 to 8🤝.",
    customFunction: generateConvertFunction({originalResource: "whiteboard", newResource: "network", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Get Mentorship", actionDescription: "The rich and powerful are flattered when you ask for their help. Costs 100🤝. Generates 1📚/tick.",
    customFunction: generateIncomeFunction({originalResource: "network", newResource: "whiteboard", oldResourceCost: 100, newResourceGain: 1}),
  }
]

blogArray = [
  {
    actionTitle: "Hire Copywriter", actionDescription: "Copywriters write valuable content that bolsters your reputation as a Thought Leader. Convert 10💰 to 8🤔.", customFunction: generateConvertFunction({originalResource: "wealth", newResource: "influence", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Invent New Buzzword", actionDescription: "Buzzwords compress complicated ideologies into actionable frameworks that even developers can leverage. Convert 10🤔 to 7🤓.",
    customFunction: generateConvertFunction({originalResource: "influence", newResource: "power", oldResourceCost: 10, newResourceGain: 7})
  },
  {
    actionTitle: "Invent New Algorithm", actionDescription: "When the existing hammers don't work, just build a new hammer and post it on your blog. Costs 100📚. Generates 1🤓/tick.",
    customFunction: generateIncomeFunction({originalResource: "whiteboard", newResource: "power", oldResourceCost: 100, newResourceGain: 1}),
  },
  {
    actionTitle: "Sell Training", actionDescription: "Using your Thought Leadership to educate other people is rewarding for its own sake. But the money help. Convert 10🤔 to 8💰."
    , customFunction: generateConvertFunction({originalResource: "influence", newResource: "wealth", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Rant About Politics", actionDescription: "A great way to gain followers and upvotes. Convert 100🤔 to 90🤝.", customFunction: generateConvertFunction({originalResource: "influence", newResource: "network", oldResourceCost: 100, newResourceGain: 90})
  }
]

startupArray = [
  {
    actionTitle: "Hire Developer", actionDescription: "If you do not have the technical talents, you can always engage in a little 'staff augmentation'. Convert 10💰 to 8🤓.", customFunction: generateConvertFunction({originalResource: "wealth", newResource: "power", oldResourceCost: 10, newResourceGain: 8})
  },
  {
    actionTitle: "Fundraise",
    actionDescription: "Money is the lifeblood of all startups. Convert 100🤝 to 90💰.",
    customFunction: generateConvertFunction({originalResource: "network", newResource: "wealth", oldResourceCost: 100, newResourceGain: 90})
  },
  {
    actionTitle: "Maintain Buggy SaaS", actionDescription: "...oh, right, we have to actually sell something. Costs 100🤓. Generates 1💰/tick.",
    customFunction: generateIncomeFunction({originalResource: "power", newResource: "wealth", oldResourceCost: 100, newResourceGain: 1})
  }
]

dayjobArray = [
  {
    actionTitle: "Write Production Code",  actionDescription: "Can we pretend that the codebase is good? If we can, then ship it! Convert 100🤓 to 90💰.",customFunction: generateConvertFunction({originalResource: "power", newResource: "wealth", oldResourceCost: 100, newResourceGain: 90})
  },
  {
    actionTitle: "Write Whitepaper", actionDescription: "People will pay attention to anything with a corporate logo on it. Convert 100🤔 to 90💰.", customFunction: generateConvertFunction({originalResource: "influence", newResource: "wealth", oldResourceCost: 100, newResourceGain: 90})
  },
  {
    actionTitle: "Learn Company Lingo",
    actionDescription: "Further your career by learning more useful jargon. Convert 100🤓 to 90📚.",
    customFunction: generateConvertFunction({originalResource: "power", newResource: "whiteboard", oldResourceCost: 100, newResourceGain: 90})
  }
]

simulationArray = [
  {
    actionTitle: "Fund Research (in CoolTech)", actionDescription: "Sponsor research (i.e, promotional blog posts) into the latest cool technology. Costs 100💰. Generates 1🤔/tick.",
    customFunction: generateIncomeFunction({originalResource: "wealth", newResource: "influence", oldResourceCost: 100, newResourceGain: 1})
  },
  {
    actionTitle: "Train Junior Developers (to use CoolTech)", actionDescription: "CoolTech is the future...once you finish training the future, that is. Costs 100🤔. Generates 1🤓/tick.",
    customFunction: generateIncomeFunction({originalResource: "influence", newResource: "power", oldResourceCost: 100, newResourceGain: 1}),
  },
  {
    actionTitle: "Hire (CoolTech) Evangelist", actionDescription: "Evangelists preaches the virtues of CoolTech to rich and powerful laymen. Costs 100💰. Generates 1🤝/tick.",
    customFunction: generateIncomeFunction({originalResource: "wealth", newResource: "network", oldResourceCost: 100, newResourceGain: 1}),
  }
]

generateSection = function(object) {
  var array = object["array"]
  var divId = object["divId"]
  ReactDOM.render(<Actions items={array} isActive={true} />, document.getElementById(divId))
}

generateSection({array: actionArray, divId: "actions"})
generateSection({array: blogArray, divId: "blog-posts"})
generateSection({array: startupArray, divId: "startup"})
generateSection({array: dayjobArray, divId: "dayjob"})
generateSection({array: simulationArray, divId: "simulation"})



// ReactDOM.render(<Actions items={actionArray} />, document.getElementById('actions'));

// ReactDOM.render(<Actions item={blogPostsArray} />, document.getElementById('blog-posts'))

// Write Blog Posts -
// 1) Write a Technical Blog Post (convert paper to power)
// 2) Write a Cultural Blog Post (convert paper to influence)
// 3) Write a Native Ad (convert paper to money)

//