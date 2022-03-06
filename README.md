# 🇳🇿 2021 New Zealand Resident Visa data

## Data

The 2021 Resident Visa processing times data must be updated manually from
[Immigration New Zealand’s PDF](https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf).

Copy and append the added rows to the template string in [`processing.js`](src/lib/data/processing.js).

Confirm the data is interpreted properly by running the application and inspecting its output.

## Installation/usage

```sh-session
$ npm install
$ npm run dev
```

Visit http://localhost:3000.

## Contributing

Feel free to! Please run `npx prettier --write .` before committing.
