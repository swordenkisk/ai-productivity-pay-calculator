# AI Productivity & Pay Calculator

A small, dependency-free web app for exploring how AI-driven productivity
improvements might translate into compensation scenarios.

The calculator does not assume that a productivity multiplier should directly
become the same salary multiplier. It makes the assumptions visible: how much
additional productivity becomes business value, and what share of that value
is assigned to the employee.

## Features

- Estimate additional annual business value.
- Model a hypothetical compensation increase.
- Choose from USD, EUR, GBP, SAR, and AED.
- Adjust the productivity multiplier, value realization rate, and employee share.
- Runs locally in a browser with no external services or API keys.

## Run locally

No build step or package installation is required.

1. Clone the repository.
2. Open `index.html` in a browser.

Alternatively, start a local web server from the repository directory:

```bash
python3 -m http.server 8000

Then open http://localhost:8000.

Calculation
The calculator uses these assumptions:

text


Additional business value =
  baseline annual value × (productivity multiplier − 1) × realization rate

Illustrative compensation increase =
  additional business value × employee share

Illustrative total compensation =
  current compensation + illustrative compensation increase
For example, a 10× productivity multiplier does not necessarily produce 10×
business value. The realization rate represents how much of the extra capacity
is converted into measurable value. The employee share is a scenario input,
not a legal or market-standard percentage.

Limitations
This is an illustrative planning tool, not financial, legal, or compensation
advice. Results depend on user-provided assumptions and do not model market
salary data, team contributions, implementation costs, quality changes, risk,
or negotiation leverage.