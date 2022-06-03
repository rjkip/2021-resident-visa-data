# 🇳🇿 2021 New Zealand Resident Visa data

## Data

The 2021 Resident Visa processing times data is updated automatically from
[Immigration New Zealand’s PDF](https://www.immigration.govt.nz/documents/other-resources/2021-resident-visa-processing.pdf).

To pull in the latest updates, run `./update-numbers.bash`, or copy the missing
rows from the PDF to the top of the template string in
[`src/lib/data/processing-data.js`](src/lib/data/processing-data.js).

Confirm the data is interpreted properly by running the application and
inspecting its output.

## Installation/usage

```sh-session
$ npm install
$ npm run dev
```

Visit http://localhost:3000.

## Contributing

Feel free to! Please run `npx prettier --write .` before committing.
