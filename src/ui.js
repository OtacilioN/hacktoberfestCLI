"use strict";

const { Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: "My First PR",
    url: "https://github.com/my-first-pr/hacktoberfest-2018"
  },
  {
    label: "Make A Pull Request",
    url: "https://github.com/rishabh-bansal/Make-a-Pull-Request"
  },
  {
    label: "First Contributions",
    url: "https://github.com/Roshanjossey/first-contributions"
  },
  {
    label: "Funny Algorithms",
    url: "https://github.com/ReciHub/FunnyAlgorithms"
  },
  {
    label: "Code Sleep Python",
    url: "https://github.com/prateekiiest/Code-Sleep-Python"
  },
  {
    label: "Quit",
    action() {
      process.exit();
    }
  }
];

module.exports = () => (
  <div>
    <div>
      <Gradient name="summer">
        <BigText text="Hacktoberfest 2018" />
      </Gradient>
    </div>
    <br />

    <div>
      <Text>Welcome to hacktoberfest CLI!</Text>
    </div>
    <br />

    <div>
      <Text>Check the projects that are welcome to beginners</Text>
    </div>
    <br />

    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
